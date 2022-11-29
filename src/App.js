import {BrowserRouter, Routes, Route} from "react-router-dom";
import DirectoryList from "./components/Directorylist";
import AddDirectory from "./components/AddDirectory";
import EditDirectory from "./components/EditDirectory";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil"; 
import Peneliti from "./pages/Peneliti";
import Jurnal from "./pages/Jurnal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/dashboard/add" element={<AddDirectory/>}/>
        <Route path="/dashboard/add/edit/:id" element={<EditDirectory/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/profil" element={<Profil/>}/>
        <Route path="/dashboard/peneliti" element={<Peneliti/>}/>
        <Route path="/dashboard/jurnal" element={<Jurnal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
