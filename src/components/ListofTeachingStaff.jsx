// import React from "react";

// const ListofTeachingStaff = () => {
//   return (
//     <div>
//       <div className="sHeading">List of Teaching Staff</div>

//       <table className="">
//         <tbody>
//           <tr className="">
//             <th>Sr. No.</th>
//             <th>Name</th>
//             <th>Qualification</th>
//             <th>Designation</th>
//             <th>Department</th>
//             <th>D.O.B</th>
//             <th>Nature of Appointment</th>
//             <th>Registration Board/Reg.No.</th>
//             <th>Experience</th>
//             <th>Date of Appointment</th>
//             <th>Contact No.</th>
//             <th>Email ID</th>
//             <th>Image</th>
//           </tr>

//           <tr>
//             <td>1</td>
//             <td>Prof. ANIL KUMAR TRIPATHI</td>
//             <td>BAMS, MS</td>
//             <td>Principal</td>
//             <td>College</td>
//             <td>1/2/1982</td>
//             <td>Regular</td>
//             <td>AYST01209</td>
//             <td>More than 10 Year</td>
//             <td>3/2/2022</td>
//             <td>9935568575</td>
//             <td>drshivesh81@gmail.com</td>
//             <td>
//               <img src="/1.png" alt="" />
//             </td>
//           </tr>

//           <tr>
//             <td>2</td>
//             <td>Dr. RUDRA PRATAP SINGH</td>
//             <td>BAMS, MD</td>
//             <td>Assistant Professor/Lecturer</td>
//             <td>Ayurved Samhita &amp; Siddhant</td>
//             <td>7/7/1983</td>
//             <td>Regular</td>
//             <td>AYSS01938</td>
//             <td>Less than 1 year</td>
//             <td>12/16/2023</td>
//             <td>9415390654</td>
//             <td>dr.rudrabhardwaj03@gmail.com</td>
//             <td>
//               {" "}
//               <img src="/2.png" alt="" />
//             </td>
//           </tr>

//           <tr>
//             <td>3</td>
//             <td>Dr. NAGESH CHANDRAKANT SAKHARE</td>
//             <td>BAMS, MD</td>
//             <td>Assistant Professor/Lecturer</td>
//             <td>Ayurved Samhita &amp; Siddhant</td>
//             <td>11/21/1979</td>
//             <td>Regular</td>
//             <td>AYSS01895</td>
//             <td>Less than 1 year</td>
//             <td>11/2/2023</td>
//             <td>9890917341</td>
//             <td>sakhare0nagesh2112@gmail.com</td>
//             <td>
//               <img src="/3.png" />
//             </td>
//           </tr>
//           <tr>
//             <td>4</td>
//             <td>Mr. GYANENDRA PAL Sanskrit</td>
//             <td>BAMS, MD</td>
//             <td>Assistant Professor/Lecturer</td>
//             <td>Ayurved Samhita &amp; Siddhant</td>
//             <td>1/1/1987</td>
//             <td>Regular</td>
//             <td>AYSN00666</td>
//             <td>Less than 1 year</td>
//             <td>11/2/2023</td>
//             <td>9453090807</td>
//             <td>gyanendra0pal@gmail.com</td>
//             <td>
//               <img src="/4.png" alt="" />
//             </td>
//           </tr>

