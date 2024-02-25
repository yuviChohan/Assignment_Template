import React, { useState } from 'react';

function UserProfile({ profile }) {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    // ToDo: Implement functionality to toggle bio visibility
      setShowBio(!showBio); 
  };

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{profile.name}</h2>
      <p>{profile.email}</p>
      {/* ToDo: Conditionally render the user's bio based on showBio's state */}
      {showBio && <p className="mt-2">{profile.bio}</p>}
      <button
        onClick={toggleBio}
        // ToDo: Add styling for the button with Tailwind CSS
        className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {/* ToDo: Change button text based on showBio's state */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
    </div>
  );
}

export default UserProfile;
