import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Details from './Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