//           <tr>
//             <td>5</td>
//             <td>Dr. RAJENDRA PRASAD PAL</td>
//             <td>BAMS, MS</td>
//             <td>Associate Professor/Reader</td>
//             <td>Rachana Sharir</td>
//             <td>3/20/1975</td>
//             <td>Regular</td>
//             <td>AYST02316</td>
//             <td>More than 5 Year</td>
//             <td>11/2/2023</td>
//             <td>8416905961</td>
//             <td>rajendra75prasadpal@gmail.com</td>
//             <td>
//               <img src="/5.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>6</td>
//             <td>Dr KAVITA NIGAM</td>
//             <td>BAMS, MS</td>
//             <td>Associate Professor/Reader</td>
//             <td>Rachana Sharir</td>
//             <td>1/4/1986</td>
//             <td>Regular</td>
//             <td>AYRS00167</td>
//             <td>More than 5 Year</td>
//             <td>12/1/2023</td>
//             <td>9454814768</td>
//             <td>kavitanigam.396@gmail.com</td>
//             <td>
//               {" "}
//               <img src="/6.png" />
//             </td>
//           </tr>
//           <tr>
//             <td>7</td>
//             <td>Dr. VIMLESH KUMAR TIWARI</td>
//             <td>BAMS, MD</td>
//             <td>Assistant Professor/Lecturer</td>
//             <td>Rachana Sharir</td>
//             <td>2/20/1985</td>
//             <td>Regular</td>
//             <td>AYRS01397</td>
//             <td>Less than 1 year</td>
//             <td>11/2/2023</td>
//             <td>8795027775</td>
//             <td>vimlesh85tiwari@gmail.com</td>
//             <td>
//               {" "}
//               <img src="/7.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>8</td>
//             <td>Dr. PRASHANT BHIMRAO NANDWATE</td>
//             <td>BAMS, MD</td>
//             <td>Associate Professor/Reader</td>
//             <td>Kriya Sharir</td>
//             <td>6/1/1986</td>
//             <td>Regular</td>
//             <td>AYKS01170</td>
//             <td>More than 05 Year</td>
//             <td>11/2/2023</td>
//             <td>8390237351</td>
//             <td>prashant.1nandwate@gmail.com</td>
//             <td>
//               {" "}
//               <img src="/8.png" alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td>9</td>
//             <td>Dr. CHAKRA DHAR DUBEY</td>
//             <td>BAMS, MD</td>
//             <td>Assistant Professor/Lecturer</td>
//             <td>Kriya Sharir</td>
//             <td>10/7/1989</td>
//             <td>Regular</td>
//             <td>AYKS00970</td>
//             <td>More than 01 Year</td>
//             <td>12/16/2023</td>
//             <td>9424580143</td>
//             <td>drcdubey671@gmail.com</td>
//             <td>
//               <img src="/9.png" alt="" />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListofTeachingStaff;



