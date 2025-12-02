import Header from "../Header";
import Footer from "../Footer";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <div className="layout">
            <Header className="layout__header" />
            <main className="layout__main container">{children}</main>
            <Footer className="container" />
        </div>
    );
}

export default Layout;
