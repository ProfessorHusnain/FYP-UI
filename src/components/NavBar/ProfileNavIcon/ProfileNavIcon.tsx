"use client";
import React from "react";
import { List, ListItem } from "../NavbarC/DropDownMenu";
import Image from "next/image";
const ProfileNavIcon = () => {
  const [isProfileNavOpen, setIsProfileNavOpen] = React.useState(false);
  return (
    <div className="inline-block relative pb-2">
      <button
        onClick={() => setIsProfileNavOpen(!isProfileNavOpen)}
        className="flex items-center p-1 rounded-full px-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <span className="w-8 h-8 rounded-full relative">
          <Image
            src="https://source.unsplash.com/100x100/?user"
            className="rounded-full"
            alt="user"
            fill
            sizes="100vw"
          />
        </span>

        <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Willom Jackson
        </span>
      </button>
      <ProfileNavMenu
        IsProfileNavOpen={isProfileNavOpen}
        setIsProfileNavOpen={setIsProfileNavOpen}
      />
    </div>
  );
};

export default ProfileNavIcon;

const ProfileMenu = ["Profile", "Settings", "New Relation"];

const ProfileNavMenu = ({
  IsProfileNavOpen,
  setIsProfileNavOpen,
}: {
  IsProfileNavOpen: boolean;
  setIsProfileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${
        IsProfileNavOpen ? "absolute" : "hidden"
      } right-0 z-10 mt-4 w-60 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-600`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <label className="px-4  text-sm  text-gray-800 dark:text-gray-300">
        <span className="font-bold mt-2 ">username</span>
        <br />
        <span className="px-4 mb-2">email@gmail.com</span>
      </label>
      <div className="border-t border-gray-200 dark:border-gray-600">
        <List>
          {ProfileMenu.map((item, index) => (
            <ListItem
              title={item}
              href="/"
              active={false}
              picReqiured={false}
              key={index}
              onClick={() => setIsProfileNavOpen(!IsProfileNavOpen)}
            />
          ))}
        </List>
        <div className="border-t border-gray-200 dark:border-gray-600">
          <List>
            <ListItem
              title="Log out"
              href="/"
              active={false}
              picReqiured={false}
              onClick={() => setIsProfileNavOpen(!IsProfileNavOpen)}
            />
          </List>
        </div>
      </div>
    </div>
  );
};
