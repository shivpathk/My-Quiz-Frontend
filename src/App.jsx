import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import Registration from "./pages/Registration";
import Result from "./pages/Result";
import YourQuize from "./pages/YourQuize";
import Login from './pages/Login'

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quizzes' element={<Quizzes/>}></Route>
      <Route path='/yourquize' element={<YourQuize/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/auth' element={<Registration/>}></Route>
    </Routes>
  );
}

export default App;