import React, { Component } from 'react';
import Header from './components/header';
//import Gallery from './components/gallery';
import Footer from './components/Footer';
import { Carousel } from 'antd';
import testimage1 from './images/1.png';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        {/* <Gallery /> */}

        <div className="Gallery">
          <Carousel effect="fade">
             <div><img src={testimage1}/></div>
             <div><img src={testimage1}/></div>
             <div><img src={testimage1}/></div>
             <div><img src={testimage1}/></div>
         </Carousel>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
