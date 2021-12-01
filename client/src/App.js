import './App.css';
import {useEffect, useState} from "react"
import {Route, Switch} from 'react-router-dom'
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';

function App() {
  
  const [exercisesList, setExercisesList] = useState([])
  const [musclesList, setMusclesList] = useState([])
  const [currentUser, setCurrentUser] = useState({})


  useEffect(() => {
    fetch("http://localhost:3000/muscles")
    .then(res => res.json())
    .then(data => setMusclesList(data))

    fetch("http://localhost:3000/exercises")
    .then(res => res.json())
    .then(data => setExercisesList(data))

  }, [])


  return (
    <div className="App">
  
          <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        

    <Switch>
       <Route exact path="/">
          <Homepage musclesList={musclesList} exercisesList={exercisesList}/>
       </Route>
    </Switch>
    </div>
  );
}

export default App;