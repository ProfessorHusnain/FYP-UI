const SERVER_URI = "http://localhost:8081";
const POST = async ({ data, api }: { data?: any; api: string }) => {
  const methodType = "POST";
  return controller({ data, methodType, api });
};

const GET = async ({ data, api }: { data?: any; api: string }) => {
  const methodType = "GET";
  return controller({ data, methodType, api });
};

const PUT = async ({ data, api }: { data?: any; api: string }) => {
  const methodType = "PUT";
  return controller({ data, methodType, api });
};

const DELETE = async ({ data, api }: { data?: any; api: string }) => {
  const methodType = "DELETE";
  return controller({ data, methodType, api });
};

interface ICommon {
  data?: any;
  methodType: string;
  api: string;
}
interface IResponse {
  ok: boolean;
  json: () => Promise<any>;
}
interface IError {
  message: string;
}
interface IHeaders {
  "Content-Type": string;
  Authorization?: string;
}
const controller = async ({ data, methodType, api }: ICommon) => {
  try {
    const response = await fetch(SERVER_URI + "/" + api, {
      method: methodType,
      headers: Headers(),
      body: JSON.stringify(data),
    });

    return response; // Return the JSON data
  } catch (error) {
    // Handle any errors occurred during the fetch or JSON parsing
    console.error("Error:", error);
    //throw error;
  }
};
const Headers = () => {
  const accessToken = localStorage.getItem("accessToken");

  // Prepare headers object with Content-Type always included
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Add JWT token to headers if it exists
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return headers;
};

export { POST, GET, PUT, DELETE };
/*
const setCookie = (cookieKey: string, cookieValue: string, maxAge?: any) => {
  cookies().set(cookieKey, cookieValue, {
    expires: maxAge,
    path: "/",
  });
};
const getCookie = (cookieKey: string) => {
  return cookies().get(cookieKey)?.value;
};*/
