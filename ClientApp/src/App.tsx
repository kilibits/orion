import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import AboutPage from './components/about/About';

import './custom.css'
import SearchComponent from './components/visualizations/SearchComponent';


export default () => (
    <Layout>
        <Route exact path='/' component={SearchComponent} />
        <Route path='/location' component={SearchComponent} />
        <Route path='/fetch-data/:startDateIndex?' component={SearchComponent} />
        <Route path='/about' component={AboutPage} />
        <Route path='/map' component={SearchComponent} />
    </Layout>
);
