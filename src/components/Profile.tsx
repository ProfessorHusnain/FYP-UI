"use client";
import React from "react";
import TextBox from "./common/TextBox";

const Profile = () => {
  const [editAbles, setEditables] = React.useState<boolean>(true);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="mt-4">
      <form className="flex flex-col gap-y-4">
        <TextBox
          name="name"
          label="Name"
          value="John Doe"
          onChange={handleInputChange}
          disable={editAbles}
        />

        <TextBox
          name="username"
          value="JohnDoe"
          onChange={() => {}}
          disable={true}
        />
        <TextBox
          name="email"
          type="email"
          value="JohnDoe@gmail.com"
          onChange={handleInputChange}
          disable={editAbles}
        />
        <TextBox
          name="phone"
          type="tel"
          value="+92-1234567890"
          onChange={handleInputChange}
          disable={editAbles}
        />
      </form>
    </div>
  );
};

export default Profile;
