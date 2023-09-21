import "./App.css";
import MaterialUIComponent from "./components/MaterialUIComponent/MaterialUIComponent";
import TailwindComponent from "./components/TailwindComponent/TailwindComponent";
import TypeScriptComponent from "./components/TypeScriptComponent/TypeScriptComponent";
import ZustandComponent from "./components/ZustandComponent/ZustandComponent";

function App() {
  const personData = {
    name: "Lionel Messi",
    age: 36,
    profession: "Soccer Player",
    imageUrl:
      "https://www.baenegocios.com/__export/1672861507442/sites/cronica/img/2023/01/04/messi_copa_del_mundo_1.jpg_623324087.jpg",
  };

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
          person={personData}
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
