import React, { Component } from 'react';

import Logo from './logo';
import SearchBox from './header_search';

export default class App extends Component {
  render() {
    const style_header = {
      container: {
        borderBottom: '1px solid #dbdbdb'
      },
      innerContainer: {
        margin: '0 auto',
        maxWidth: '1010px',
        width: '100%',
        padding: '20px 0 20px 0'
      }
    }

    return (
        <div style={style_header.container}>
          <div style={style_header.innerContainer}>
            <Logo />
            <SearchBox />
          </div>
        </div>
    );
  }
}
