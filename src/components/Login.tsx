"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import metaData from "../dictionaries/globals.json";
import { POST } from "@/lib/CommunicationHelper";
import { useNavigation } from "@/hooks/AppContext";

const Login = () => {
  const { user, setUser, setIsLoading } = useAppContext();
  const { router } = useNavigation();
  const { App } = metaData;
  const [error, setError] = React.useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await POST({ data: user, api: "auth/authenticate" }).then((response) => {
        if (!response?.ok) {
          console.log("error");
          setError("Invalid username or password");
          return;
        }
        response.json().then((data) => {
          const { accessToken, refreshToken } = data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          setUser({ ...user, username: "", password: "" });
          setError(null);
          router.push("/dashboard");
        });
      });
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleLoginSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to {App.name}
        </h5>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInputChange}
            value={user?.username}
            placeholder="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            value={user?.password}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <span className="ms-auto text-sm cursor-pointer text-blue-700 hover:underline dark:text-blue-500">
            Lost Password?
          </span>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        {/*<div className="flex items-center justify-center space-x-2">
          <hr className="w-1/3 border-gray-300 dark:border-gray-600" />
          <span className="text-gray-500 dark:text-gray-300">or</span>
          <hr className="w-1/3 border-gray-300 dark:border-gray-600" />
        </div>*/}
      </form>
    </div>
  );
};

export default Login;
