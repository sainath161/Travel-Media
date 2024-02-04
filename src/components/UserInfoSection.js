import React from 'react';

const UserInfoSection = ({ userId }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserInfoSection;