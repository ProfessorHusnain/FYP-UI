"use client";
import React from "react";
import Image from "next/image";
import ProfileNavMenu from "./ProfileNavMenu";

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
