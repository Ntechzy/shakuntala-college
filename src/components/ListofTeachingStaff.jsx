import React, { useState } from "react";
// import DataTable from "react-data-table-component";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';


// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const ListofTeachingStaff = () => {
  // const data = [
  //   {
  //       "Sr. No.":1,
  //       "Name":"Prof. Beena  TRIPATHI",
  //       "Qualification":"BAMS, MD",
  //       "Designation":"Principal",
  //       "Department":"College",
  //       "D.O.B":-93916800000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYDG01158",
  //       "Experience":"More than 15 year",
  //       "Date of Appointment":1729064027000,
  //       "Contact No.":7007951650,
  //       "Email ID":"drbeenatripathi@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":2,
  //       "Name":"Prof. ANIL KUMAR TRIPATHI",
  //       "Qualification":"BAMS, MS",
  //       "Designation":"Medical Superintendent",
  //       "Department":"College",
  //       "D.O.B":378777600000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYST01209",
  //       "Experience":"More than 10 Year",
  //       "Date of Appointment":1646179200000,
  //       "Contact No.":9935568575,
  //       "Email ID":"drshivesh81@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":3,
  //       "Name":"Dr. RAJENDRA PRASAD PAL",
  //       "Qualification":"BAMS, MS",
  //       "Designation":"Associate Professor\/Reader",
  //       "Department":"Rachana Sharir",
  //       "D.O.B":164505600000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYST02316",
  //       "Experience":"More than 5 Year",
  //       "Date of Appointment":1698883200000,
  //       "Contact No.":8416905961,
  //       "Email ID":"rajendra75prasadpal@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":4,
  //       "Name":"Dr. MOHAMMAD ISRAIL",
  //       "Qualification":"BAMS, MD",
  //       "Designation":"Associate Professor\/Reader",
  //       "Department":"Kriya Sharir",
  //       "D.O.B":426556800000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYKS00693",
  //       "Experience":"more than 5 year",
  //       "Date of Appointment":1704585600000,
  //       "Contact No.":8957897408,
  //       "Email ID":"israilhaneef@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":5,
  //       "Name":"Dr. SATYA PRAKASH GUPTA",
  //       "Qualification":"BAMS, MD",
  //       "Designation":"Associate Professor\/Reader",
  //       "Department":"Ayurved Samhita & Siddhant",
  //       "D.O.B":402451200000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYSS01018",
  //       "Experience":"More than 5 Year",
  //       "Date of Appointment":1712102400000,
  //       "Contact No.":9335667077,
  //       "Email ID":"satyaprakashgupta444@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":6,
  //       "Name":"Dr. RUDRA PRATAP SINGH",
  //       "Qualification":"BAMS, MD",
  //       "Designation":"Assistant Professor\/Lecturer",
  //       "Department":"Ayurved Samhita & Siddhant",
  //       "D.O.B":426384000000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYSS01938",
  //       "Experience":"more than 1 year",
  //       "Date of Appointment":1702684800000,
  //       "Contact No.":9415390654,
  //       "Email ID":"dr.rudrabhardwaj03@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":7,
  //       "Name":"Dr.JITENDRA KUMAR MISHRA",
  //       "Qualification":"BAMS, MD",
  //       "Designation":"Associate Professor\/Lecturer",
  //       "Department":"Kriya Sharir",
  //       "D.O.B":455846400000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYKS01125",
  //       "Experience":"more than 1 year",
  //       "Date of Appointment":1734420827000,
  //       "Contact No.":8527265730,
  //       "Email ID":"jayjite1882@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":8,
  //       "Name":"Dr. VIMLESH KUMAR TIWARI",
  //       "Qualification":"BAMS, MD",
  //       "Designation":"Assistant Professor\/Lecturer",
  //       "Department":"Rachana Sharir",
  //       "D.O.B":1704931200000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYRS01397",
  //       "Experience":"Less than 1 year",
  //       "Date of Appointment":1698883200000,
  //       "Contact No.":8795027775,
  //       "Email ID":"vimlesh85tiwari@gmail.com",
  //       // "Image":null
  //   },
  //   {
  //       "Sr. No.":9,
  //       "Name":"Mr. DAYASHANKAR",
  //       "Qualification":"MA Sanskrit, B.ed ",
  //       "Designation":"Assistant Professor\/Lecturer",
  //       "Department":"Ayurved Samhita & Siddhant",
  //       "D.O.B":536457600000,
  //       "Nature of Appointment":"Regular",
  //       "Registration Board\/Reg.No.":"AYSN00461",
  //       "Experience":"More than 2 year",
  //       "Date of Appointment":1707436800000,
  //       "Contact No.":9839453998,
  //       "Email ID":"dayashankar454647@gmail.com",
  //       // "Image":null
  //   },
  //   // {
  //   //     "Sr. No.":10,
  //   //     "Name":"Mrs.KIRAN SRIVASTAVA",
  //   //     "Qualification":"MA Sanskrit",
  //   //     "Designation":"Assistant Professor\/Lecturer",
  //   //     "Department":"Ayurved Samhita & Siddhant",
  //   //     "D.O.B":294883200000,
  //   //     "Nature of Appointment":"Regular",
  //   //     "Registration Board\/Reg.No.":"AYSN00731",
  //   //     "Experience":"More than 1 year",
  //   //     "Date of Appointment":1730592000000,
  //   //     "Contact No.":9415587421,
  //   //     "Email ID":"kiransandeepjnp@gmail.com",
  //   //     // "Image":null
  //   // },
  //   // {
  //   //   "Sr. No.": 11,
  //   //   "Name": "Dr. GAURISHANKAR YADAV",
  //   //   "Qualification": "BAMS, MD",
  //   //   "Designation": "Assistant Professor / Consultant",
  //   //   "Department": "Panchakarma",
  //   //   "D.O.B": 628732800000,
  //   //   "Nature of Appointment": "Regular",
  //   //   "Registration Board/Reg.No.": "AYPK00626",
  //   //   "Experience": "Less than 2 year",
  //   //   "Date of Appointment": 1728518400000,
  //   //   "Contact No.": 9919801055,
  //   //   "Email ID": "dr.gaurishankar89@gmail.com",
  //   //   "Image": null
  //   // },
  //   // {
  //   //   "Sr. No.": 12,
  //   //   "Name": "Dr. SHAILESHWARI YADAV",
  //   //   "Qualification": "BAMS, MS",
  //   //   "Designation": "Assistant Professor / Consultant",
  //   //   "Department": "Prasooti Tantra evum Stri Rog",
  //   //   "D.O.B": 728611200000,
  //   //   "Nature of Appointment": "Regular",
  //   //   "Registration Board/Reg.No.": "AYPS01544",
  //   //   "Experience": "More than 2 years",
  //   //   "Date of Appointment": 1651968000000,
  //   //   "Contact No.": 9696366831,
  //   //   "Email ID": "yshaileshwari@gmail.com",
  //   //   "Image": null
  //   // },
  // ];

  // const columns = [
  //   {
  //     name: 'Sr. No.',
  //     selector: row => row["Sr. No."],
  //   },
  //   {
  //     name: 'Name',
  //     selector: row => row.Name,
  //     wrap:true
  //   },
  //   {
  //     name: 'Qualification',
  //     selector: row => row.Qualification,
  //   },
  //   {
  //     name: 'Designation',
  //     selector: row => row.Designation,
  //   },
  //   {
  //     name: 'Department',
  //     selector: row => row.Department,
  //   },
  //   {
  //     name: 'D.O.B',
  //     selector: row => new Date(row["D.O.B"]).toLocaleDateString(),
  //   },
  //   {
  //     name: 'Nature of Appointment',
  //     selector: row => row["Nature of Appointment"],
  //   },
  //   {
  //     name: 'Registration Board/Reg.No.',
  //     selector: row => row["Registration Board/Reg.No."],
  //   },
  //   {
  //     name: 'Experience',
  //     selector: row => row.Experience,
  //   },
  //   {
  //     name: 'Date of Appointment',
  //     selector: row => new Date(row["Date of Appointment"]).toLocaleDateString(),
  //   },
  //   {
  //     name: 'Contact No.',
  //     selector: row => row["Contact No."],
  //   },
  //   {
  //     name: 'Email ID',
  //     selector: row => row["Email ID"],
  //     wrap:true
  //   },
  //   // If you want to display images, you can uncomment the code below
  //   // {
  //   //   name: 'Image',
  //   //   selector: row => row.Image ? <img src={row.Image} alt={row.Name} /> : "No Image",
  //   // },
  // ];


  const excelFilePath = '/staff_list/Teaching_Staff.xlsx';

  const [excelData, setExcelData] = useState({ cols: null, rows: null, dataloaded: false });

  // Handle file load from public directory
  React.useEffect(() => {
    fetch(excelFilePath)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'StudentList_2025.xlsx');
        ExcelRenderer(file, (err, resp) => {
          if (err) {
            console.error(err);
          } else {
            setExcelData({ cols: resp.cols, rows: resp.rows, dataloaded: true });
          }
        });
      });
  }, []);
  return (
    <div>
      <div className="sHeading">List of Lecturers</div>
      <div style={{width:"100%", margin:"auto"}}>
      {/* <DataTable
        columns={columns}
        data={data}
        pagination
        expandableRows
        expandableRowsComponent={ExpandedComponent}
    
    
      /> */}
        {excelData.dataloaded ? (
          <OutTable data={excelData.rows} columns={excelData.cols} tableClassName="ExcelTable2007"  />
        ) : (
          <div>Loading Excel data...</div>
        )}
      
      </div>
    </div>
  );
};

export default ListofTeachingStaff;
