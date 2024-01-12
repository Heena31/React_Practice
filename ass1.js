const cars = ["Audi", "BMW", "Artica", "Maruti", "Ford"];

const App = () => (
  <>
    <h1>List of Cars</h1>
    <ul>
      {cars.map((car, index) => (
        <li key={index}>
          <h3>{car}</h3>
        </li>
      ))}
    </ul>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
