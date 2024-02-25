import React from 'react';
import UserProfile from './UserProfile';

function UserProfileList({ profiles }) {
  // ToDo: Render a list of UserProfile components based on the profiles prop
  return (
    <div className="space-x-3">
        {profiles.map((profile, index) => (
        <UserProfile key={index} profile={profile} />
        ))} 
    </div>
  );
}

export default UserProfileList;
