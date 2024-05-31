import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/" element={<></>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
