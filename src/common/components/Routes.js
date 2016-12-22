import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from '../../pages/home/page';
import AboutPage from '../../pages/about/page';
import ContactPage from '../../pages/contact/page';
import TrelloPage from '../../pages/trello/page';
import DonoPage from '../../pages/dono/page';
import PartnerPage from '../../pages/partner/page';
import WatcherPage from '../../pages/watcher/page';
import DearAllyPage from '../../pages/dearally/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
    <Route path="trello" component={TrelloPage} />
    <Route path="dono" component={DonoPage} />
    <Route path="partner" component={PartnerPage} />
    <Route path="watcher" component={WatcherPage} />
    <Route path="dearally" component={DearAllyPage} />
  </Route>
);
