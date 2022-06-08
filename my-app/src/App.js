import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./Components/Utility/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import UseraPage from "./Pages/UseraPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<DetailsPage />} />
          <Route path="/users-accounts" element={<UseraPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
