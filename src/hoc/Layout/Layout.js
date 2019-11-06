import React, { Component } from 'react';

import MenuBarItems from '../../components/MenuBar/MenuBarItems/MenuBarItems';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <MenuBarItems />
                <main>
                    {this.props.children}
                </main>
                {/* <SideBar /> */}
                <Footer />
            </>
        );
    }
}

export default Layout;