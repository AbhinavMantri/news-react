import React from 'react';
import {Layout, Row, Col} from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import constants from '../constants';
import { newsAction } from '../actions';
import Loader from '../components/commons/Loader';
import defaultImg from '../assets/img/default-news-card.png';
import TopHeadLines from '../components/commons/TopHeadLines';

import '../assets/css/news.css';

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
            this.props.newsAction(constants.ACTIONS.FIND_NEWS, { title: match.params.title });
        
        if(!app.relatedNews[match.params.title])    
            this.props.newsAction(constants.ACTIONS.RELATED_NEWS, { title: match.params.title });
    }

    render() {
        const { app, match } = this.props || {};
        const { newsDetail, relatedNews } = app || {};
        const { Content } = Layout;
        const news = newsDetail[match.params.title];

        return (
            <Layout className="site-layout news-detail">
                <div className="site-layout-background">
                    {news ?
                        <Content>
                            <Row>
                                <Col span={16}>
                                    <Content className="news-detail-body">
                                        <Content>
                                            <h4>{news.title}</h4>
                                            <p>{news.description}</p>
                                            <p className="news-publish">
                                                <span>{news.publishedAt}</span>
                                            </p>
                                            <p className="news-source">
                                                <Link to={`/${news.source.id}`}>{news.source.name}</Link>
                                            </p>
                                            <p className="news-author">
                                                <span>{news.author}</span>
                                            </p>
                                        </Content>
                                        <img src={news.urlToImage && news.urlToImage !== "null" ? news.urlToImage : defaultImg} alt={news.title} />
                                        <Content className="news-detail-content">
                                            <p>{news.content}</p>
                                        </Content>
                                    </Content>
                                </Col>
                                <Col span={8}>
                                    <TopHeadLines
                                        title="Related News"
                                        show={relatedNews[match.params.title]}
                                        topheadlines={relatedNews[match.params.title]}
                                    />
                                </Col>
                            </Row>
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