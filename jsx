export default function StudentPage() {

  // JSON Object (Student Data)
  const student = {
    name: "T.Sai Brahmesh",
    rollNo: "2400031992",
    department: "Computer Science and Engineering",
    profile: "/profile.jpg"     // put image inside /public folder
  };

  return (
    <div style={styles.container}>
      <h1>Student Profile</h1>

      {/* Profile Image */}
      <img 
        src={student.profile} 
        alt="Profile Image" 
        style={styles.image}
      />

      {/* Student Details */}
      <div style={styles.card}>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Roll No:</b> {student.rollNo}</p>
        <p><b>Department:</b> {student.department}</p>
      </div>
    </div>
  );
}

// Simple inline CSS
const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial"
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px"
  },
  card: {
    display: "inline-block",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
    textAlign: "left",
    minWidth: "250px"
  }
};
