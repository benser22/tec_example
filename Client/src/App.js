import "./App.css";
import MaterialUIComponent from "./components/MaterialUIComponent/MaterialUIComponent";
import TailwindComponent from "./components/TailwindComponent/TailwindComponent";
import TypeScriptComponent from "./components/TypeScriptComponent/TypeScriptComponent";
import ZustandComponent from "./components/ZustandComponent/ZustandComponent";
import { personData } from "./constant/people";

function App() {

  return (
    <div className="App">
      <div>
        <hr></hr>
        <MaterialUIComponent text="Componente de Material-UI" />
      </div>
      <div>
        <hr></hr>
        <TailwindComponent text="Componente de Tailwind" />
      </div>
      <div>
        <hr></hr>
        <TypeScriptComponent
          text="Componente de TypeScript"
          people={personData}
          showDetails={true}
        />
      </div>
      <div>
        <hr></hr>
        <ZustandComponent text="Componente de Zustand" />
      </div>
    </div>
  );
}

export default App;
