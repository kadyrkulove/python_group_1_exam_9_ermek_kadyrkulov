import React, {Fragment} from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = props => (
    <Fragment>
        <header>
            <Navbar/>
        </header>
        <main className="container">
            {props.children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </Fragment>
);

export default Layout;