const Loggedin=true;
const name="Alexa";
const lastname="Diaz";

const App= ()=>(
<>
<h1>Hey {Loggedin ?lastname || name: "User"}!</h1>
{Loggedin && <p>Welcome to the Portal</p>}

</>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);