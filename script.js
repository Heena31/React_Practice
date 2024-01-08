// const header = document.createElement("h2");
// header.textContent = "Hello JavaScript Element";
// header.className = "header";
// // document.getElementsByClassName("root")[0].append(header);
// document.getElementById("root").append(header);
// console.log("JAVASCRIPT Element",header);

// const reactHeader=React.createElement("h1",{className:"head", id:"reactHead", children:"Hello React!!"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeader);
// console.log("REACT Element",reactHeader);

// const BabelHeader = (
//   <>
//     <h1>Hello JSX</h1>
//     <p>This is Paragraph</p>
//     <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JAVASCRIPT</li>
//         <li>REACT</li>
   

//     </ul>
//   </>
// );

function App()
{
    return <>
      <h1>Hello JSX</h1>
      <p>This is Paragraph</p>
    </>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
