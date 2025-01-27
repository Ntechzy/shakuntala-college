import PrincipalMedicalSuperintendent from "./routes/PrincipalMedicalSuperintendent";
import Superintendent from "./routes/Superitendent";

export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about/",
    submenu: [
      {
        title: "College Council",
        url: "/collegeCouncil.pdf",
        target: "_blank",
      },
      {
        title: "About College",
        url: "/about/#about-college",
      },
      {
        title: "Mission & Vision",
        url: "/about/#mission-vision",
      },
      {
        title: "Chairman's Message",
        url: "/about/#chairman",
      },
      {
        title: "Director's Message",
        url: "/about/#director",
      },
      {
        title: "Principal's Message",
        url: "/about/#principal",
      },
      {
        title: "Awards & Achievements",
        url: "/about/#awards",
      },
      {
        title: "Permissions and Affiliations",
        url: "",
        submenu: [
          {
            title: "State NOC",
            url: "/statenoc.jpg",
            target: "_blank",
          },
          {
            title: "University Affiliation",
            url: "/Affiliation_Letter_2021.jpg",
            target: "_blank",
          },
          {
            title: "Permission Letter By The Government of India",
            url: "/Permission2024.jpg",
            target: "_blank",
          },
        ],
      },
    ],
  },
  {
    title: "Student",
    url: "/student",
    submenu: [
      {
        title: "Courses & Fees",
        url: "/student/#courses-fees",
      },

      {
        title: "Admission Inquiry",
        url: "/student/#admission-inquiry",
      },
      {
        title: "Student List",
        url: "/student/#student-list",
      },
      {
        title: "E-Brochure",
        url: "/student/#e-brochure",
      },
      {
        title: "Result",
        url: "/result",
        submenu: [
          {
            title: "BAMS (UG) Result",
            url: "/result/#bams-ug-result",
          },
          {
            title: "PG Medical AU Result",
            url: "/result/#pg-medical-au-result",
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
        url: "/ncism-mandate/#principal-medical-superintendent",
        content: PrincipalMedicalSuperintendent,
      },
      {
        title: " Medical Superintendent",
        url: "/ncism-mandate/#medical-superintendent",
        content: Superintendent,
      },
      {
        title: "Intake Capacity",
        url: "/ncism-mandate/#intake-capacity",
      },
      {
        title: "Staff List",
        url: "/ncism-mandate/#staff-list",
        submenu: [
          {
            title: "Teaching Staff",
            url: "teaching-staff",
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
          // {
          //   title: "Lecturer",
          //   url: "lecturer",
          // },
          {
            title: "Consultant",
            url: "consultant",
          },
        ],
      },
      {
        title: "Student Details",
        url: "/ncism-mandate/#student-details",
      },
     
      {
        title: "Research Publications",
        url: "/ncism-mandate/#research-publications",
      },
      {
        title: "Conferences and Academic Activities",
        url: "/ncism-mandate/#conference-activities",
      },
      {
        title: "Attendance Report",
        url: "attendance-report",
        submenu: [
          {
            title: "BAMS Students Attendance",
            url: "/assets/student-attendence.pdf",
            target: "_blank"
          },
          {
            title: "Teaching Staff Attendance",
            url: "/T_Attendance24.pdf",
            target: "_blank",
          },
          {
            title: "College Non-Teaching Staff Attendance",
            url: "/NT_Atten24.pdf",
            target: "_blank",
          },
          {
            title: "Hospital Non-Teaching Staff Attendance",
            url: "/H_Atten24.pdf",
            target: "_blank",
          },
        ],
      },
      {
        title: "Affiliations",
        url: "/ncism-mandate/#affiliations",
      },
      {
        title: "Curriculum",
        url: "/ncism-mandate/#curriculum",
       
      },
      {
        title: "Clinical Material in Hospital",
        url: "/ncism-mandate/#clinical-material-in-hospital",
      },
      {
        title: "Hospital Month wise OP/IP Statistics",
        url: "/ncism-mandate/#hospital-month-wise-opip-statistics",
      },
    ],
  },
  {
    title: "Facilities",
    url: "/facilities",
    submenu: [
      {
        title: "Hospital Facilities",
        url: "/facilities/#hospital-facilities",
      },
      {
        title: "College & Other Facilities",
        url: "/facilities/#college-facilities",
      },
      {
        title: "Hostel",
        url: "/facilities/#hostel",
      },
      {
        title: "College Infrastructure",
        url: "/college_infra.pdf",
        target: "_blank",
      },
      {
        title: "Hospital Infrastructure",
        url: "/hospital_infra.pdf",
        target: "_blank",
      },
    ],
  },
  {
    title: "Media",
    url: "/media",
    submenu: [
      {
        title: "Image Gallery",
        url: "/media/#image-gallery",
      },
      {
        title: "Video Gallery",
        url: "/media/#video-gallery",
      },
      {
        title: "News ",
        url: "/media/#news-section",
      },
      {
        title: "Events",
        url: "/events",
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
        title: "Hospital OPD Data",
        url: "https://softitlab.com/sakayu/home.php?year=2023",
        target: "_blank",
      },
      {
        title: "Hospital IPD Data",
        url: "https://softitlab.com/sakayu/home.php?year=2023",
        target: "_blank",
      },
      {
        title: "Panchakarma",
        url: "/panchakarma24.pdf",
        target: "_blank",
      },
      {
        title: "Ksharsutra",
        url: "/ksharsutra24.pdf",
        target: "_blank",
      },
      {
        title: "Operation Theatre",
        url: "/OT2024.pdf",
        target: "_blank",
      },
      {
        title: "Pathology",
        url: "/pathology24.pdf",
        target: "_blank",
      },
      {
        title: "X-Ray / ECG",
        url: "/xrayusg.pdf",
        target: "_blank",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
