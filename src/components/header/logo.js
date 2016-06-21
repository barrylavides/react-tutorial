import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    const style_logo = {
      container: {
        display: 'inline-block',
        width: '30%'
      }
    }

    return (
      <div style={style_logo.container}>
        <a href="#">Instagram</a>       
      </div>
    );
  }
}