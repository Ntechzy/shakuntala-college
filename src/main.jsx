import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import About from "./routes/About";
import Contact from "./routes/Contact";
import AboutCollege from "./routes/AboutCollege";
import AdmissionInquiry from "./routes/AdmissionInquiry";
import AttendanceReport from "./routes/AttendanceReport";
import Awards from "./routes/Awards";
import BAMSStudentAttendance from "./routes/BAMSStudentAttendance";
import BAMSUGResult from "./routes/BAMSUGResult";
import MissionVision from "./routes/MissionVision";
import Chairman from "./routes/Chairman";
import CollegeFacilities from "./routes/CollegeFacilities";
import CollegenonTeachingStaffAttendance from "./routes/CollegenonTeachingStaffAttendance";
import ConferenceActivities from "./routes/ConferenceActivities";
import CoursesFees from "./routes/CoursesFees";
import Director from "./routes/Director";
import EBrochure from "./routes/EBrochure";
import Events from "./routes/Events";
import Facilities from "./routes/Facilities";
import Gym from "./routes/Gym";
import HospitalclinicalData from "./routes/HospitalclinicalData";
import HospitalFacilities from "./routes/HospitalFacilities";
import HospitalNonTeachingStaffAttendance from "./routes/HospitalNonTeachingStaffAttendance";
import Hostel from "./routes/Hostel";
import ImageGallery from "./routes/ImageGallery";
import IntakeCapacity from "./routes/IntakeCapacity";
import MDFinalYear from "./routes/MDFinalYear";
import MDFirstYear from "./routes/MDFirstYear";
import Media from "./routes/Media";
import NcismMandate from "./routes/NcismMandate";
import NonTeachingStaff from "./routes/NonTeachingStaff";
import OtherHospitaldata from "./routes/OtherHospitaldata";
import PGMedicalAUResult from "./routes/PGMedicalAUResult";
import Principal from "./routes/Principal";
import PrincipalMedicalSuperintendent from "./routes/PrincipalMedicalSuperintendent";
import ResearchPublications from "./routes/ResearchPublications";
import Result from "./routes/Result";
import Student from "./routes/Student";
import StudentDetails from "./routes/StudentDetails";
import StudentList from "./routes/StudentList";
import TeachingStaff from "./routes/TeachingStaff";
import TeachingStaffAttendance from "./routes/TeachingStaffAttendance";
import VideoGallery from "./routes/VideoGallery";
import HospitalOpdIpdData from "./routes/HospitalOpdIpdData";
import Affiliations from "./routes/Affiliations";
import ClinicalMaterial from "./routes/ClinicalMaterial";
import HospitalMonthwiseOPIPStats from "./routes/HospitalMonthwiseOPIPStats";
import ClinicalStaff from "./routes/ClinicalStaff";
import HospitalStaff from "./routes/HospitalStaff";
import Root from "./routes/Root";
import Home from "./pages/Home/Home";
import ApplyNowForm from "./components/ApplyNowForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Lecturer from "./components/Lecturer";
import Consultant from "./components/Consultant";
import Superintendent from "./routes/Superitendent";
import NewsSection from "./routes/NewsSection";
import Carriculum from "./routes/Carriculum";
import EmoRmo from "./components/EmoRmo";
import NCISMHome from "./pages/ncism/NCISMHome";
import NCISMStudentList from "./pages/ncism/student/2024-2025/NCISMStudentList";
import NCISMStudentList2526 from "./pages/ncism/student/2025-2026/NCISMStudentList2526";
import NCISMAttendance2425 from "./pages/ncism/student/2024-2025/NCISMAttendance2425";
import SeminarWorkshop from "./pages/ncism/other-details/SeminarWorkshop";
import Camp from "./pages/ncism/other-details/Camp";
import NCISMHospitalAndOtherStaffList from "./pages/ncism/staff-details/hospita-other-staff/NCISMHospitalAndOtherStaffList";
import NCISMConsultantRMOEMOList from "./pages/ncism/staff-details/consultant-rmo-emo/NCISMConsultantRMOEMOList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "apply-now",
        element: <ApplyNowForm />,
      },
      {
        path: "about/about-college",
        element: <AboutCollege />,
      },
      {
        path: "affiliations",
        element: <Affiliations />,
      },
      {
        path: "clinical-material-in-hospital",
        element: <ClinicalMaterial />,
      },
      {
        path: "hospital-month-wise-opip-statistics",
        element: <HospitalMonthwiseOPIPStats />,
      },
      {
        path: "mission-vision",
        element: <MissionVision />,
      },
      {
        path: "admission-inquiry",
        element: <AdmissionInquiry />,
      },
      {
        path: "attendance-report",
        element: <AttendanceReport />,
      },
      {
        path: "awards",
        element: <Awards />,
      },
      {
        path: "bams-students-attendance",
        element: <BAMSStudentAttendance />,
      },
      {
        path: "teaching-staff-attendance",
        element: <TeachingStaffAttendance />,
      },
      {
        path: "college-non-teaching-staff-attendance",
        element: <CollegenonTeachingStaffAttendance />,
      },
      {
        path: "hospital-non-teaching-staff-attendance",
        element: <HospitalNonTeachingStaffAttendance />,
      },
      {
        path: "ncism-mandate/bams-students-attendance",
        element: <BAMSStudentAttendance />,
      },
      {
        path: "ncism-mandate/teaching-staff-attendance",
        element: <TeachingStaffAttendance />,
      },
      {
        path: "ncism-mandate/college-non-teaching-staff-attendance",
        element: <CollegenonTeachingStaffAttendance />,
      },
      {
        path: "ncism-mandate/hospital-non-teaching-staff-attendance",
        element: <HospitalNonTeachingStaffAttendance />,
      },
      {
        path: "bams-ug-result",
        element: <BAMSUGResult />,
      },
      {
        path: "chairman",
        element: <Chairman />,
      },
      {
        path: "college-facilities",
        element: <CollegeFacilities />,
      },

      {
        path: "conference-activities",
        element: <ConferenceActivities />,
      },
      {
        path: "courses-fees",
        element: <CoursesFees />,
      },
      {
        path: "director",
        element: <Director />,
      },
      {
        path: "e-brochure",
        element: <EBrochure />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "gym",
        element: <Gym />,
      },
      {
        path: "hospital-clinical-data",
        element: <HospitalclinicalData />,
      },
      {
        path: "hospital-facilities",
        element: <HospitalFacilities />,
      },

      {
        path: "hostel",
        element: <Hostel />,
      },
      {
        path: "image-gallery",
        element: <ImageGallery />,
      },
      {
        path: "news-section",
        element: <NewsSection />,
      },
      {
        path: "curriculum",
        element: <Carriculum />,
      },
      {
        path: "intake-capacity",
        element: <IntakeCapacity />,
      },
      {
        path: "md-final-year",
        element: <MDFinalYear />,
      },
      //       {
      // path:"lecturer",
      // element:<Lecturer/>
      //       },
      {
        path: "consultant",
        element: <Consultant />,
      },
      {
        path: "md-first-year",
        element: <MDFirstYear />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "ncism-mandate",
        element: <NcismMandate />,
      },
      {
        path: "teaching-staff",
        element: <TeachingStaff />,
      },
      {
        path: "emo-rmo",
        element: <EmoRmo />,
      },
      {
        path: "non-teaching-staff",
        element: <NonTeachingStaff />,
      },
      {
        path: "clinical-staff",
        element: <ClinicalStaff />,
      },
      {
        path: "hospital-staff",
        element: <HospitalStaff />,
      },
      {
        path: "ncism-mandate/teaching-staff",
        element: <TeachingStaff />,
      },
      {
        path: "ncism-mandate/non-teaching-staff",
        element: <NonTeachingStaff />,
      },
      {
        path: "ncism-mandate/clinical-staff",
        element: <ClinicalStaff />,
      },
      {
        path: "ncism-mandate/hospital-staff",
        element: <HospitalStaff />,
      },
      {
        path: "other-hospital-data",
        element: <OtherHospitaldata />,
      },
      {
        path: "pg-medical-au-result",
        element: <PGMedicalAUResult />,
      },
      {
        path: "principal",
        element: <Principal />,
      },
      {
        path: "ncism-mandate/principal-medical-superintendent",
        element: <PrincipalMedicalSuperintendent />,
      },
      {
        path: "ncism-mandate/medical-superintendent",
        element: <Superintendent />,
      },
      {
        path: "research-publications",
        element: <ResearchPublications />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "student-details",
        element: <StudentDetails />,
      },
      {
        path: "student-list",
        element: <StudentList />,
      },

      {
        path: "video-gallery",
        element: <VideoGallery />,
      },
      {
        path: "hospital-opd-ipd-data",
        element: <HospitalOpdIpdData />,
      },
      {
        path: "ncism-mandate/home-ncism",
        element: <NCISMHome />,
      },
      {
        path: "/ncism-mandate/students/2024-2025/student-list",
        element: <NCISMStudentList />,
      },
      {
        path: "/ncism-mandate/students/2025-2026/student-list",
        element: <NCISMStudentList2526 />,
      },
      {
        path: "/ncism-mandate/students/2024-2025/attendance",
        element: <NCISMAttendance2425 />,
      },
      {
        path: "/ncism-mandate/other-details/seminar-workshop",
        element: <SeminarWorkshop />,
      },
      {
        path: "/ncism-mandate/other-details/camp",
        element: <Camp />,
      },
      {
        path: "/ncism-mandate/staff-details/hospital-other-staff",
        element: <NCISMHospitalAndOtherStaffList />,
      },
      {
        path: "/ncism-mandate/staff-details/consultant-rmo-emo",
        element: <NCISMConsultantRMOEMOList />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
