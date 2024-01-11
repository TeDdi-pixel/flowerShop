import React from "react";

const ProfileImg = ({ img }) => {
  return img ? (
    <div className="header__profile-img">
      <img src={img} alt="profile-picure" />
    </div>
  ) : null;
};

export default ProfileImg;
