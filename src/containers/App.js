import PageRouter from './pageRouter';
import { Provider } from 'react-redux';
import {store} from '../configure-store';
import React from "react";

function App() {
  return (
    <div >
      <Provider store={store}>
        <PageRouter/>
      </Provider>
      
    </div>
  );
}

export default App;
