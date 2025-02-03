import React from "react";
import DataTable from 'react-data-table-component';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const Consultant   = () => {
    const columns = [
        {
          name: 'Sr. No.',
          selector: row => row["Sr. No."],
        },
        {
          name: 'Name',
          selector: row => row.Name,
          wrap:true
        },
        {
          name: 'Qualification',
          selector: row => row.Qualification,
        },
        {
          name: 'Designation',
          selector: row => row.Designation,
        },
        {
          name: 'Department',
          selector: row => row.Department,
        },
        {
          name: 'D.O.B',
          selector: row => new Date(row["D.O.B"]).toLocaleDateString(),
        },
        {
          name: 'Nature of Appointment',
          selector: row => row["Nature of Appointment"],
        },
        {
          name: 'Registration Board/Reg.No.',
          selector: row => row["Registration Board/Reg.No."],
        },
        {
          name: 'Experience',
          selector: row => row.Experience,
        },
        {
          name: 'Date of Appointment',
          selector: row => new Date(row["Date of Appointment"]).toLocaleDateString(),
        },
        {
          name: 'Contact No.',
          selector: row => row["Contact No."],
        },
        {
          name: 'Email ID',
          selector: row => row["Email ID"],
          wrap:true
        },
        // If you want to display images, you can uncomment the code below
        // {
        //   name: 'Image',
        //   selector: row => row.Image ? <img src={row.Image} alt={row.Name} /> : "No Image",
        // },
      ];
  const data = [
    {
        "Sr. No.": 1,
        "Name": "Dr. GAURISHANKAR YADAV",
        "Qualification": "BAMS, MD",
        "Designation": "Assistant Professor / Consultant",
        "Department": "Panchakarma",
        "D.O.B": 628732800000,
        "Nature of Appointment": "Regular",
        "Registration Board/Reg.No.": "AYPK00626",
        "Experience": "More than 6 years",
        "Date of Appointment": 1728518400000,
        "Contact No.": 9919801055,
        "Email ID": "dr.gaurishankar89@gmail.com",
        "Image": null
      },
      {
        "Sr. No.": 2,
        "Name": "Dr. AJAY KUMAR ANAND",
        "Qualification": "BAMS, MS",
        "Designation": "Assistant Professor / Consultant",
        "Department": "Shalya Tantra",
        "D.O.B": 333272027000,
        "Nature of Appointment": "Regular",
        "Registration Board/Reg.No.": "AYST02477",
        "Experience": "Less than 1 year",
        "Date of Appointment": 1676619227000,
        "Contact No.": 8318913948,
        "Email ID": "drajaykumaranand0@gmail.com",
        "Image": null
      },
      {
        "Sr. No.": 3,
        "Name": "Dr. SHAILESHWARI YADAV",
        "Qualification": "BAMS, MS",
        "Designation": "Assistant Professor / Consultant",
        "Department": "Prasooti Tantra evum Stri Rog",
        "D.O.B": 728611200000,
        "Nature of Appointment": "Regular",
        "Registration Board/Reg.No.": "AYPS01544",
        "Experience": "More than 2 years",
        "Date of Appointment": 1651968000000,
        "Contact No.": 9696366831,
        "Email ID": "yshaileshwari@gmail.com",
        "Image": null
      },
      {
        "Sr. No.": 4,
        "Name": "Dr. SHARAD KUMAR VISHWAKARMA",
        "Qualification": "BAMS, MD",
        "Designation": "Assistant Professor / Consultant",
        "Department": "AgadhTantra",
        "D.O.B":  553764827000,
        "Nature of Appointment": "Regular",
        "Registration Board/Reg.No.": "AYAT00762",
        "Experience": "Less than 2 years",
        "Date of Appointment": 1720856027000,
        "Contact No.": 8887939722,
        "Email ID": "drsharadvish20@gmail.com",
        "Image": null
      },
      {
        "Sr. No.": 6,
        "Name": "Dr. PRATIBHA YADAV",
        "Qualification": "BAMS, MD",
        "Designation": "Assistant Professor / Consultant",
        "Department": "Kayachikitsa",
        "D.O.B": 671700827000,
        "Nature of Appointment": "Regular",
        "Registration Board/Reg.No.": "AYKC03982",
        "Experience": "4 years",
        "Date of Appointment": 1707436800000,
        "Contact No.": 8970851406,
        "Email ID": "drpratibha32@gmail.com",
        "Image": null
      },
      {
        "Sr. No.": 7,
        "Name": "Dr. RISHI KUMAR YADAV",
        "Qualification": "BAMS, MD",
        "Designation": "Assistant Professor / Consultant",
        "Department": "Swasthvritta & Yoga",
        "D.O.B": 657936000000,
        "Nature of Appointment": "Regular",
        "Registration Board/Reg.No.": "AYSV00974",
        "Experience": "Less than 1 year",
        "Date of Appointment": 1717891200000,
        "Contact No.": 9118180180,
        "Email ID": "rishisurya007@gamil.com",
        "Image": null
      }
  ];


      return (
    <div>
      <div className="sHeading">List of Consultant</div>
      <div style={{width:"90%", margin:"auto"}}>
      <DataTable
        columns={columns}
        data={data}
        pagination
        expandableRows
        expandableRowsComponent={ExpandedComponent}
       
      
    
      />
    </div>
      </div>
  );

};

export default Consultant;
