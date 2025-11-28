import React from "react";

// JSON Student Object
const student = {
  name: "T. Sasi Bhaskar Kumar",
  rollNo: "21K61A05D0",
  department: "Computer Science & Engineering",
  image: "/profile.jpg"     // Image stored in public folder
};

export default function StudentDetails() {
  return (
    <div style={{ width: "60%", margin: "30px auto", fontFamily: "Arial" }}>
      <h2>Student Profile Details</h2>

      {/* Profile Image */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={student.image}
          alt="Profile Image"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "2px solid #333"
          }}
        />
      </div>

      {/* Student Details Table */}
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Field</th>
            <th>Information</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td>{student.name}</td>
          </tr>

          <tr>
            <td><b>Roll Number</b></td>
            <td>{student.rollNo}</td>
          </tr>

          <tr>
            <td><b>Department</b></td>
            <td>{student.department}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
