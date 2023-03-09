import "./App.css";
import TooltipText from "./tooltip/TooltipText";

function App() {
  return (
    <div className="App">
      Lorem<TooltipText tooltip={"texto del prop tooltip"}> mi texto dentro del  tooltip</TooltipText> Voluptatum totam
      animi alias velit dicta consequatur suscipit provident eaque, cum dolores
      perspiciatis obcaecati aliquid accusamus facilis voluptatem eius minus
      distinctio fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim vero, nihil sint rem nemo soluta
      accusamus nobis voluptatibus excepturi a voluptate necessitatibus dolores accusantium autem architecto atque porro
      perspiciatis placeat? Laudantium officia quae dolor esse maxime totam consequatur, nobis, placeat magnam quo in 
      molestias est odio! Distinctio vitae, natus tempore a ut temporibus numquam omnis quaerat quo ratione iste officia, 
      dolorum dolorem quae explicabo. Ad explicabo quis vitae ullam sint cum aut molestiae a consequatur libero 
      aspernatur, at facilis, magni optio similique facere expedita, tenetur eum veritatis repudiandae sapiente dolores! 
      Eius laboriosam eveniet cum voluptas placeat iste fugiat eum dolorem. 
      <TooltipText tooltip={"otro tooltip"}>otro texto dentro</TooltipText>
    </div>
  );
}

export default App;
