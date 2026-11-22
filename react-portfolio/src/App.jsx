/*
 * File name: App.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
