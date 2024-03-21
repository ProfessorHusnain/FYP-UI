import exp from "constants";
import { TiTick } from "react-icons/ti";

const DropDownMenu = ({ IsDrawerOpen }: { IsDrawerOpen: boolean }) => {
  return (
    <div
      className={`${
        IsDrawerOpen ? "absolute" : "hidden"
      } right-0 z-10 mt-2 w-60 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div className="" role="none">
        <div
          id="dropdownSearch"
          className="z-10 mt-2 absolute bg-white rounded-lg shadow w-60 dark:bg-gray-700"
        >
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search user"
              />
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-600">
            <List>
              <label className="px-1 text-sm mb-[2px] text-gray-800 dark:text-gray-300">
                Personal Account
              </label>
              <ListItem title="Defulat user" href="/" active />
            </List>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-600">
            <List>
              <label className="px-1 text-sm mb-[2px] text-gray-800 dark:text-gray-300">
                Child Accounts
              </label>
              <ListItem title="Messages" href="/" />
              <ListItem title="Notifications" href="/" />
              <ListItem title="Settings" href="/" />
              <ListItem title="Support" href="/" />
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};
const List = ({ children }: { children: any }) => {
  return (
    <ul className="px-3 py-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
      {children}
    </ul>
  );
};
const ListItem = ({
  title,
  href,
  active = false,
  setActive,
  id,
  onClick,
  picReqiured = true,
}: {
  title: string;
  href: string;
  id?: string;
  picReqiured?: boolean;
  active?: boolean;
  onClick?: (e:any) => void;
  setActive?: (id: string) => void;
}) => {
  return (
    <li id={id} value={id} onClick={(e) => onClick && onClick(e)}>
      <div className="flex cursor-pointer items-center ps-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
        {picReqiured && (
          <div className="relative w-5 h-5 flex justify-center   bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className=" w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
        <span className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
          {title}
        </span>
        {active && <TiTick className="text-lg me-2" />}
      </div>
    </li>
  );
};
export { List, ListItem };
export default DropDownMenu;
