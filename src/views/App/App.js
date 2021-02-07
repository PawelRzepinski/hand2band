import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import HomeView from "../HomeView/HomeView";
import PhotoView from "../PhotoView/PhotoView";
import MainTemplate from "../../template/MainTemplate";
import ErrorView from '../ErrorView/ErrorView';



function App() {
  return (
    <Provider store={ store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path='/' component={HomeView} />
            <Route exact path='/photo' component={PhotoView} />
            <Route exact path='/error' component={ErrorView} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}


export default App;