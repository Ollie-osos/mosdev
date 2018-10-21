import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Homepage extends React.Component {
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
      <div className="fadeIn">
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <h1>Homepage</h1>
        <Footer />
      </div>
    );
  }
}
