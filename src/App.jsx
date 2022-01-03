import { UserProvider } from "./context/UserCtx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Layout from './views/Layout/Layout';
import css from './App.css'
import GuestBook from "./views/GuestBook/GuestBook";
import Login from "./views/Auth/Login";
import { AuthProvider } from "./context/AuthCtx";

function App() {
  return (
    <>
    <AuthProvider>
      <UserProvider>
        <Layout className={css.layout}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/guestbook' element={<GuestBook />} />
            </Routes>
          </Router>
        </Layout>
      </UserProvider>
    </AuthProvider>
    </>
  )
};

export default App;