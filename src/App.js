import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

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
            <RouteComponent exact path="/" element={<Home />} />
            <RouteComponent path="/create" element={<Create />} />
            <RouteComponent path="/blogs/:id" element={<BlogDetails />} />
            <RouteComponent path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
