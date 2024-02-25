# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
--
--
 // UserProfileList --- In this class snippet we are returning a list of user profile where we have used the horizontal styling between them, it maps an array over the 'profiles', rendering the profile using ''UserProfile //
 // UserForm --- In this class we use handleInputChange to show the values user is typing in the case, then in handleSubmit we are preventig the user from submitting the form with the defult values so for that we use a default function of react preventDefault(), we are validating the form to make sure user enters the values and for email we are using the input type as email so it follows the correct format and we use tailwind css to enhance the looks of our webpage.
 // UserProfile --- In this class we are implemeting the toggle() to toggle visibility for the added user profiles and we also change the state of text according to showBio state by using the conditional function "  {showBio ? 'Hide Bio' : 'Show Bio'}"//.