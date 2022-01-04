import { UserProvider } from "./context/UserCtx";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./views/Home/Home";
import Layout from './views/Layout/Layout';
import css from './App.css'
import GuestBook from "./views/GuestBook/GuestBook";
import Login from "./views/Auth/Login";
import { AuthProvider } from "./context/AuthCtx";
import PrivateRoute from "./components/privy/PrivateRoute";

function App() {  
  return (
    <>
    <AuthProvider>
      {/* <UserProvider> */}
          <Router>      
            <Layout className={css.layout}> 
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route 
                  path='/guestbook/*' 
                  element={<PrivateRoute component={GuestBook} />} 
                />
              </Routes>
            </Layout>            
          </Router>
      {/* </UserProvider> */}
    </AuthProvider>
    </>
  )
};

export default App;