import { useState } from "react";
import Greating from "./Greating"
import Form from "./components/form"
import NewButton from "./components/Newbutton";
import Card from "./components/Card";

function App() {
  const [visible, setvisible] = useState(false);
  
  return (
    <>
      <Card/>
      <h1><Greating great="Hi people"/></h1><br />
      {visible && (
        <Form  onclose={() => setvisible(false)}></Form>
      )}
      <NewButton onclick={() => setvisible(true)} />
    </>
  )
}

export default App
