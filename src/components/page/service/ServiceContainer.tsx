"use client"
import React from "react";
import * as XLSX from "xlsx";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    country: string;
    city: string;
    phone: string;
    occupation: string;
}

const sampleUsers: User[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        age: 28,
        gender: "Male",
        country: "USA",
        city: "New York",
        phone: "123-456-7890",
        occupation: "Software Engineer",
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        age: 32,
        gender: "Female",
        country: "Canada",
        city: "Toronto",
        phone: "234-567-8901",
        occupation: "Product Manager",
    },
    // Add more users as needed
];

interface ExcelDownloadProps {
    data: any;
    filename: string;
}

const ExcelDownload: React.FC<ExcelDownloadProps> = ({ data, filename }) => {
    const handleDownload = () => {
        const formattedData = data && data?.map((item: any, index: any) => ({
            no: index + 1,
            ...item,
        }));
        const workbook = XLSX.utils.book_new();
        const sheetData = XLSX.utils.json_to_sheet(formattedData);
        const columnCount = Object.keys(formattedData[0]).length;
        const columnWidths = Array(columnCount).fill({ wpx: 150 });
        sheetData["!cols"] = columnWidths;

        XLSX.utils.book_append_sheet(workbook, sheetData, "Sheet 1");
        XLSX.writeFile(workbook, `${filename}.xlsx`);
    };


    return (
        <div
            onClick={handleDownload}
            className="cursor-pointer border p-3.5 gradientBg rounded-full text-white"
        >
            Download
        </div>
    );
};

const ServiceContainer: React.FC = () => {
    const getExcelData = (filteredData: any) => {
        return filteredData.map(({ firstName,
            lastName,
            email }: any) => ({
                'First Name ': firstName,
                'Last Name': lastName,
                'Email': email,
            }));
    };
    return (
        <div>
            {/* ExcelDownload component to download the user data */}
            <ExcelDownload data={getExcelData(sampleUsers)} filename="User_Data" />

            {/* User data table */}
            <table className="min-w-full bg-white border border-gray-200 mt-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">First Name</th>
                        <th className="px-4 py-2 border">Last Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Age</th>
                        <th className="px-4 py-2 border">Gender</th>
                        <th className="px-4 py-2 border">Country</th>
                        <th className="px-4 py-2 border">City</th>
                        <th className="px-4 py-2 border">Phone</th>
                        <th className="px-4 py-2 border">Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleUsers.map((user) => (
                        <tr key={user.id}>
                            <td className="px-4 py-2 border">{user.id}</td>
                            <td className="px-4 py-2 border">{user.firstName}</td>
                            <td className="px-4 py-2 border">{user.lastName}</td>
                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.age}</td>
                            <td className="px-4 py-2 border">{user.gender}</td>
                            <td className="px-4 py-2 border">{user.country}</td>
                            <td className="px-4 py-2 border">{user.city}</td>
                            <td className="px-4 py-2 border">{user.phone}</td>
                            <td className="px-4 py-2 border">{user.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceContainer;
