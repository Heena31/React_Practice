const Login = () => (
  <>
    <h1>Login to Continue</h1>
    <input type="email" placeholder="email" />
    <input type="password" placeholder="password" />
    <input type="submit" value="Login" />
  </>
);

const mystyle = {
  width: "50%",
};

const Home = () => (
  <>
    <h1>Welcome to home !</h1>
    <h2>Enjoy the catalog of pictures</h2>
    <div id="div1">
      {" "}
      <img
        style={mystyle}
        src="https://imgs.search.brave.com/7UUVRHa9rNXdUhmG4wK32jHranQNExwBLBgtHsjVeeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ5NzYzODg1MzEt/ZDEwNTg0OTRjZGQ4/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFky/RnlmR1Z1ZkRCOGZE/QjhmSHd3"
      />
      <img
        style={mystyle}
        src="https://imgs.search.brave.com/r56nLXNt-6pdsmkTk4v2lQSORL3HipznAp_gIJNAjgs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTg5ODEyODUtNmYw/Yzk0OTU4YmI2P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4bGVIQnNi/M0psTFdabFpXUjhN/VEo4Zkh4bGJud3dm/SHg4Zkh3PQ"
      />
    </div>

    <div id="div2">
      <img
        style={mystyle}
        src="https://imgs.search.brave.com/qm6Hiz5_mAiHG2gDu1CosTj7kYhqTiTt0tcglkO_Cgk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/My8xOS8yMC81Ny9h/aXJjcmFmdC0zMjQx/MjI5XzY0MC5qcGc"
      />

      <img
        style={mystyle}
        src="https://imgs.search.brave.com/tkbFLXUPdKaUmLVNQ-n6vK7lZ-ldn2L_7x9Gmxj31ec/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9mbGlj/a3IvNDI2NDY1ODEw/OV8xNWViOWEwMzk4/X3ouanBnP3Jlc2l6/ZT02MTAsNDI2JnNz/bD0x"
      />
    </div>
  </>
);

const login = true;

const App = () => (
  <>
  {login ? <Home/> : <Login/>}
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
