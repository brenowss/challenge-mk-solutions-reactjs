import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import SignUp from './views/signup';
import Validation from './views/validation';
import Enterprise from './views/enterprise';
import Success from './views/success';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="validation" element={<Validation />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
