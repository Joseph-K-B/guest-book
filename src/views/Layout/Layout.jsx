import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;