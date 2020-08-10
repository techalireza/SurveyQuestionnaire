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

function App() {
  const [initialData, setInitialData] = useState({
    organization_name: "tap30",
    organization_name_fa: "تپسی",
    logo_url: "../img/tap30-logo.png",
    question: [
      { id: "1", text: "آیا از زمان انتظار برای پیدا شدن سفیر تپسی راضی هستید؟", option: [{ key: 1, text: "آره جونم" }, { key: 2, text: "دفه بعد زود بیا :|" }, { key: 3, text: "دهنت سرویس ):" },] },
      { id: "2", text: "آیا از قیمت ها راضی هستید؟", option: [{ key: 1, text: "بد نیست (:" }, { key: 2, text: "اسنپ ارزون تره:|" }, { key: 3, text: "کردی تو پامون ):" },] },
      { id: "3", text: "انتقادات و پیشنهادانتون رو با ما درمیون بزارید", option: [{ key: 1, text: "باشه :|" }, { key: 2, text: "خدا شفات بده (:" }, { key: 3, text: "تو خوبی :(" },] },
      { id: "4", text: "خسته شدم", option: [{ key: 1, text: ":)))))" }, { key: 2, text: ":||||" }, { key: 3, text: ":((((" },] },
      { id: "5", text: "آیا از زمان انتظار برای پیدا شدن سفیر تپسی راضی هستید؟", option: [{ key: 1, text: "آره جونم" }, { key: 2, text: "دفه بعد زود بیا :|" }, { key: 3, text: "دهنت سرویس ):" },] },
      { id: "6", text: "آیا از قیمت ها راضی هستید؟", option: [{ key: 1, text: "بد نیست (:" }, { key: 2, text: "اسنپ ارزون تره:|" }, { key: 3, text: "کردی تو پامون ):" },] },
      { id: "7", text: "انتقادات و پیشنهادانتون رو با ما درمیون بزارید", option: [{ key: 1, text: "باشه :|" }, { key: 2, text: "خدا شفات بده (:" }, { key: 3, text: "تو خوبی :(" },] },
      { id: "8", text: "خسته شدم", option: [{ key: 1, text: ":)))))" }, { key: 2, text: ":||||" }, { key: 3, text: ":((((" },] }
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
