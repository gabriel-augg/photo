import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn, SignUp } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<></>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
