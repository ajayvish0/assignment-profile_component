import "./App.css";

function App() {
  return (
    <div className="container">
      <ProfileContainer />
    </div>
  );
}

function ProfileContainer() {
  return (
    <div>
      <div className=" box"></div>
      <div className="prof"></div>
      <div className="name">
        <h2>
          Rita Correia <span> 32</span>
        </h2>
        <p>London</p>
      </div>
      <hr
        style={{
          width: "100%",
          position: "relative",
          top: "90px",

          height: "2px",
          backgroundColor: "#333",
          border: "none",
        }}
      />
      <div className="bottom">
        <Foll head="80K" title="Followers " />
        <Foll head="803K" title="Likes " />
        <Foll head="1.4K" title="Photos " />
      </div>
    </div>
  );
}
function Foll({ head, title }) {
  return (
    <div>
      <h1>{head}</h1>
      <p>{title}</p>
    </div>
  );
}

export default App;
