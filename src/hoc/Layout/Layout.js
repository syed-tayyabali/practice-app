import React, { Component } from 'react';

import MenuBarItems from '../../components/MenuBar/MenuBarItems/MenuBarItems';
import Header from '../../components/Header/Header';

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <MenuBarItems />
                <main>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;