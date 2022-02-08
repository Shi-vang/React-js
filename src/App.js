import {BrowserRouter} from 'react-router-dom';
import RouterComp from './Router_Setup/RouterComp';
import { Provider } from 'react-redux';
import {store} from './Redux/Store'
import Main_page from './Components/Main_page'
import Counterer2Comp from './HOC/counterer2Comp';

const App =() =>{
  return (
    <Counterer2Comp/>
      
      /*<Provider store={store}>
        <Main_page/>
      </Provider>*/
  );
}

export default App;
