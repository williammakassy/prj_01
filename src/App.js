import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mycontent from "./components/Mycontent";
import Mynav from "./components/Mynav";

function App() {
  return (
    <>
      <Mynav></Mynav>
      <Router>
        <Routes>
          <Route exact path='/' element={<Mycontent/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
