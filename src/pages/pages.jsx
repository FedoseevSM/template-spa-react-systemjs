import { Route, Switch} from "react-router-dom"

import { HomePage, MainPage, Error404Page } from "@pages"

export const Routing = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/main">
        <MainPage />
      </Route>
      <Route exact path="*">
        <Error404Page />
      </Route>
      </Switch>
    </div>
  )
}
