import React, { useState } from 'react';

function UserForm({ onAddProfile }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    // ToDo: Update state with form input values
      const { name, value} = e.target;
      setProfile({
        ...profile,
        [name]: value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ToDo: Implement form validation before submission
    // Otherwise, set errors in state to display validation messages       
      const errors = {};
     
      // We can even use trim() to avoid submission of form by inputting space
      if (profile.name === '') {
          errors.name = 'Name is required! *';
      }
  
      if (profile.email === '') {
          errors.email = 'Email is required! *';
      }
  
      if (profile.bio === '') {
          errors.bio = 'Bio is required! *';
      }
  
      setErrors(errors);
  
      // If there are validation errors, stop submission
      if (Object.keys(errors).length > 0) {
          return;
      }
  
    // If valid, call onAddProfile with the new profile and reset form fields
      onAddProfile(profile);
      setProfile({
          name: '',
          email: '',
          bio: ''
      });
      setErrors({});
  };

  return (
    <div className="mb-8 p-6 max-w-md mx-auto bg- rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={profile.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="John Doe"
          />
          {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={profile.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="johndoe@example.com"
          />
            {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            id="bio"
            value={profile.bio}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="A short bio..."
          ></textarea>
          {errors.bio && (
          <p className="text-red-500 text-sm">{errors.bio}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 hover:focus:ring-red-400"
        >
          Add Profile
        </button>
      </form>
    </div>
  );
}

export default UserForm;
