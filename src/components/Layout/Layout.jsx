import Header from "../Header";
import Footer from "../Footer";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <div>
            <Header className="container" />
            <div className="div">
                <main className="main container">{children}</main>
            </div>
            <Footer className="container" />
        </div>
    );
}

export default Layout;
