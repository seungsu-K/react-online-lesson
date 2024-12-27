import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfount';

// 1. "/" : Home 페이지
// 2. "/new" : 새로운 일기 작성 페이지
// 3. "/diary" : 상세 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };
  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
