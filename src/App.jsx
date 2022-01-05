require ('dotenv').config();
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./views/Home/Home";
import Layout from './views/Layout/Layout';
import css from './App.css'
import GuestBook from "./views/GuestBook/GuestBook";
import Login from "./views/Auth/Login";
import { AuthProvider } from "./context/AuthCtx";
import PrivateRoute from "./components/privy/PrivateRoute";
import Help from "./views/Help/Help";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>      
        <Layout className={css.layout}> 
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/help' element={<Help />} />
            <Route 
              path='/' 
              element={
                <PrivateRoute>
                  <GuestBook />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Layout>            
      </Router>
    </AuthProvider>
    </>
  )
};

export default App;