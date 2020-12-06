import PageRouter from '../componets/pageRouter';
import { Provider } from 'react-redux';
import {store} from '../configure-store';

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