import React from 'react';
import FormUserDetails from './components/FormUserDetails';
import Success from './components/Success';
import Confirm from './components/Confirm';
import FormPersonalDetails from './components/FormPersonalDetails';
import { UserForm } from './components/UserForm';

const App = () => {
  return (
    <div className="App">      
     
      <UserForm />
      <Confirm />
      <FormPersonalDetails />
      <FormUserDetails />
      <UserForm />
      <Success />
      
    </div>
  );
}

export default App;
