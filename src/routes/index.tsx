import { Routes, Route, Navigate } from "react-router-dom";

import { SignUp } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignUp />} />
      <Route path="/" element={<></>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
