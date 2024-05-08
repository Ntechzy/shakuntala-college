import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ErrorPage from "./error-page.jsx";
// import About from "./routes/About.jsx";
// import Contact from "./routes/Contact.jsx";
// import AboutCollege from "./routes/AboutCollege.jsx";
// import AdmissionInquiry from "./routes/AdmissionInquiry.jsx";
// import AttendanceReport from "./routes/AttendanceReport.jsx";
// import Awards from "./routes/Awards.jsx";
// import BAMSStudentAttendance from "./routes/BAMSStudentAttendance.jsx";
// import BAMSUGResult from "./routes/BAMSUGResult.jsx";
// import MissionVision from "./routes/MissionVision.jsx";
// import Chairman from "./routes/Chairman.jsx";
// import CollegeFacilities from "./routes/CollegeFacilities.jsx";
// import CollegenonTeachingStaffAttendance from "./routes/CollegenonTeachingStaffAttendance.jsx";
// import ConferenceActivities from "./routes/ConferenceActivities.jsx";
// import CoursesFees from "./routes/CoursesFees.jsx";
// import Director from "./routes/Director.jsx";
// import EBrochure from "./routes/EBrochure.jsx";
// import Events from "./routes/Events.jsx";
// import Facilities from "./routes/Facilities.jsx";
// import Gym from "./routes/Gym.jsx";
// import HospitalclinicalData from "./routes/HospitalclinicalData.jsx";
// import HospitalFacilities from "./routes/HospitalFacilities.jsx";
// import HospitalNonTeachingStaffAttendance from "./routes/HospitalNonTeachingStaffAttendance.jsx";
// import Hostel from "./routes/Hostel.jsx";
// import ImageGallery from "./routes/ImageGallery.jsx";
// import IntakeCapacity from "./routes/IntakeCapacity.jsx";
// import MDFinalYear from "./routes/MDFinalYear.jsx";
// import MDFirstYear from "./routes/MDFirstYear.jsx";
// import Media from "./routes/Media.jsx";
// import NcismMandate from "./routes/NcismMandate.jsx";
// import NonTeachingStaff from "./routes/NonTeachingStaff.jsx";
// import OtherHospitaldata from "./routes/OtherHospitaldata.jsx";
// import PGMedicalAUResult from "./routes/PGMedicalAUResult.jsx";
// import Principal from "./routes/Principal.jsx";
// import PrincipalMedicalSuperintendent from "./routes/PrincipalMedicalSuperintendent.jsx";
// import ResearchPublications from "./routes/ResearchPublications.jsx";
// import Result from "./routes/Result.jsx";
// import Student from "./routes/Student.jsx";
// import StudentDetails from "./routes/StudentDetails.jsx";
// import StudentList from "./routes/StudentList.jsx";
// import TeachingStaff from "./routes/TeachingStaff.jsx";
// import TeachingStaffAttendance from "./routes/TeachingStaffAttendance.jsx";
// import VideoGallery from "./routes/VideoGallery.jsx";
// import HospitalOpdIpdData from "./routes/HospitalOpdIpdData.jsx";
// import Affiliations from "./routes/Affiliations.jsx";
// import ClinicalMaterial from "./routes/ClinicalMaterial.jsx";
// import HospitalMonthwiseOPIPStats from "./routes/HospitalMonthwiseOPIPStats.jsx";
// import ClinicalStaff from "./routes/ClinicalStaff.jsx";
// import HospitalStaff from "./routes/HospitalStaff.jsx";
// import Root from "./routes/Root.jsx";
// import Home from "./pages/Home/Home.jsx";
// import ApplyNowForm from "./components/ApplyNowForm.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "apply-now",
//         element: <ApplyNowForm />,
//       },
//       {
//         path: "about/about-college",
//         element: <AboutCollege />,
//       },
//       {
//         path: "affiliations",
//         element: <Affiliations />,
//       },
//       {
//         path: "clinical-material-in-hospital",
//         element: <ClinicalMaterial />,
//       },
//       {
//         path: "hospital-month-wise-opip-statistics",
//         element: <HospitalMonthwiseOPIPStats />,
//       },
//       {
//         path: "mission-vision",
//         element: <MissionVision />,
//       },
//       {
//         path: "admission-inquiry",
//         element: <AdmissionInquiry />,
//       },
//       {
//         path: "attendance-report",
//         element: <AttendanceReport />,
//       },
//       {
//         path: "awards",
//         element: <Awards />,
//       },
//       {
//         path: "bams-students-attendance",
//         element: <BAMSStudentAttendance />,
//       },
//       {
//         path: "teaching-staff-attendance",
//         element: <TeachingStaffAttendance />,
//       },
//       {
//         path: "college-non-teaching-staff-attendance",
//         element: <CollegenonTeachingStaffAttendance />,
//       },
//       {
//         path: "hospital-non-teaching-staff-attendance",
//         element: <HospitalNonTeachingStaffAttendance />,
//       },
//       {
//         path: "ncism-mandate/bams-students-attendance",
//         element: <BAMSStudentAttendance />,
//       },
//       {
//         path: "ncism-mandate/teaching-staff-attendance",
//         element: <TeachingStaffAttendance />,
//       },
//       {
//         path: "ncism-mandate/college-non-teaching-staff-attendance",
//         element: <CollegenonTeachingStaffAttendance />,
//       },
//       {
//         path: "ncism-mandate/hospital-non-teaching-staff-attendance",
//         element: <HospitalNonTeachingStaffAttendance />,
//       },
//       {
//         path: "bams-ug-result",
//         element: <BAMSUGResult />,
//       },
//       {
//         path: "chairman",
//         element: <Chairman />,
//       },
//       {
//         path: "college-facilities",
//         element: <CollegeFacilities />,
//       },

