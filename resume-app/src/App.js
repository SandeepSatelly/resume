import "./App.css";
import Capabilities from "./Components/Capabilities";
import ExperienceList from "./Components/ExperienceList";

function App() {
  return (
    <>
      <div className="Resume">
        <h2>Sandeep Satelly</h2>
        <h1>Hello World!</h1>
        <p>This is a basic Web-App to host resume</p>
      </div>
      <Capabilities />
      <h2>Experience</h2>
      <ExperienceList />
    </>
  );
}

export default App;
