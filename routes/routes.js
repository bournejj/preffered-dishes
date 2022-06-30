import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dish from "../src/pages/dish";



/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes() {
  
  

  return (
         <div>
         
        <Switch>
        <Route exact path="/dish">
          <Dish/>
          </Route>

        {/* <Route exact path="/">
<Home/>
</Route>

          <Route exact path="/login">
            <LoginForm  />
          </Route>

          <Route exact path="/signup">
            <SignupForm registerUser={registerUser}/>
          </Route>
      

          <Redirect to="/" /> */}
        </Switch>
      </div>
  );
}

export default Routes;