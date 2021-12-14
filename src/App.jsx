import { UserProvider } from "./context/UserCtx";
import Home from "./views/Home/Home";
import Layout from './views/Layout/Layout';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  )
};

export default App;