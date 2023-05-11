import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';

// SCREENS
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskScreen from './screens/TaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import ProfileScreen from './screens/ProfileScreen';
import LogRegScreen from './screens/LogRegScreen';
import IntroScreen from './screens/IntroScreen';

function App() {
  const [currentUser, setCurrentUser] = useState({_id: null})
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroScreen/>} />
        <Route path="/homePage" element={<HomeScreen currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/addTask" element={<AddTaskScreen currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/task/:id" element={<TaskScreen currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/task/edit/:id" element={<EditTaskScreen currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/user/:userId" element = {<ProfileScreen currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/logReg" element = {<LogRegScreen currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
