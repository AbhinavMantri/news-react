import React from 'react';
import {Layout} from 'antd';
import { connect } from 'react-redux';

import constants from '../constants';
import { newsAction } from '../actions';


class News extends React.PureComponent {
    componentDidMount() {
        this.props.newsAction(constants.ACTIONS.FIND_NEWS, { title: this.props.match.params.title });
        this.props.newsAction(constants.ACTIONS.RELATED_NEWS, { title: this.props.match.params.title });
    }

    render() {
        return (
            <Layout className="site-layout">
                <div className="site-layout-background">
                </div>
            </Layout>        
        );
    }
}

const mapStateToProps = ({ app }) => { return { app } };

export default connect(mapStateToProps, { newsAction })(News);