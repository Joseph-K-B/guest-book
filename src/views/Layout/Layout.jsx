import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header'
import css from './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className={css.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;