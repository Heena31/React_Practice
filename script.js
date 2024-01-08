// const header = document.createElement("h2");
// header.textContent = "Hello JavaScript Element";
// header.className = "header";
// // document.getElementsByClassName("root")[0].append(header);
// document.getElementById("root").append(header);
// console.log("JAVASCRIPT Element",header); 


// const reactHeader=React.createElement("h1",{className:"head", id:"reactHead", children:"Hello React!!"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeader);
// console.log("REACT Element",reactHeader);


const BabelHeader=(<h1>Hello JSX</h1>);
ReactDOM.createRoot(document.getElementById("root")).render(BabelHeader);
