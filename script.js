var name="World";
var age=21;
let demo=null;
let undef;
let bool=true;
function sum(a,b)
{
    return a+b;
}
function App(){    
    return (
    <>
    <h1>Hello{name}!</h1>
    <p>Your age is {age}.</p>
    <p>Value of null is :{demo}</p>
    <p>Value of undefined is : {undef}</p>
    <p>Value of Boolean variable is: {bool}</p>
    <p>Sum: {sum(5,6)}</p>
    </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

