import React,{useState, useEffect} from 'react';
import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import GitUser from './components/GitUser';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (  
    <>
    <Navbar user={user} />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="gituser"
            element={user ? <GitUser /> : <Navigate to="/login" />}
          />
    </Routes>
    </>  
    
 );
}

export default App;
