import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main/Main';
import Start from './components/Start/Start';
import End from './components/End/End';
import logo from './img/tap30-logo.png'; 

function App() {
  const [initialData, setInitialData] = useState({
    organization_name: "tap30",
    organization_name_fa: "تپسی",
    logo_url: {logo},
    question: [
      { id: "1", text: "آیا از زمان انتظار برای پیدا شدن سفیر تپسی راضی هستید؟", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "2", text: "آیا از قیمت ها راضی هستید؟", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "3", text: "انتقادات و پیشنهادانتون رو با ما درمیون بزارید", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "4", text: "خسته شدم", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "5", text: "آیا از زمان انتظار برای پیدا شدن سفیر تپسی راضی هستید؟", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "6", text: "آیا از قیمت ها راضی هستید؟", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "7", text: "انتقادات و پیشنهادانتون رو با ما درمیون بزارید", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] },
      { id: "8", text: "خسته شدم", option: [{ key: 1, text: "خوب" }, { key: 2, text: "متوسط" }, { key: 3, text: "ظعیف" },] }
    ],
    background_url: "https://unsplash.com/photos/oJEe7gWwWlo/download?force=true&w=1920"
  })
  const [outPut, setOutPut] = useState([])

  return (
    <Router>
      <Switch>
        <Route exact path="/end">
          <End outPut={outPut} initialData={initialData} />
        </Route>
        <Route exact path="/started">
          <Start initialData={initialData} outPut={outPut} setOutPut={setOutPut} />
        </Route>
        <Route path="/">
          <Main initialData={initialData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
