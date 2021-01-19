import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import Payment from '../screens/User/Purchase/Payment';
import CheckAuth from '../screens/User/Purchase/CheckAuth';
import PlanSelect from '../screens/User/Purchase/PlanSelect';

const Routes = ({ location }) => {
  console.log(location);
  return (
    <Router>
      <CheckAuth path="/purchase" />
      <Payment location={location} path="/purchase/payment" />
      <PlanSelect path="/purchase/plan" />
    </Router>
  );
};

export default Routes;
