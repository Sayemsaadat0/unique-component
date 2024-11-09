// "use client"
// import React from "react";
// import * as XLSX from "xlsx";

// interface User {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     age: number;
//     gender: string;
//     country: string;
//     city: string;
//     phone: string;
//     occupation: string;
// }

// const sampleUsers: User[] = [
//     {
//         id: 1,
//         firstName: "John",
//         lastName: "Doe",
//         email: "john.doe@example.com",
//         age: 28,
//         gender: "Male",
//         country: "USA",
//         city: "New York",
//         phone: "123-456-7890",
//         occupation: "Software Engineer",
//     },
//     {
//         id: 2,
//         firstName: "Jane",
//         lastName: "Smith",
//         email: "jane.smith@example.com",
//         age: 32,
//         gender: "Female",
//         country: "Canada",
//         city: "Toronto",
//         phone: "234-567-8901",
//         occupation: "Product Manager",
//     },
//     // Add more users as needed
// ];

// interface ExcelDownloadProps {
//     data: any;
//     filename: string;
// }

// const ExcelDownload: React.FC<ExcelDownloadProps> = ({ data, filename }) => {
//     const handleDownload = () => {
//         const formattedData = data && data?.map((item: any, index: any) => ({
//             no: index + 1,
//             ...item,
//         }));
//         const workbook = XLSX.utils.book_new();
//         const sheetData = XLSX.utils.json_to_sheet(formattedData);
//         const columnCount = Object.keys(formattedData[0]).length;
//         const columnWidths = Array(columnCount).fill({ wpx: 150 });
//         sheetData["!cols"] = columnWidths;

//         XLSX.utils.book_append_sheet(workbook, sheetData, "Sheet 1");
//         XLSX.writeFile(workbook, `${filename}.xlsx`);
//     };


//     return (
//         <div
//             onClick={handleDownload}
//             className="cursor-pointer border p-3.5 gradientBg rounded-full text-white"
//         >
//             Download
//         </div>
//     );
// };

// const ServiceContainer: React.FC = () => {
//     const getExcelData = (filteredData: any) => {
//         return filteredData.map(({ firstName,
//             lastName,
//             email }: any) => ({
//                 'First Name ': firstName,
//                 'Last Name': lastName,
//                 'Email': email,
//             }));
//     };
//     return (
//         <div>
//             {/* ExcelDownload component to download the user data */}
//             <ExcelDownload data={getExcelData(sampleUsers)} filename="User_Data" />

//             {/* User data table */}
//             <table className="min-w-full bg-white border border-gray-200 mt-4">
//                 <thead>
//                     <tr>
//                         <th className="px-4 py-2 border">ID</th>
//                         <th className="px-4 py-2 border">First Name</th>
//                         <th className="px-4 py-2 border">Last Name</th>
//                         <th className="px-4 py-2 border">Email</th>
//                         <th className="px-4 py-2 border">Age</th>
//                         <th className="px-4 py-2 border">Gender</th>
//                         <th className="px-4 py-2 border">Country</th>
//                         <th className="px-4 py-2 border">City</th>
//                         <th className="px-4 py-2 border">Phone</th>
//                         <th className="px-4 py-2 border">Occupation</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sampleUsers.map((user) => (
//                         <tr key={user.id}>
//                             <td className="px-4 py-2 border">{user.id}</td>
//                             <td className="px-4 py-2 border">{user.firstName}</td>
//                             <td className="px-4 py-2 border">{user.lastName}</td>
//                             <td className="px-4 py-2 border">{user.email}</td>
//                             <td className="px-4 py-2 border">{user.age}</td>
//                             <td className="px-4 py-2 border">{user.gender}</td>
//                             <td className="px-4 py-2 border">{user.country}</td>
//                             <td className="px-4 py-2 border">{user.city}</td>
//                             <td className="px-4 py-2 border">{user.phone}</td>
//                             <td className="px-4 py-2 border">{user.occupation}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ServiceContainer;

// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------
// -----------------------

