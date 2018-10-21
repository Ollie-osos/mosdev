import React from 'react';
// import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'hello',
    };
  }

  changeTitle(title) {
    // this.setState = ({title});
    this.setState((state, props) => {
      return { title: title };
    });
  }

  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <Footer />
      </div>
    );
  }
}
