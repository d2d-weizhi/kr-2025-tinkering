import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-material/dist/material-burnt-teal.css';

function App() {
  function handleButtonClick() {
    console.log('button clicked');
    alert('KendoReact Button was clicked!');
  }
  
  return (
    <div className="App">
      <Button onClick={handleButtonClick} themeColor="primary">My Button</Button>
    </div>
  );
}

export default App;
