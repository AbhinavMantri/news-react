import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const Sidebar = props => { 
    const { selected, sources } = props || {};
    const selectedItem = selected || (sources && sources.length > 0 ? sources[0].id : undefined);
    return ( 
        <Sider className="site-layout-background news-providers" width={240}> 
            <Menu theme="dark" mode="inline" selectedKeys={[selectedItem]} defaultSelectedKeys={[selectedItem]} defaultOpenKeys={[selectedItem]} style={{ height: '100%' }} > 
            {sources && sources.map(s => { 
                return ( <Menu.Item key={s.id} onClick={() => props.onClick(s.id)}>{s.name}</Menu.Item> ); 
            })} 
            </Menu> 
        </Sider> 
    );
}

export default Sidebar;