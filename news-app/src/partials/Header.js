import React from 'react';
import {Menu, Layout} from 'antd';

const { Header: HeaderLayout } = Layout;

const Header = props => {
    return (
        <HeaderLayout className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo"></div>
            <Menu theme="dark" onClick={function() {}} selectedKeys={['']} mode="inline">
                <Menu.Item key="mail">
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app">
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        </HeaderLayout>
    );
}

export default Header;