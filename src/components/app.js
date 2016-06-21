import React, { Component } from 'react';

import Header from './header/header_main';
import Post from './post';
import Footer from './footer';

// This is the main component
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
        <Footer />
      </div>
    );
  }
}