import './App.css';
import {RouterProvider} from "react-router-dom";
import { router } from './libs/router';
import { GlobalStyled } from './global/globalStyled';
import "./fonts/font.css"
import ModalProvider from './global-state/modalState';
import { Provider } from "react-redux"
import { store } from './store/store';



function App() {
  return (
    <>
    
        {/* RTK 로 만든 전역상태 Provider 로 감싸준 것이다 */}
        <Provider store={store}>
            <ModalProvider>
                <GlobalStyled/>
                <RouterProvider router={router}/>
            </ModalProvider>
        </Provider>
        
    </>
  );
}

export default App;


