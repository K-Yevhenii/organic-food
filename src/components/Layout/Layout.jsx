import Header from "../Header";
import Footer from "../Footer";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <div>
            <Header className="container" />
            <main className="container">{children}</main>
            <Footer className="container" />
        </div>
    );
}

export default Layout;
