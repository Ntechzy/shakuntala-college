import AboutCollege from "../routes/AboutCollege";
import MissionVision from "../routes/MissionVision";
import Chairman from "../routes/Chairman";
import Director from "../routes/Director";
import Principal from "../routes/Principal";
import Awards from "../routes/Awards";
import CoursesFees from "../routes/CoursesFees";
import AdmissionInquiry from "../routes/AdmissionInquiry";
import StudentList from "../routes/StudentList";
import Carriculum from "../routes/Carriculum";
import EBrochure from "../routes/EBrochure";
import PrincipalMedicalSuperintendent from "../routes/PrincipalMedicalSuperintendent";
import TeachingStaff from "../routes/TeachingStaff";
import IntakeCapacity from "../routes/IntakeCapacity";
import NonTeachingStaff from "../routes/NonTeachingStaff";
import StudentDetails from "../routes/StudentDetails";
import ResearchPublications from "../routes/ResearchPublications";
import ConferenceActivities from "../routes/ConferenceActivities";
import AttendanceReport from "../routes/AttendanceReport";
import Affiliations from "../routes/Affiliations";
import ClinicalMaterial from "../routes/ClinicalMaterial";
import HospitalMonthwiseOPIPStats from "../routes/HospitalMonthwiseOPIPStats";
import CollegeFacilities from "../routes/CollegeFacilities";
import HospitalFacilities from "../routes/HospitalFacilities";
import Hostel from "../routes/Hostel";
import Gym from "../routes/Gym";
import ImageGallery from "../pages/Home/HomeGallery";
import VideoGallery from "../routes/VideoGallery";
import HospitalOpdIpdData from "../routes/HospitalOpdIpdData";
import OtherHospitaldata from "../routes/OtherHospitaldata";
import StaffList from "../routes/StaffList";
import VcOfMgu from "../routes/VcOfMgu";
import Superintendent from "../routes/Superitendent";
import NewsSection from "../routes/NewsSection";