'use client'
import React from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface ExportPDFProps {
    filename: string;
    data: any[]; // Array of objects
    logoUrl?: string; // Optional prop for logo image URL
    columnsToInclude?: { field: string; label: string }[]; // Optional prop to specify which columns to include with labels
}

const ExportPDF: React.FC<ExportPDFProps> = ({ filename, data, logoUrl, columnsToInclude }) => {
    const handleExport = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        // Define a title and font styles
        doc.setFontSize(18);
        doc.setTextColor("#4A90E2");

        // Add Logo if provided
        if (logoUrl) {
            const imgType = logoUrl.toLowerCase().endsWith("png") ? "PNG" : "JPEG";
            doc.addImage(logoUrl, imgType, marginLeft, 20, 50, 50); // Adjust the position and size
        }

        // Position title below the logo
        let titleYPosition = logoUrl ? 90 : 40; // Adjust the Y position based on logo presence
        doc.text(`${filename} Report`, marginLeft, titleYPosition);

        // Add additional details below the title
        titleYPosition += 20; // Move down by 20pt to add more text
        doc.setFontSize(12);
        doc.setTextColor("#000000"); // Black text for description

        // Adding some additional details
        doc.text("Report generated on: 2024-11-09", marginLeft, titleYPosition);
        titleYPosition += 15; // Move down a bit more for the next line
        doc.text("This report contains details of user data.", marginLeft, titleYPosition);

        // You can add more lines similarly
        titleYPosition += 20; // Add some space before the table

        // Check if columnsToInclude is provided, otherwise include all keys from the first item
        const headers = columnsToInclude ? ["INDEX", ...columnsToInclude.map((col) => col.label)] : ["INDEX", ...Object.keys(data[0]).map((key) => key.toUpperCase())];

        // Map data to include index as the first element in each row, filtering columns
        const formattedData = data.map((item, index) => {
            const row: (string | number)[] = [index + 1]; // Ensure row is typed correctly
            if (columnsToInclude) {
                columnsToInclude.forEach((col) => {
                    row.push(item[col.field] || ""); // Add only the selected columns by their field name
                });
            } else {
                row.push(...Object.values(item) as (string | number)[]); // Assert correct type for Object.values
            }
            return row;
        });

        // Content styling for the table
        const content: any = {
            startY: titleYPosition, // Start the table below the additional details
            head: [headers], // Headers array
            body: formattedData, // Body with data
            theme: "striped",
            styles: {
                fontSize: 12,
                cellPadding: 8,
                fontStyle: "normal",
                overflow: "linebreak",
            },
            headStyles: {
                fillColor: "#4A90E2",
                textColor: "#FFFFFF",
                fontSize: 13,
                fontStyle: "bold",
            },
            bodyStyles: {
                textColor: "#333333",
            },
            alternateRowStyles: {
                fillColor: "#f2f2f2",
            },
        };

        // Generate the table
        autoTable(doc, content);
        doc.save(`${filename}.pdf`);
    };

    return (
        <button onClick={handleExport} className="px-4 py-2 bg-blue-500 text-white rounded">
            Download PDF
        </button>
    );
};

const ServiceContainer = () => {
    const people = [
        { name: "Keanu Reeves", profession: "Actor", age: 58 },
        { name: "Lionel Messi", profession: "Football Player", age: 37 },
        { name: "Cristiano Ronaldo", profession: "Football Player", age: 39 },
        { name: "Jack Nicklaus", profession: "Golf Player", age: 84 },
    ];

    const logoUrl = "/1.jpg"; // Replace with your actual logo URL
    const columnsToInclude = [
        { field: "name", label: "Name" },
        { field: "age", label: "Age" }
    ]; // Specify the columns you want to include, or leave it empty for all columns

    return (
        <div>
            <h1>Export User Data</h1>
            <ExportPDF
                filename="User Report"
                data={people || []}
                logoUrl={logoUrl}
                columnsToInclude={columnsToInclude} // Pass the columns to include here
            />
        </div>
    );
};

export default ServiceContainer;
