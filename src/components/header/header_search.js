import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    const style_search ={
      display: 'inline-block',
      height: '38px',
      width: '30%'
    }

    return (
      <div style={style_search}>
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}