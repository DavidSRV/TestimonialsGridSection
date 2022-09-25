import "./_styleApp.scss";
import Card from "./components/card/Card";
import data from "../src/utils/info.json";
import { useState, useEffect } from "react";

function App() {
  const [info, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div className="App">
      <main className="App-main">
        {info.map((card) => (
          <Card 
          key={card.name} 
          style={card.style}
          name={card.name}
          academic={card.info.academic}
          opinion={card.info.opinion}
          history={card.info.history}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
