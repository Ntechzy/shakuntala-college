import React from "react";
import DataTable from "react-data-table-component";

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const EmoRmo = () => {
    const data = [
        {
            "S. No": 1,
            "Name of Employee": "Dr. Vivek Kumar Tripathi",
            "Education": "BAMS",
            "Designation": "EMO",
            "Department": "Hospital",
            "Date of Joining": "2023-02-06",
            "Registration No": "53308",
            "Contact No.": "8853166222"
        },
        {
            "S. No": 2,
            "Name of Employee": "Dr. Amit Kumar",
            "Education": "BAMS",
            "Designation": "EMO",
            "Department": "Hospital",
            "Date of Joining": "2024-12-23",
            "Registration No": "",
            "Contact No.": "9451066725"
        },
        {
            "S. No": 3,
            "Name of Employee": "Dr. Vimlesh Yadav",
            "Education": "BAMS",
            "Designation": "RMO",
            "Department": "Hospital",
            "Date of Joining": "2025-03-01",
            "Registration No": "",
            "Contact No.": "7618976309"
        },
        {
            "S. No": 4,
            "Name of Employee": "Dr. Sonam Yadav",
            "Education": "BAMS",
            "Designation": "RMO",
            "Department": "Hospital",
            "Date of Joining": "2024-09-09",
            "Registration No": "73081",
            "Contact No.": "8787082880"
        },
        {
            "S. No": 5,
            "Name of Employee": "Dr. Monal Tiwari",
            "Education": "BAMS",
            "Designation": "RMO",
            "Department": "Hospital",
            "Date of Joining": "2024-10-01",
            "Registration No": "72680",
            "Contact No.": "9984438467"
        }
    ];

    const columns = [
        { name: "S. No", selector: row => row["S. No"], width: "80px" },
        { name: "Name", selector: row => row["Name of Employee"], wrap: true },
        { name: "Education", selector: row => row["Education"] },
        { name: "Designation", selector: row => row["Designation"] },
        { name: "Department", selector: row => row["Department"] },
        {
            name: "Date of Joining",
            selector: row => new Date(row["Date of Joining"]).toLocaleDateString()
        },
        { name: "Registration No", selector: row => row["Registration No"] },
        { name: "Contact No.", selector: row => row["Contact No."], wrap: true }
    ];

    return (
        <div>
            <div className="sHeading">Hospital Staff - EMO & RMO</div>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default EmoRmo;
