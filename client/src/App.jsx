import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SearchCourse from "./pages/SearchCourse";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import ViewCourse from "./pages/ViewCourse";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<ContactUs />} />
        <Route path="/courses" element={<CourseDetails />} />
        <Route path="/update-password" element={<ResetPassword />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyOtp />} />
        <Route path="/course-view" element={<ViewCourse />} />
      </Routes>
    </div>
  );
};

export default App;
