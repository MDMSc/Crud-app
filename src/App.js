import './App.css';
import Home from './Home';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from 'react';
import NotFound from './NotFound';

function App() {
  const [rows, setRows] = useState([]);
  const [button, setButton] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home rows={rows} setRows={setRows} setButton={setButton} />} />
        <Route path="/employee/add" element={<AddEmployee rows={rows} setRows={setRows} />} />
        <Route path="/employee/edit/:id" element={<EditEmployee rows={rows} button={button} />} />
        <Route path="/employee/view/:id" element={<EditEmployee rows={rows} button={button} />} />
        <Route path="/404-notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404-notfound" />} />
        <Route path="/employee/*" element={<Navigate replace to="/404-notfound" />} />
      </Routes>
    </div>
  );
}

export default App;
