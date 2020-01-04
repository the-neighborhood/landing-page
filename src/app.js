import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import Layout from './layout';
import IntorPage from './intro';
import Members from './members';
import Projects from './projects';

import client from './client';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Layout>
        <Route exact path="/" component={IntorPage} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/projects" component={Projects} />
      </Layout>
    </Router>
  </ApolloProvider>
);

export default App;
