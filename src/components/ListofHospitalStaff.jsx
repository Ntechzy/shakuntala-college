import React from "react";
import DataTable from "react-data-table-component";
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const ListofHospitalStaff = () => {
  const data=[
   
    {
        "Sr. No.": 1,
        "Name": "Dr.PRATIBHA YADAV",
        "Qualification": "BAMS, MD",
        "Designation": "Consultant",
        "Working Department": "Kayachikitsa",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1707436800000,
        "Contact No.": 8970851406,
        "Email ID": "drpratibha32@gmail.com"
    },
    {
        "Sr. No.": 2,
        "Name": "Dr. Shaileshwari Yadav",
        "Qualification": "BAMS, MS",
        "Designation": "Consultant",
        "Working Department": "Prasuti Tantra evam Stri Rog",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1659657600000,
        "Contact No.": 9565334833,
        "Email ID": "shaileshwariy@gmail.com"
    },
    {
        "Sr. No.": 3,
        "Name": "Dr. Rishi Kumar",
        "Qualification": "BAMS, MD",
        "Designation": "Consultant",
        "Working Department": "Swasthvritta & Yoga",
        "Nature of Appointment": "Regular",
        "Date of Appointment": null,
        "Contact No.": null,
        "Email ID": null
    },
    {
        "Sr. No.": 4,
        "Name": "Dr. GauriShankar Yadav",
        "Qualification": "BAMS, MD",
        "Designation": "Consultant",
        "Working Department": "Panchkarma",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1728518400000,
        "Contact No.": 9919801055,
        "Email ID": "dr.gaurishankar89@gmail.com"
    },
    {
        "Sr. No.": 5,
        "Name": "Dr. Ajay Kumar Anand",
        "Qualification": "BAMS, MS",
        "Designation": "Consultant",
        "Working Department": "Shalya Tantra",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1676592000000,
        "Contact No.": 8318913948,
        "Email ID": "drajayanand24@gmail.com"
    },
    {
        "Sr. No.": 6,
        "Name": "Dr. Ram Avadh Yadav",
        "Qualification": "MBBS, MD",
        "Designation": "Peadiatrician",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578268800000,
        "Contact No.": 9415273329,
        "Email ID": "drrayadav54@gmail.com"
    },
    {
        "Sr. No.": 7,
        "Name": "Dr. Shakuntala Yadav",
        "Qualification": "MBBS, MS",
        "Designation": "Obs & Gyne",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578268800000,
        "Contact No.": 9918905642,
        "Email ID": "drsakuntalay@gmail.com"
    },
    {
        "Sr. No.": 8,
        "Name": "Dr Anand Vardhan",
        "Qualification": "MBBS, MS",
        "Designation": "Surgeon",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1580688000000,
        "Contact No.": 6390691111,
        "Email ID": "dranandkds@gmail.com"
    },
    {
        "Sr. No.": 9,
        "Name": "Dr Anshu Kumari",
        "Qualification": "MBBS, MD",
        "Designation": "Physician",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1580688000000,
        "Contact No.": 9918905624,
        "Email ID": "anshukumari87@gmail.com"
    },
    {
        "Sr. No.": 10,
        "Name": "Dr Ram Narayan",
        "Qualification": "MBBS, MD",
        "Designation": "Pathologist",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578009600000,
        "Contact No.": 8859921803,
        "Email ID": "drramnarayan02222@gmail.com"
    },
    {
        "Sr. No.": 11,
        "Name": "Dr Anil Gupta",
        "Qualification": "MBBS, MD",
        "Designation": "Anaestesiologist",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578268800000,
        "Contact No.": 9129773253,
        "Email ID": "dranilgupta01111@gmail.com"
    },
    {
        "Sr. No.": 12,
        "Name": "Dr. Dheerendra Bahadur Singh",
        "Qualification": "MBBS, MD",
        "Designation": "Radiologist",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578528000000,
        "Contact No.": 9415257235,
        "Email ID": "drdbsingh010766@gmail.com"
    },
    {
        "Sr. No.": 13,
        "Name": "Dr Dinesh Chandra Kushwaha",
        "Qualification": "MBBS, MS",
        "Designation": "Ophthalmologist",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578096000000,
        "Contact No.": 9918952777,
        "Email ID": "drdckushwaha010158@gmail.com"
    },
    {
        "Sr. No.": 14,
        "Name": "Dr Ayushi Yadav",
        "Qualification": "BDS, MDS",
        "Designation": "Dentist",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1578268800000,
        "Contact No.": 9919185005,
        "Email ID": "ydvayushi31@gmail.com"
    },
    {
        "Sr. No.": 15,
        "Name": "Mr. Sanjay Kumar Gupta",
        "Qualification": "M. Pharma",
        "Designation": "Pharmacognosist",
        "Working Department": "Teaching Pharmacy",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1601510400000,
        "Contact No.": 9648359044,
        "Email ID": "gupta.sanjay31@gmail.com"
    },
    {
        "Sr. No.": 16,
        "Name": "Mr. Rajaram",
        "Qualification": "M. Pharma",
        "Designation": "Analytical Chemist",
        "Working Department": "Teaching Pharmacy",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1601510400000,
        "Contact No.": 8756144633,
        "Email ID": "raja.ram4892@gmail.com"
    },
    {
        "Sr. No.": 17,
        "Name": "Dr.Ajay Yadav",
        "Qualification": "BPT, MPT",
        "Designation": "Physiotherapist",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1706745600000,
        "Contact No.": 9838676285,
        "Email ID": 0
    },
    {
        "Sr. No.": 18,
        "Name": "Dr. Arun Kumar Tiwari",
        "Qualification": "BAMS",
        "Designation": "Depty Medical Suprintendent",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1660867200000,
        "Contact No.": 9451161226,
        "Email ID": "draruntiwari12sep1957@gmail.com"
    },
    {
        "Sr. No.": 19,
        "Name": "Dr. Vivek kumar Tripathi",
        "Qualification": "BAMS",
        "Designation": "EMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1675641600000,
        "Contact No.": 8853166222,
        "Email ID": "dr.tripathi.vivek@gmail.com"
    },
    {
        "Sr. No.": 20,
        "Name": "Dr.Amit Kumar",
        "Qualification": "BAMS",
        "Designation": "EMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1731801600000,
        "Contact No.": 9451066725,
        "Email ID": "dramitkumar9451@gamil.com"
    },
    {
        "Sr. No.": 21,
        "Name": "Dr. Pankaj Prajapati",
        "Qualification": "BAMS",
        "Designation": "RMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1612224000000,
        "Contact No.": 8318930360,
        "Email ID": "pankajprajapati896@gmail.com"
    },
    {
        "Sr. No.": 22,
        "Name": "Dr. Monal Tiwari",
        "Qualification": "BAMS",
        "Designation": "RMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1727740800000,
        "Contact No.": 9984438467,
        "Email ID": "monal.s.tiwari@gmail.com"
    },
    {
        "Sr. No.": 23,
        "Name": "Dr. Sonam Yadav",
        "Qualification": "BAMS",
        "Designation": "RMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1725840000000,
        "Contact No.": 8787082880,
        "Email ID": "yadavsonambams@gmail.com"
    },
    {
        "Sr. No.": 24,
        "Name": "Dr. Anushri soni",
        "Qualification": "BAMS",
        "Designation": "RMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1730419200000,
        "Contact No.": 7355646295,
        "Email ID": "anushrisoni1207@gmail.com"
    },
    {
        "Sr. No.": 25,
        "Name": "Dr. Iffat Yasmin",
        "Qualification": "BAMS",
        "Designation": "RMO",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1617580800000,
        "Contact No.": 7618976309,
        "Email ID": "iffaty64@gmail.com"
    },
    {
        "Sr. No.": 26,
        "Name": "Mr. Satendra Yadav",
        "Qualification": "Graduate",
        "Designation": "Yoga teacher or expert",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Part Time",
        "Date of Appointment": 1601856000000,
        "Contact No.": 8739099023,
        "Email ID": "sy421888@gmail.com"
    },
    {
        "Sr. No.": 27,
        "Name": "Mr. Avanish Kumar Maurya",
        "Qualification": "Diploma",
        "Designation": "X-ray Technician",
        "Working Department": "Modern Medical Staff",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1597363200000,
        "Contact No.": 9198133194,
        "Email ID": "avaneesh088@gmail.com"
    },
    {
        "Sr. No.": 28,
        "Name": "Mr. Vishal Yadav",
        "Qualification": "12th",
        "Designation": "Dark Room Attendant",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1727740800000,
        "Contact No.": 7408858274,
        "Email ID": "vishalyadav33108@gmail.com"
    },
    {
        "Sr. No.": 29,
        "Name": "Ms. Neeta Karpuriya",
        "Qualification": "M.Sc Nursing",
        "Designation": "Matron",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": null,
        "Contact No.": null,
        "Email ID": null
    },
    {
        "Sr. No.": 30,
        "Name": "Mr. Sunil Yadav",
        "Qualification": "M.Sc Nursing",
        "Designation": "Assistant Matron",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1667433600000,
        "Contact No.": 6391863147,
        "Email ID": "sunilking8565@gmail.com"
    },
    {
        "Sr. No.": 31,
        "Name": "Mr. Govind Prasad",
        "Qualification": "Diploma",
        "Designation": "OT Technician",
        "Working Department": "Operation Theater",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1707696000000,
        "Contact No.": null,
        "Email ID": null
    },
    {
        "Sr. No.": 32,
        "Name": "Mr. Sabhashish Kumar",
        "Qualification": "12th",
        "Designation": "OT Attendant",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1641168000000,
        "Contact No.": 9792410705,
        "Email ID": "sabhashishkumar9792410705@gmail.com"
    },
    {
        "Sr. No.": 33,
        "Name": "Ms. Roshani Bano",
        "Qualification": "GNM",
        "Designation": "OT Nurse",
        "Working Department": "Operation Theater",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1601510400000,
        "Contact No.": 7052742628,
        "Email ID": "roshanisalmani1@gmail.com"
    },
    {
        "Sr. No.": 34,
        "Name": "Mr. Pramod kumar Yadav",
        "Qualification": "12th",
        "Designation": "OT Attendant",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599004800000,
        "Contact No.": 9451311510,
        "Email ID": "pramodyadav05@gmail.com"
    },
    {
        "Sr. No.": 35,
        "Name": "Dr. Dharmendra Kumar Prajapati",
        "Qualification": "BAMS",
        "Designation": "PK House Officer",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599177600000,
        "Contact No.": 7676868172,
        "Email ID": "drdkpazm2009@gmail.com"
    },
    {
        "Sr. No.": 36,
        "Name": "Ms. Rupam Verma",
        "Qualification": "ANM",
        "Designation": "PK Staff Nurse",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1730419200000,
        "Contact No.": 8303352959,
        "Email ID": "ruppudeep@gmail.com"
    },
    {
        "Sr. No.": 37,
        "Name": "Mr. Arun Kumar Thakur",
        "Qualification": "Diploma",
        "Designation": "PK Assistant",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1583193600000,
        "Contact No.": 8318495135,
        "Email ID": "goldenthakur308@gmail.com"
    },
    {
        "Sr. No.": 38,
        "Name": "Mr. Shafahad",
        "Qualification": "Diploma",
        "Designation": "PK Assistant",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1730419200000,
        "Contact No.": 7394844794,
        "Email ID": "ahamaddrshahfad@gmail.com"
    },
    {
        "Sr. No.": 39,
        "Name": "Mrs. Jyoti Devi",
        "Qualification": "Diploma",
        "Designation": "PK Assistant",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1583193600000,
        "Contact No.": 9838781104,
        "Email ID": "goldenthakur308@gmail.com"
    },
    {
        "Sr. No.": 40,
        "Name": "Mrs. Priyanka Yadav",
        "Qualification": "Diploma",
        "Designation": "PK Assistant",
        "Working Department": "Panchkarma Therapy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1682294400000,
        "Contact No.": 9450238469,
        "Email ID": "priyankayadav260419@gmail.com"
    },
    {
        "Sr. No.": 41,
        "Name": "Ms. Pooja Modanwal",
        "Qualification": "ANM",
        "Designation": "Staff Nurse Midwife",
        "Working Department": "Labour Room",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1588291200000,
        "Contact No.": 7991266265,
        "Email ID": "poojamodanwal244@gmail.com"
    },
    {
        "Sr. No.": 42,
        "Name": "Ms. Anju Prajapati",
        "Qualification": "GNM",
        "Designation": "Staff Nurse",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1586736000000,
        "Contact No.": 7318494761,
        "Email ID": "anjuprajapati0801@gmail.com"
    },
    {
        "Sr. No.": 43,
        "Name": "Mrs. Suman Devi",
        "Qualification": "GNM",
        "Designation": "Staff Nurse",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1704067200000,
        "Contact No.": 8795309912,
        "Email ID": "suman879530@gmail.com"
    },
    {
        "Sr. No.": 44,
        "Name": "Ms. Pratistha Yadav",
        "Qualification": "GNM",
        "Designation": "Staff Nurse",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1648857600000,
        "Contact No.": 8738886770,
        "Email ID": "kupratishthay@gmail.com"
    },
    {
        "Sr. No.": 45,
        "Name": "Ms. Sonalee Rajbhar",
        "Qualification": "ANM",
        "Designation": "Staff Nurse",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1693526400000,
        "Contact No.": 7236993477,
        "Email ID": "sonalirajbhar000@gmail.com"
    },
    {
        "Sr. No.": 46,
        "Name": "Ms. Poonam Yadav",
        "Qualification": "GNM",
        "Designation": "Staff Nurse",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1690848000000,
        "Contact No.": 9519190094,
        "Email ID": "poonamyadav7736@gmail.com"
    },
    {
        "Sr. No.": 47,
        "Name": "Mr. Awadhesh Kumar Kannaojiya",
        "Qualification": "DMLT",
        "Designation": "Lab Technician",
        "Working Department": "Clinical Laboratory",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1709251200000,
        "Contact No.": 6307006576,
        "Email ID": "monukumar32372@gmail.com"
    },
    {
        "Sr. No.": 48,
        "Name": "Mr. Shivam Yadav",
        "Qualification": "DMLT",
        "Designation": "Lab Technician",
        "Working Department": "Clinical Laboratory",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1726444800000,
        "Contact No.": 8808880167,
        "Email ID": "shivamyadavshivamyadav62637@gmail.com"
    },
    {
        "Sr. No.": 49,
        "Name": "Mr. Adanan Khan",
        "Qualification": "12th",
        "Designation": "Lab Attendant",
        "Working Department": "Clinical Laboratory",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1709251200000,
        "Contact No.": 9598675645,
        "Email ID": "am9701504@gmail.com"
    },
    {
        "Sr. No.": 50,
        "Name": "Mr. Triveni Kumar",
        "Qualification": "Diploma",
        "Designation": "Ayurvedic Pharmacist",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1583798400000,
        "Contact No.": 8534937175,
        "Email ID": "trivenikumar695@gmail.com"
    },
    {
        "Sr. No.": 51,
        "Name": "Mr. Naveen Yadav",
        "Qualification": "Diploma",
        "Designation": "Ayurvedic Pharmacist",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1731283200000,
        "Contact No.": 6388182648,
        "Email ID": "drxny@gmail.com"
    },
    {
        "Sr. No.": 52,
        "Name": "Mr. Manish Srivastava",
        "Qualification": "Graduate",
        "Designation": "Attendant",
        "Working Department": "Teaching Pharmacy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599609600000,
        "Contact No.": 9818815332,
        "Email ID": "manish12345shi@gmail.com"
    },
    {
        "Sr. No.": 53,
        "Name": "Mrs. Sunita Devi",
        "Qualification": "Less 10th",
        "Designation": "Worker",
        "Working Department": "Teaching Pharmacy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599609600000,
        "Contact No.": 7800516965,
        "Email ID": "SY421888@gmail.com"
    },
    {
        "Sr. No.": 54,
        "Name": "Mrs. Rinka Rai",
        "Qualification": "Less 10th",
        "Designation": "Worker",
        "Working Department": "Teaching Pharmacy",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599609600000,
        "Contact No.": 6391982528,
        "Email ID": "rk0888@gmail.com"
    },
    {
        "Sr. No.": 55,
        "Name": "Mr. Anand Vishwakarma",
        "Qualification": "Diploma",
        "Designation": "Registration",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599091200000,
        "Contact No.": 8924879228,
        "Email ID": "dnanahot07@gmail.com"
    },
    {
        "Sr. No.": 56,
        "Name": "Ms. Bhumi Sahu",
        "Qualification": "12th",
        "Designation": "Registration",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1733097600000,
        "Contact No.": 9653245050,
        "Email ID": "shivamsahu826634@gmail.com"
    },
    {
        "Sr. No.": 57,
        "Name": "Mrs. Dimpal Yadav",
        "Qualification": "12th",
        "Designation": "Registration",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1605484800000,
        "Contact No.": 8090275663,
        "Email ID": null
    },
    {
        "Sr. No.": 58,
        "Name": "Mr. Gopi",
        "Qualification": "12th",
        "Designation": "Ward Boy",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599091200000,
        "Contact No.": 7234081884,
        "Email ID": "gopisaroj7233@gmail.com"
    },
    {
        "Sr. No.": 59,
        "Name": "Mr. Vivek Sharma",
        "Qualification": "12th",
        "Designation": "Ward Boy",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599091200000,
        "Contact No.": 9219276072,
        "Email ID": "viveksharmavs2708119@gmail.com"
    },
    {
        "Sr. No.": 60,
        "Name": "Mr. Arshad",
        "Qualification": "12th",
        "Designation": "Dresser",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599091200000,
        "Contact No.": 7704994922,
        "Email ID": "moharshad03333@gmail.com"
    },
    {
        "Sr. No.": 61,
        "Name": "Mr. Dharmendra Kumar",
        "Qualification": "Less 10th",
        "Designation": "Dresser",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1709251200000,
        "Contact No.": 83189452425,
        "Email ID": " "
    },
    {
        "Sr. No.": 62,
        "Name": "Mrs.Sita Devi",
        "Qualification": "Less 10th",
        "Designation": "Ward Aaya",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1580601600000,
        "Contact No.": 7706897290,
        "Email ID": "sitadevi79@gmail.com"
    },
    {
        "Sr. No.": 63,
        "Name": "Mr. Akash Yadav",
        "Qualification": "12th",
        "Designation": "Store keeper",
        "Working Department": "Hospital",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599091200000,
        "Contact No.": 8881698730,
        "Email ID": "yadavakash08299@gmail.com"
    },
    {
        "Sr. No.": 64,
        "Name": "Mr. Govind Singh",
        "Qualification": "12th",
        "Designation": "Electrician",
        "Working Department": "others",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1599177600000,
        "Contact No.": 9557885997,
        "Email ID": "govindsingh8182047914@gmail.com"
    },
    {
        "Sr. No.": 65,
        "Name": "Mr.Ravikant",
        "Qualification": "Less 10th",
        "Designation": "Peon",
        "Working Department": "others",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1733097600000,
        "Contact No.": 9871043184,
        "Email ID": null
    },
    {
        "Sr. No.": 66,
        "Name": "Mr. Santosh Mishra",
        "Qualification": "Less 10th",
        "Designation": "Driver",
        "Working Department": "others",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1690848000000,
        "Contact No.": 8423074211,
        "Email ID": null
    },
    {
        "Sr. No.": 67,
        "Name": "Mr. Vijayshankar Rai",
        "Qualification": "12th",
        "Designation": "Driver",
        "Working Department": "others",
        "Nature of Appointment": "Regular",
        "Date of Appointment": 1578528000000,
        "Contact No.": 7706897290,
        "Email ID": "vijayshankarvijayshankar9284@gmail.com"
    }
]
  
  const columns = [
    {
      name: 'Sr. No.',
      selector: row => row["Sr. No."],
    },
    {
      name: 'Name',
      selector: row => row["Name"],
      wrap: true
    },
    {
      name: 'Qualification',
      selector: row => row["Qualification"],
    },
    {
      name: 'Designation',
      selector: row => row["Designation"],
    },
    {
      name: 'Working Department',
      selector: row => row["Working Department"],
    },
    {
      name: 'Nature of Appointment',
      selector: row => row["Nature of Appointment"],
    },
    {
        name: 'Date of Appointment',
        selector: row => {
          if (!row["Date of Appointment"]) {
            return ;
          }
            const date = new Date(row["Date of Appointment"]).getDate();
            const mnth = new Date(row["Date of Appointment"]).getMonth()+1;
            const fyear = new Date(row["Date of Appointment"]).getFullYear();
            console.log(date);
            
         console.log(`${date}/${mnth}/${fyear}`);
         
            return `${date}/${mnth}/${fyear}`;
        },
    },
    {
      name: 'Contact No.',
      selector: row => row["Contact No."],
    },
    {
      name: 'Email ID',
      selector: row => row["Email ID"],
      wrap: true
    }
];


  return (
    <div>
      <div className="sHeading">Sr. No.</div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
};

export default ListofHospitalStaff;