export const menuData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "ABOUT US",
    url: "/about",
    submenu: [
      {
        title: "About College",
        url: "about-college",
        content: AboutCollege,
        // content: () => (

        // ),
      },
      {
        title: "Mission & Vision",
        url: "mission-vision",
        content: MissionVision,

        // content: () => (
        //   <p>
        //     We, at The Dr Shakuntala Ayurvedic Medical College canvas, local
        //     colours—that is what we, at The Dr Shakuntala Ayurvedic Medical
        //     College , simply believe in.
        //   </p>
        // ),
      },
      // {
      //   title: "Chairman's Message",
      //   url: "chairman",
      //   content: Chairman,
      // },
      // {
      //   title: "Vice Chancellor's Message",
      //   url: "director",
      //   content: Director,
      // },
      // {
      //   title: "Principal's Message",
      //   url: "principal",
      //   content: Principal,
      // },
      {
        title: "Awards & Achievements",
        url: "awards",
        // content: "<h1 className='heading1'>Hello in H1</h1>",
        content: Awards,
        // content: () => <AboutCollege />,
      },
    ],
  },
  {
    title: "Student",
    url: "/student",
    submenu: [
      {
        title: "Courses & Fees",
        url: "courses-fees",
        content: CoursesFees,
      },

      {
        title: "Admission Inquiry",
        url: "admission-inquiry",
        content: AdmissionInquiry,
      },
      {
        title: "Student List",
        url: "student-list",
        content: StudentList,
      },
      {
        title: "E-Brochure",
        url: "e-brochure",
        content: EBrochure,
      },
      {
        title: "Result",
        url: "/result",
        content: EBrochure,
        submenu: [
          {
            title: "BAMS (UG) Result",
            url: "bams-ug-result",
          },
          {
            title: "PG Medical AU Result",
            url: "pg-medical-au-result",
            submenu: [
              {
                title: "MD First Year",
                url: "md-first-year",
              },
              {
                title: "MD Final Year",
                url: "md-final-year",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "NCISM Mandate",
    url: "/ncism-mandate",
    submenu: [
      {
        title: "Principal",
        url: "principal-medical-superintendent",
        content: PrincipalMedicalSuperintendent,
      },
      {
        title: " Medical Superintendent",
        url: "medical-superintendent",
        content: Superintendent,
      },
      {
        title: "Vice chancellor Mahayogi Guru Gorakhnath Ayush University",
        url: "vice-chancellor-of-mgu",
        content: VcOfMgu,
      },

      {
        title: "Intake Capacity",
        url: "intake-capacity",
        content: IntakeCapacity,
      },
      {
        title: "Staff List",
        url: "staff-list",
        content: StaffList,
        submenu: [
          {
            title: "Teaching Staff",
            url: "Teaching Staff",
          },
          {
            title: "Non-Teaching Staff",
            url: "non-teaching-staff",
          },
          {
            title: "Clinical Staff",
            url: "clinical-staff",
          },
          {
            title: "Hospital Staff",
            url: "hospital-staff",
          },
        ],
      },
      {
        title: "Student Details",
        url: "student-details",
        content: StudentDetails,
      },

      {
        title: "Research Publications",
        url: "research-publications",
        content: ResearchPublications,
      },
      {
        title: "Conferences and Academic Activities",
        url: "conference-activities",
        content: ConferenceActivities,
      },
      {
        title: "Attendance Report",
        url: "attendance-report",
        content: AttendanceReport,
        submenu: [
          {
            title: "BAMS Students Attendance",
            url: "bams-students-attendance",
          },
          {
            title: "Hospital Non-Teaching Staff Attendance",
            url: "hospital-non-teaching-staff-attendance",
          },
          {
            title: "College Non-Teaching Staff Attendance",
            url: "college-non-teaching-staff-attendance",
          },
          {
            title: "Teaching Staff Attendance",
            url: "teaching-staff-attendance",
          },
        ],
      },
      {
        title: "Affiliations",
        url: "affiliations",
        content: Affiliations,
      },
      {
        title: "Curriculum",
        url: "/ncism-mandate/#curriculum",
        content: Carriculum,
      },
      {
        title: "Clinical Material in Hospital",
        url: "clinical-material-in-hospital",
        content: ClinicalMaterial,
      },
      {
        title: "Hospital Month wise OP/IP Statistics",
        url: "hospital-month-wise-opip-statistics",
        content: HospitalMonthwiseOPIPStats,
      },
    ],
  },
  {
    title: "Facilities",
    url: "/facilities",
    submenu: [
      {
        title: "Hospital Facilities & Infrastructure",
        url: "hospital-facilities",
        content: HospitalFacilities,
      },
      {
        title: "College Facilities & Infrastructure",
        url: "college-facilities",
        content: CollegeFacilities,
      },
      {
        title: "Hostel",
        url: "hostel",
        content: Hostel,
      },
      // {
      //   title: "Gym",
      //   url: "gym",
      //   content: Gym,
      // },
    ],
  },
  {
    title: "Media",
    url: "/media",
    submenu: [
      {
        title: "Image Gallery",
        url: "image-gallery",
        content: ImageGallery,
      },
      {
        title: "Video Gallery",
        url: "video-gallery",
        content: VideoGallery,
      },
      {
        title: "News ",
        url: "news-section",
        content: NewsSection,
      },
      {
        title: "Events",
        url: "/events",
        content: EBrochure,
        submenu: [
          {
            title: "Conference and Academic Activities",
            url: "conference-activities",
          },
        ],
      },
    ],
  },
  {
    title: "Hospital Clinical Data",
    url: "/hospital-clinical-data",
    submenu: [
      {
        title: "Hospital OPD/IPD Data",
        url: "hospital-opd-ipd-data",
        content: HospitalOpdIpdData,
      },
      {
        title: "Other Hospital Data",
        url: "other-hospital-data",
        content: OtherHospitaldata,
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
