import { Col, Layout, Row } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import TopHeadLines from '../components/commons/TopHeadLines';
import { newsAction } from '../actions';
import constants from '../constants';
import Loader from '../components/commons/Loader';
import Home from '../components/Home';
import { debounce } from '../utils';

import '../assets/css/home.css';

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            source: null,
        };

        // this.onNewsScrollCall = debounce(this.requestNews, 300);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.app.sources && newProps.app.sources.length > 0 && newProps.app.sources !== this.props.app.sources) {
            this.setState({source: newProps.app.sources[0] });
            this.requestNewsProvider(newProps.app.sources[0]);
        }

        if(newProps.match.params.provider !== this.props.match.params.provider) {
            this.requestNewsProvider(newProps.match.params.provider || newProps.app.sources[0]);    
        }
    }


    requestNewsProvider(provider) {
        const { id } = provider || {};
        const { app } = this.props || {};
        const { providers } = app || {};

        if(!(providers[id] && providers[id].topheadlines))
            this.props.newsAction(constants.ACTIONS.GET_TOP_HEADLINES, { source: id }); 
            
        if(!(providers[id] && providers[id].news))    
            this.requestNews(id);
    }

    requestNews(id = this.state.source, page = 1) {
        this.props.newsAction(constants.ACTIONS.GET_NEWS, { source: id, page });
    }

    onNewsScroll(e) {
        const maxScroll = e.target.scrollingElement.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight;

        // if (scrollPos >= (maxScroll - 100)) {
        //     const { app } = this.props || {};
        //     const { providers } = app || {};
        //     const { news } = providers[this.state.source] || {};

        //     this.onNewsScrollCall(this.state.source, news.page ? news.page + 1 : 1);
        // }
    }

    render() {
        const { app, match } = this.props ||  {};
        const { provider } = match.params || {};
        const { sources } = app || {};
        const { Content } = Layout;
        const { topheadlines, news } = app.providers[provider || (sources && sources.length > 0 ? sources[0].id : '')] || {};

        return ( 
            <>
                
                <Layout className="site-layout">
                    <div className="site-layout-background">
                        {sources ?
                        <Content>
                            <Row>
                                <Col span={16}>
                                    <Home
                                        show={news}
                                        news={news}
                                        onNewsScroll={e => this.onNewsScroll(e)}
                                    />
                                </Col>
                                <Col span={8}>
                                    <TopHeadLines
                                        show={sources && topheadlines}
                                        topheadlines={topheadlines}
                                    />
                                </Col>
                            </Row>
                        </Content> : <Loader />}
                    </div>  
                </Layout>
            </> 
        );
    }
}

const mapStateToProps = ({ app }) => { return { app }; }

export default connect(mapStateToProps, { newsAction })(HomePage);