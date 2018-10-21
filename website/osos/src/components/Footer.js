import React from 'react';

import Externallinks from './Externallinks';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row align-middle">
          <div className="columns medium-6 small-12">
            <ul>
              <li>
                <Externallinks
                  url={'https://google.com'}
                  linkTitle={'Google'}
                  class={'footerLink'}
                />
              </li>
            </ul>
          </div>
          <div className="columns medium-6 small-12">
            <ul>
              <li>
                <Externallinks
                  url={'https://yahoo.com'}
                  linkTitle={'Yahoo'}
                  class={'footerLink'}
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