//       {
//         path: "conference-activities",
//         element: <ConferenceActivities />,
//       },
//       {
//         path: "courses-fees",
//         element: <CoursesFees />,
//       },
//       {
//         path: "director",
//         element: <Director />,
//       },
//       {
//         path: "e-brochure",
//         element: <EBrochure />,
//       },
//       {
//         path: "events",
//         element: <Events />,
//       },
//       {
//         path: "facilities",
//         element: <Facilities />,
//       },
//       {
//         path: "gym",
//         element: <Gym />,
//       },
//       {
//         path: "hospital-clinical-data",
//         element: <HospitalclinicalData />,
//       },
//       {
//         path: "hospital-facilities",
//         element: <HospitalFacilities />,
//       },

//       {
//         path: "hostel",
//         element: <Hostel />,
//       },
//       {
//         path: "image-gallery",
//         element: <ImageGallery />,
//       },
//       {
//         path: "intake-capacity",
//         element: <IntakeCapacity />,
//       },
//       {
//         path: "md-final-year",
//         element: <MDFinalYear />,
//       },
//       {
//         path: "md-first-year",
//         element: <MDFirstYear />,
//       },
//       {
//         path: "media",
//         element: <Media />,
//       },
//       {
//         path: "ncism-mandate",
//         element: <NcismMandate />,
//       },
//       {
//         path: "teaching-staff",
//         element: <TeachingStaff />,
//       },
//       {
//         path: "non-teaching-staff",
//         element: <NonTeachingStaff />,
//       },
//       {
//         path: "clinical-staff",
//         element: <ClinicalStaff />,
//       },
//       {
//         path: "hospital-staff",
//         element: <HospitalStaff />,
//       },
//       {
//         path: "ncism-mandate/teaching-staff",
//         element: <TeachingStaff />,
//       },
//       {
//         path: "ncism-mandate/non-teaching-staff",
//         element: <NonTeachingStaff />,
//       },
//       {
//         path: "ncism-mandate/clinical-staff",
//         element: <ClinicalStaff />,
//       },
//       {
//         path: "ncism-mandate/hospital-staff",
//         element: <HospitalStaff />,
//       },
//       {
//         path: "other-hospital-data",
//         element: <OtherHospitaldata />,
//       },
//       {
//         path: "pg-medical-au-result",
//         element: <PGMedicalAUResult />,
//       },
//       {
//         path: "principal",
//         element: <Principal />,
//       },
//       {
//         path: "principal-medical-superintendent",
//         element: <PrincipalMedicalSuperintendent />,
//       },
//       {
//         path: "research-publications",
//         element: <ResearchPublications />,
//       },
//       {
//         path: "result",
//         element: <Result />,
//       },
//       {
//         path: "student",
//         element: <Student />,
//       },
//       {
//         path: "student-details",
//         element: <StudentDetails />,
//       },
//       {
//         path: "student-list",
//         element: <StudentList />,
//       },

//       {
//         path: "video-gallery",
//         element: <VideoGallery />,
//       },
//       {
//         path: "hospital-opd-ipd-data",
//         element: <HospitalOpdIpdData />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider children={Children} router={router} /> */}
    {/* {Children} */}
    <App />
  </React.StrictMode>
);
