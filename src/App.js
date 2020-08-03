import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Start from './components/Start/Start';

function App() {
  const [initialData, setInitialData] = useState({
    organization_name: "tap30",
    organization_name_fa: "تپسی",
    logo_url: "../img/tap30-logo.png",
    question: [
      {
        id: "",
        text: "",
        option: [
          { key: 1, text: "" },
          { key: 2, text: "" },
          { key: 3, text: "" },
        ]
      }
    ],
    background_url: "../img/bg.jpg"
  })
  const [outPut, setOutPut] = useState([
    { id: "", answer: "" },
    { id: "", answer: "" },
    { id: "", answer: "" }
  ])
  return (
    <Router>
      <Switch>
        <Route path="/">
            <Start initialData={initialData}/>
        </Route>
        <Route path="/started">
            <Start initialData={initialData}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
