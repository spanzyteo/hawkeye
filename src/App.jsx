import Body from "./component/Body"
import Navbar from "./component/Navbar"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
    </>
  )
}

export default App
