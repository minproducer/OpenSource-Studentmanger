import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './component/Header';
import Direction from './Direction';
import Contact from './component/Contact';
import Footer from './component/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header />
        <Direction />
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;