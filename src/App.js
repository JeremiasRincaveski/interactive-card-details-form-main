import Card from "./componets/card";
import Form from "./componets/form";
import { MyProvider } from "./context/CardContext";

function App() {
  return (
    <div>
      <MyProvider>
        <Card />

        <Form />
      </MyProvider>
      {/* Thank you!
      We've added your card details
      Continue */}
    </div>
  );
}

export default App;
