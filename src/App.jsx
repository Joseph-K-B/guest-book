import { UserProvider } from "./context/UserCtx";
import Home from "./views/Home/Home";
import Layout from './views/Layout/Layout';
import css from './App.css'

function App() {
  return (
    <UserProvider>
      <Layout className={css.layout}>
        <Home />
      </Layout>
    </UserProvider>
  )
};

export default App;