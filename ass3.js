const store = [
  { id: 1, name: "iPhone 14", price: 1200, quantity: 22 },
  { id: 2, name: "iPad Pro", price: 800, quantity: 18 },
  { id: 3, name: "Macbook Air", price: 1500, quantity: 7 },
  { id: 4, name: "Samsung S23", price: 1100, quantity: 16 },
  { id: 5, name: "Dell Inspiration 5590", price: 1200, quantity: 5 },
];

function App() {
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
