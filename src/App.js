import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContext";
import Home from "./Pages/Home";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  //Checking firebase whether user signed in or not
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {user && <Route path="/create" element={<Create />} />}
          <Route path="/view" element={<ViewPost />} />
        </Routes>
      </Post>
    </div>
  );
}

export default App;
