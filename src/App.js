// import logo from './logo.svg';
import { Route,Routes} from 'react-router-dom';
import './App.css';
import SignUP from './components/SignUP';
import Chats from "./components/Chats/Chats";
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
    <Routes>
     <Route path="/" element={<SignUP />}>
      {/* <Login /> */}
     </Route>
     <Route path="/chats" element={<Chats />} />
     <Route path="/login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
