import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Create" element={<Create />} />
          <Route exact path="/Edit" element={<Edit />} />
          <Route exact path="/Help" element={<Help />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
