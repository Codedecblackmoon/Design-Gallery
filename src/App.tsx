import Nave from "./components/Nave"
import Intro from "./components/Intro"
import Card from "./components/Card"

Nave
function App() {
  return (
    <>
      <div id="header">
          <h1 id="logo">Design Gallery</h1>
          <Nave></Nave>
      </div>
      <div id="homepage">
        <Intro></Intro>
        <Card></Card>
      </div>
    </>
  )
}

export default App
