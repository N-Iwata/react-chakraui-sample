import React, { memo } from "react";
import { Route, Switch } from "react-router";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Setting from "../pages/Setting";
import UserManagement from "../pages/UserManagement";
import Page404 from "../pages/Page404";

const Router: React.VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/setting" component={Setting} />
      <Route exact path="/home/user_management" component={UserManagement} />
      <Route path="*" component={Page404} />
    </Switch>
  );
});

export default Router;
