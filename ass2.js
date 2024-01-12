const studentData = [
  { name: "Joe", age: 21, marks: 70 },
  { name: "John", age: 16, marks: 75 },
  { name: "Aryan", age: 19, marks: 90 },
];

const App = () => (
  <>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((student, i) => (
          <tr key={i}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
