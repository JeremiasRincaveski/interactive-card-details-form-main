import { useState } from "react";
import Card from "./componets/card";
import Form from "./componets/form";
import Thanks from "./componets/thanks";
import { MyProvider } from "./context/CardContext";

function App() {
  const [isComplete, setIsComplete] = useState(false)

  const handleIsComplete = () => {
    setIsComplete(!isComplete)
  }

  return (
    <div>
      <MyProvider>
        <Card />
        
        {isComplete ? <Thanks changeState={handleIsComplete}/> : <Form changeState={handleIsComplete} />}
      </MyProvider>
    </div>
  );
}

export default App;
