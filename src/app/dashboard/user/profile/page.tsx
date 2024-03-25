import Profile from "@/components/Profile";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h1 className="font-bold cursor-pointer mb-4 text-lg">Profile</h1>
      <div className="border-t border-gray-200 dark:border-gray-600">
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
