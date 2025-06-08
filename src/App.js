import './scss/reset.scss';
import './scss/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calender from './components/Calender';
import Main from './components/Main';

function App() {
  return (
    <div className="App" id='wrap'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='calender' element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
