const cars = [
  {
    name: "Honda",
    img: "https://imgs.search.brave.com/i1RTCOBVe2-LbNUvzJa11b-MxQhLULzfROux_PElysU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QxL2I4/LzU4L2QxYjg1ODIw/NDEzZjJmOThkYzgy/YzZjOTE1NTRjOTE2/LmpwZw",
    average: 10,
  },
  {
    name: "Maruti",
    img: "https://imgs.search.brave.com/i1RTCOBVe2-LbNUvzJa11b-MxQhLULzfROux_PElysU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QxL2I4/LzU4L2QxYjg1ODIw/NDEzZjJmOThkYzgy/YzZjOTE1NTRjOTE2/LmpwZw",
    average: 8,
  },
  {
    name: "BMW",
    img: "https://imgs.search.brave.com/i1RTCOBVe2-LbNUvzJa11b-MxQhLULzfROux_PElysU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QxL2I4/LzU4L2QxYjg1ODIw/NDEzZjJmOThkYzgy/YzZjOTE1NTRjOTE2/LmpwZw",
    average: 6,
  },
];
const mystyle = {
  height: "50px",
  width: "70px",
  padding: "4px",
};
const Car = () => (
  <>
    <h1>Car Details</h1>
    <table border="1">
      <thead>
        <tr>
          <th></th>
          <th>&emsp;&emsp;Name&emsp;&emsp;</th>
          <th>&emsp;&emsp;Average&emsp;&emsp;</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>
              <img src={car.img} style={mystyle}></img>
            </td>
            <td>&emsp;&emsp;{car.name}</td>
            <td>&emsp;&emsp;{car.average}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const store = [
  { id: 1, name: "iPhone 14", price: 1200, quantity: 22 },
  { id: 2, name: "iPad Pro", price: 800, quantity: 18 },
  { id: 3, name: "Macbook Air", price: 1500, quantity: 7 },
  { id: 4, name: "Samsung S23", price: 1100, quantity: 16 },
  { id: 5, name: "Dell Inspiration 5590", price: 1200, quantity: 5 },
];

function Store() {
  return (
    <>
      <h1>Record of sold items</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {store.map((store, index) => (
            <tr key={index}>
              <td>{store.id}</td>
              <td>{store.name}</td>
              <td>{store.price}</td>
              <td>{store.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Revenue</td>
            <td colspan="3">$5800</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

const studentData = [
  { name: "Joe", age: 21, marks: 70 },
  { name: "John", age: 16, marks: 75 },
  { name: "Aryan", age: 19, marks: 90 },
];

const Student = () => (
  <>
    <h1>Student Details</h1>
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

function App() {
  let showCars = false;
  if (showCars) {
    return (
      <>
        <Car />
      </>
    );
  } else {
    return (
      <>
        <Car />
        <Student />
      </>
    );
  }
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
