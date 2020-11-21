import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import Header from './partials/Header';
import { appAction, newsAction } from './actions';
import constants from './constants';
import Sidebar from './partials/Sidebar';

const { Content } = Layout;

class NewsApp extends React.PureComponent { 
    componentDidMount() { 
        this.props.appAction(constants.ACTIONS.GET_SOURCES); 
    }

    onChangeProvider(id) {
        this.setState({ selectedProvider: id });
        this.props.history.push(`/${id}`);
        this.props.newsAction(constants.ACTIONS.SET_NEWS_PROVIDER, id);
    }

    render() { 
        const { app } = this.props || {}; 
        return ( 
            <Layout> 
                <Header /> 
                <Content style={{ padding: '0 50px' }}> 
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}> 
                        <Sidebar sources={app.sources} selected={app.selectedProvider} onClick={id => this.onChangeProvider(id)} /> 
                        <Content style={{ padding: '0 24px', minHeight: 280 }}> {this.props.children} </Content> 
                    </Layout>
                </Content> 
            </Layout> 
        ); 
    }
}

const mapStateToProps = ({ app }) => { return { app }; }

export default withRouter(connect(mapStateToProps, { appAction, newsAction })(NewsApp));