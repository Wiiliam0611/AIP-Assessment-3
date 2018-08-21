import React, { Component } from 'react';
import Header from './components/header';
//import Gallery from './components/gallery';
import Footer from './components/Footer';
// import { Carousel } from 'antd';
// import testimage1 from './images/1.png';
import Exhibit from './components/exhibit';

class App extends Component {
  render(){
    return(
      <div>
        <div>
        <Header />
        </div>

        <div>
        <Exhibit />
        </div>
        
        <br/>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
