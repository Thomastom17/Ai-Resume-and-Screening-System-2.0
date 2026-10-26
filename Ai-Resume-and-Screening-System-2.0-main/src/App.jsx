import { createBrowserRouter,RouterProvider } from "react-router-dom";
import React from "react";
import LandingPage from "./LandingPage";
import ForgotPassword from "./component-Login/ForgotPassword";
import LoginPage from "./component-Login/LoginPage";
import PasswordResetLink from "./component-Login/PasswordResetLink";
import ResetSuccessful from "./component-Login/ResetSuccessful";
import ResetPasswordPage from "./component-Login/ResetPassword";
import OtpVerfication from "./component-Login/OtpVerfication";





const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage/>
  },
  {
    path: "/Login",
    element:<LoginPage/>
  },
  {
    path: "/ForgotPassword?",
    element:<ForgotPassword/>
  },
   {
    path: "/OtpVerification",
    element:<OtpVerfication/>
  },
  {
    path:"/ResetPassword",
    element:<ResetPasswordPage/>
  },
    {
    path:"/ResetPassword/Successful",
    element:<ResetSuccessful/>
  }
  
],
  {
    basename: "/prp",
  }
)

  const App=()=>{
    return(
    <RouterProvider router={router}/>
    )
  }

  export default App;