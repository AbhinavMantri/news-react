import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import Header from './partials/Header';
import { appAction } from './actions';
import constants from './constants';

class NewsApp extends React.PureComponent {
    componentDidMount() {
        this.props.appAction(constants.ACTIONS.GET_SOURCES);
    }

    render() {
        return (
            <Layout>
            <div className="news-app">
                <Header />
                <div className="news-page-body">
                    {this.props.children}
                </div>
            </div>  
            </Layout>  
        );
    }
}

const mapStateToProps = ({ app }) => {
    return {
        app,
    };
}

export default connect(mapStateToProps, { appAction })(withRouter(NewsApp));