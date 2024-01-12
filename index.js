const arr=[1,2,3,4,5,6];
const obj={
    name:"Joe",
    age:"21",
}

const App=()=>(
<>
{arr.map((key)=><h2>{key*3}</h2>)}
<h2>Name: {obj.name}</h2>
</>
)

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);