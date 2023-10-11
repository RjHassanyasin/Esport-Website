import './App.css';
import Home from './Firstpage/Home';
import News from './Secondpage/News';
import Videos from './Thirdpage/Videos';
import Deals from './Fourpage.jsx/Deals';
import Shop from './Fifthpage/Shop';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />} />
        <Route path='/Videos' element={<Videos />} />
        <Route path='/Deals' element={<Deals />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
