import "./App.css";
import TooltipText from "./tooltip/TooltipText";

function App() {
  return (
    <div className="App">
      Lorem ipsum dolor sit amet <TooltipText> mi texto dentro del <span className="text-red"> tooltip</span> </TooltipText> Voluptatum totam
      animi alias velit dicta consequatur suscipit provident eaque, cum dolores
      perspiciatis obcaecati aliquid accusamus facilis voluptatem eius minus
      distinctio fugiat.
    </div>
  );
}

export default App;
