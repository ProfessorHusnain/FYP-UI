"use client";
import React from "react";
import { List, ListItem } from "../NavbarC/DropDownMenu";
import metaData from "@/dictionaries/globals.json";
import { useNavigation } from "@/hooks/AppContext";

const ProfileNavMenu = ({
  IsProfileNavOpen,
  setIsProfileNavOpen,
}: {
  IsProfileNavOpen: boolean;
  setIsProfileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { router } = useNavigation();
  const { ProfileMenu } = metaData;
  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    // Accessing specific attributes
    const value = target.getAttribute("value");
    if (value !== "Logout") router.push(value as string);
    setIsProfileNavOpen(!IsProfileNavOpen);
    };
    
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
              title={item.name}
              href={item.href}
              active={false}
              picReqiured={false}
              key={index}
              onClick={(e) => handleOnClick(e)}
            />
          ))}
        </List>
        <div className="border-t border-gray-200 dark:border-gray-600">
          <List>
            <ListItem
              title="Log out"
              href="Logout"
              active={false}
              picReqiured={false}
              onClick={(e) => handleOnClick(e)}
            />
          </List>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavMenu;
