import React from 'react';

export default class Externallinks extends React.Component {
  render() {
    return (
      <a href={this.props.url} className={this.props.class}>
        {this.props.linkTitle}
      </a>
    );
  }
}
