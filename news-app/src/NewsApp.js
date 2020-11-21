import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import Header from './partials/Header';
import { appAction } from './actions';
import constants from './constants';
import Sidebar from './partials/Sidebar';

const { Content } = Layout;

class NewsApp extends React.PureComponent { 
    constructor(props) {
        super(props);
        this.state = {
            selectedProvider: props.match.params.provider,
        };
    }
    componentDidMount() { 
        this.props.appAction(constants.ACTIONS.GET_SOURCES); 
    }

    render() { 
        const { app } = this.props || {}; 
        return ( 
            <Layout> 
                <Header /> 
                <Content style={{ padding: '0 50px' }}> 
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}> 
                        <Sidebar sources={app.sources} selected={this.state.selectedProvider} onClick={id => this.props.history.push(`/${id}`)} /> 
                        <Content style={{ padding: '0 24px', minHeight: 280 }}> {this.props.children} </Content> 
                    </Layout>
                </Content> 
            </Layout> 
        ); 
    }
}

const mapStateToProps = ({ app }) => { return { app }; }

export default connect(mapStateToProps, { appAction })(withRouter(NewsApp));