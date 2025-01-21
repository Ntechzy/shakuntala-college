import React from "react";
import DataTable from "react-data-table-component";
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const ListofNonTeachingStaff = () => {
  const data =[
    {
        "srNo": 1,
        "name": "Mr. AWADHESH KUMAR SINGH",
        "qualification": "M. Lib",
        "designation": "Librarian",
        "department": "Library",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "18/11/2024 ",
        "contactNo": "8808880167",
        "emailID": "awadheshsingh.2000@rediffimail.com"
    },
    {
        "srNo": 2,
        "name": "Mrs. RAJESHWARI YADAV",
        "qualification": "B. Lib",
        "designation": "Assist. Librarian",
        "department": "Library",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "07/01/2022",
        "contactNo": "6307738457",
        "emailID": "yrajeshwari502@gmal.com"
    },
    {
        "srNo": 3,
        "name": "Mrs. MANJU DEVI",
        "qualification": "Graduate",
        "designation": "Library Attendant",
        "department": "Library",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "01/06/2025",
        "contactNo": "9554651274",
        "emailID": "manju03march@gmail.com"
    },
    {
        "srNo": 4,
        "name": "Mrs. KANCHAN YADAV",
        "qualification": "M.B.A.",
        "designation": "Administration",
        "department": "College Office",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "08/03/2020",
        "contactNo": "9129773253",
        "emailID": "kanchanvns86@gamil.com"
    },
    {
        "srNo": 5,
        "name": "Mr. RAJU YADAV",
        "qualification": "Graduate",
        "designation": "Clerical Staff",
        "department": "College Office",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "05/01/2024",
        "contactNo": "9129509027",
        "emailID": "yraju1515@gmail.com"
    },
    {
        "srNo": 6,
        "name": "Ms. ANJALI MAURYA",
        "qualification": "Graduate",
        "designation": "Clerical Staff",
        "department": "College Office",
        "natureOfAppointment":"Regular",
        "dateOfAppointment": "08/03/2020",
        "contactNo": "9936209120",
        "emailID": "mauryaanjalicom@gmail.com"
    },
    {
        "srNo": 7,
        "name": "Mr. PREM PRAKASH SRIVASTAVA",
        "qualification": "Graduate",
        "designation": "Accountant",
        "department": "College Office",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "08/03/2020",
        "contactNo": "7355089996",
        "emailID": "pp-klab@gmail.com"
    },
    {
        "srNo": 8,
        "name": "Mr. DEVENDRA YADAV",
        "qualification": "12th",
        "designation": "Accountant",
        "department": "Rachana Sharir",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "09/01/2023",
        "contactNo": "8423633287",
        "emailID": "dy4905478@gmail.com"
    },
    {
        "srNo": 9,
        "name": "Ms. KAVITA PATHAK",
        "qualification": "DMLT",
        "designation": "Laboratory Technician",
        "department": "Kriya Sharir",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "09/03/2020",
        "contactNo": "8528464634",
        "emailID": "kavitapathak@gmail.com"
    },
    {
        "srNo": 10,
        "name": "Mr. VIVEK KUMAR SHARMA",
        "qualification": "DMLT",
        "designation": "Laboratory Technician",
        "department": "Rachana Sharir",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "02/08/2024",
        "contactNo": "8874402149",
        "emailID": "vs701955@gmail.com"
    },
    {
        "srNo": 11,
        "name": "Mr. RAJESH YADAV",
        "qualification": "Graduate",
        "designation": "Attendant",
        "department": "Samhita & Siddhant",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "09/04/2020",
        "contactNo": "9198870119",
        "emailID": "rajeshsbi1974@gamil.com"
    },
    {
        "srNo": 12,
        "name": "Mr. SUBHAM DUBEY",
        "qualification": "12th",
        "designation": "Museum Keeper",
        "department": "Rachana Sharir",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "09/04/2020",
        "contactNo": "9598476919",
        "emailID": "sd786281@gmail.com"
    },
    {
        "srNo": 13,
        "name": "Mr. KRISHAN KUMAR",
        "qualification": "Less 10th",
        "designation": "Gardener",
        "department": "Herbal Garden",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "09/01/2023",
        "contactNo": "9860285492",
        "emailID": null
    },
    {
        "srNo": 14,
        "name": "Mr. RAMKESH SHARMA",
        "qualification": "Less 10th",
        "designation": "Multi Purpose Worker",
        "department": "Herbal Garden",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "11/04/2019",
        "contactNo": "9792647655",
        "emailID": null
    },
    {
        "srNo": 15,
        "name": "Mr. JAMIL AHAMAD",
        "qualification": "Less 10th",
        "designation": "Multi Purpose Worker",
        "department": "Herbal Garden",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "09/01/2023",
        "contactNo": "9598476919",
        "emailID": null
    },
    {
        "srNo": 16,
        "name": "Mr. DINESH WARMA",
        "qualification": "Less 10th",
        "designation": "Multi Purpose Worker",
        "department": "Herbal Garden",
        "natureOfAppointment": "Regular",
        "dateOfAppointment": "10/01/2024",
        "contactNo": "9554787515",
        "emailID": null
    }
]

  const columns = [
    {
        name: 'Sr. No.',
        selector: row => row.srNo,
    },
    {
        name: 'Name',
        selector: row => row.name,
        wrap: true
    },
    {
        name: 'Qualification',
        selector: row => row.qualification,
    },
    {
        name: 'Designation',
        selector: row => row.designation,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    // {
    //     name: 'Date of Birth',
    //     selector: row => new Date(row.dob).toLocaleDateString(),
    // },
    {
        name: 'Nature of Appointment',
        selector: row => row.natureOfAppointment,
    },
    // {
    //     name: 'Registration Board Reg No.',
    //     selector: row => row.registrationBoardRegNo,
    // },
    // {
    //     name: 'Experience',
    //     selector: row => row.experience,
    // },
    {
        name: 'Date of Appointment',
        selector: row =>row.dateOfAppointment,
       
    },
    {
        name: 'Contact No.',
        selector: row => row.contactNo,
    },
    {
        name: 'Email ID',
        selector: row => row.emailID,
        wrap: true
    },
    {
        name: 'Image',
        selector: row => <img src={row.image} alt={row.name} style={{ width: '50px', height: '50px' }} />,
    }
];
const customStyles = {
  headCells: {
    style: {
      whiteSpace: 'normal', // Allow wrapping
      wordWrap: 'break-word',
      textAlign: 'center', // Optional: Center-align text
    },
  },
};

  return (
    <div>
      <div className="sHeading">List of Non Teaching Staff</div>

  <div style={{width:"90%", margin:"auto"}}>
    
  <DataTable
  
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
        expandableRows
        expandableRowsComponent={ExpandedComponent
          
        }
        style={{padding:"20px"}}
      
    
      />
  </div>
    </div>
  );
};

export default ListofNonTeachingStaff;
