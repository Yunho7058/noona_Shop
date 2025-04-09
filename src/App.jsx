import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
/*
1. 전체상품페이지, 로그인, 상ㅜㅁ페이지
2. 전체 상품페이지에서는 전체 상품 보기
3. 로그인 버튼 클릭시 로그인 페이지
4. 상품상세페이지 눌ㅓㅆ을때 비로그인시 로그인 페이지로 
5. 로그인시 상품페이지 보기
6. 로그아웃 <--> 로그인
7. 상품 검색
*/

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