import React from "react";
import DataTable from "react-data-table-component";
// import ListofNonTeachingStaff from "./ListofNonTeachingStaff";
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const ListofTeachingStaff = () => {
  const data = [
    {
        "Sr. No.":1,
        "Name":"Prof. Beena  TRIPATHI",
        "Qualification":"BAMS, MD",
        "Designation":"Principal",
        "Department":"College",
        "D.O.B":-93916800000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYDG01158",
        "Experience":"More than 15 year",
        "Date of Appointment":1729064027000,
        "Contact No.":7007951650,
        "Email ID":"drbeenatripathi@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":2,
        "Name":"Prof. ANIL KUMAR TRIPATHI",
        "Qualification":"BAMS, MS",
        "Designation":"Medical Superintendent",
        "Department":"College",
        "D.O.B":378777600000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYST01209",
        "Experience":"More than 10 Year",
        "Date of Appointment":1646179200000,
        "Contact No.":9935568575,
        "Email ID":"drshivesh81@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":3,
        "Name":"Dr. RAJENDRA PRASAD PAL",
        "Qualification":"BAMS, MS",
        "Designation":"Associate Professor\/Reader",
        "Department":"Rachana Sharir",
        "D.O.B":164505600000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYST02316",
        "Experience":"More than 5 Year",
        "Date of Appointment":1698883200000,
        "Contact No.":8416905961,
        "Email ID":"rajendra75prasadpal@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":4,
        "Name":"Dr. MOHAMMAD ISRAIL",
        "Qualification":"BAMS, MD",
        "Designation":"Associate Professor\/Reader",
        "Department":"Kriya Sharir",
        "D.O.B":426556800000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYKS00693",
        "Experience":"more than 5 year",
        "Date of Appointment":1704585600000,
        "Contact No.":8957897408,
        "Email ID":"israilhaneef@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":5,
        "Name":"Dr. SATYA PRAKASH GUPTA",
        "Qualification":"BAMS, MD",
        "Designation":"Associate Professor\/Reader",
        "Department":"Ayurved Samhita & Siddhant",
        "D.O.B":402451200000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYSS01018",
        "Experience":"More than 5 Year",
        "Date of Appointment":1712102400000,
        "Contact No.":9335667077,
        "Email ID":"satyaprakashgupta444@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":6,
        "Name":"Dr. RUDRA PRATAP SINGH",
        "Qualification":"BAMS, MD",
        "Designation":"Assistant Professor\/Lecturer",
        "Department":"Ayurved Samhita & Siddhant",
        "D.O.B":426384000000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYSS01938",
        "Experience":"more than 1 year",
        "Date of Appointment":1702684800000,
        "Contact No.":9415390654,
        "Email ID":"dr.rudrabhardwaj03@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":7,
        "Name":"Dr.JITENDRA KUMAR MISHRA",
        "Qualification":"BAMS, MD",
        "Designation":"Associate Professor\/Lecturer",
        "Department":"Kriya Sharir",
        "D.O.B":455846400000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYKS01125",
        "Experience":"more than 1 year",
        "Date of Appointment":1734420827000,
        "Contact No.":8527265730,
        "Email ID":"jayjite1882@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":8,
        "Name":"Dr. VIMLESH KUMAR TIWARI",
        "Qualification":"BAMS, MD",
        "Designation":"Assistant Professor\/Lecturer",
        "Department":"Rachana Sharir",
        "D.O.B":1704931200000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYRS01397",
        "Experience":"Less than 1 year",
        "Date of Appointment":1698883200000,
        "Contact No.":8795027775,
        "Email ID":"vimlesh85tiwari@gmail.com",
        // "Image":null
    },
    {
        "Sr. No.":9,
        "Name":"Mr. DAYASHANKAR",
        "Qualification":"MA Sanskrit, B.ed ",
        "Designation":"Assistant Professor\/Lecturer",
        "Department":"Ayurved Samhita & Siddhant",
        "D.O.B":536457600000,
        "Nature of Appointment":"Regular",
        "Registration Board\/Reg.No.":"AYSN00461",
        "Experience":"More than 2 year",
        "Date of Appointment":1707436800000,
        "Contact No.":9839453998,
        "Email ID":"dayashankar454647@gmail.com",
        // "Image":null
    },
    // {
    //     "Sr. No.":10,
    //     "Name":"Mrs.KIRAN SRIVASTAVA",
    //     "Qualification":"MA Sanskrit",
    //     "Designation":"Assistant Professor\/Lecturer",
    //     "Department":"Ayurved Samhita & Siddhant",
    //     "D.O.B":294883200000,
    //     "Nature of Appointment":"Regular",
    //     "Registration Board\/Reg.No.":"AYSN00731",
    //     "Experience":"More than 1 year",
    //     "Date of Appointment":1730592000000,
    //     "Contact No.":9415587421,
    //     "Email ID":"kiransandeepjnp@gmail.com",
    //     // "Image":null
    // },
    // {
    //   "Sr. No.": 11,
    //   "Name": "Dr. GAURISHANKAR YADAV",
    //   "Qualification": "BAMS, MD",
    //   "Designation": "Assistant Professor / Consultant",
    //   "Department": "Panchakarma",
    //   "D.O.B": 628732800000,
    //   "Nature of Appointment": "Regular",
    //   "Registration Board/Reg.No.": "AYPK00626",
    //   "Experience": "Less than 2 year",
    //   "Date of Appointment": 1728518400000,
    //   "Contact No.": 9919801055,
    //   "Email ID": "dr.gaurishankar89@gmail.com",
    //   "Image": null
    // },
    // {
    //   "Sr. No.": 12,
    //   "Name": "Dr. SHAILESHWARI YADAV",
    //   "Qualification": "BAMS, MS",
    //   "Designation": "Assistant Professor / Consultant",
    //   "Department": "Prasooti Tantra evum Stri Rog",
    //   "D.O.B": 728611200000,
    //   "Nature of Appointment": "Regular",
    //   "Registration Board/Reg.No.": "AYPS01544",
    //   "Experience": "More than 2 years",
    //   "Date of Appointment": 1651968000000,
    //   "Contact No.": 9696366831,
    //   "Email ID": "yshaileshwari@gmail.com",
    //   "Image": null
    // },
  ];

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
  return (
    <div>
      <div className="sHeading">List of Lecturers</div>
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

export default ListofTeachingStaff;
