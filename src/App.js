import React from 'react';
import Header from './components/header/index'
import Footer from './components/footer/index';
import Body from './components/main/index'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Body/>
        <Footer />
      </div>
    );
  }

}

