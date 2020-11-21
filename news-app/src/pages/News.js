import React from 'react';
import {Layout} from 'antd';
import { connect } from 'react-redux';

import constants from '../constants';
import { newsAction } from '../actions';
import Loader from '../components/commons/Loader';

import '../assets/news.css';

class News extends React.PureComponent {
    componentDidMount() {
       this.requestNews();
    }

    componentWillReceiveProps(newProps) {
        if(newProps.match.params.title !== this.props.match.params.title) {
            this.requestNews(newProps);
        }
    }

    requestNews(props = this.props) {
        const { app, match } = props || {};

        if(!app.newsDetail[match.params.title]) 
            this.props.newsAction(constants.ACTIONS.FIND_NEWS, { title: this.props.match.params.title });
        
        if(!app.relatedNews[match.params.title])    
            this.props.newsAction(constants.ACTIONS.RELATED_NEWS, { title: this.props.match.params.title });
    }

    render() {
        const { app, match } = this.props || {};
        const { newsDetail } = app || {};
        const { Content } = Layout;

        return (
            <Layout className="site-layout news-detail">
                <div className="site-layout-background">
                    {newsDetail[match.params.title] ?
                        <Content>
                        </Content>
                        :
                        <Loader />
                    }
                </div>
            </Layout>        
        );
    }
}

const mapStateToProps = ({ app }) => { return { app } };

export default connect(mapStateToProps, { newsAction })(News);