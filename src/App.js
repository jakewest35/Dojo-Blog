import NavBar from "./NavBar";
import Home from "./Home";

import {
  BrowserRouter,
  Routes,
  Route as RouteComponent,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <RouteComponent path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
