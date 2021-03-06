import React from 'react';
import ReactDOM from 'react-dom';

import { Carousel } from 'antd';
// import 'antd/dist/antd.css';  //是这个让背景变的
import 'antd/lib/carousel/style/css'; //是这个让背景变的
import '../stylesheets/exhibit.css'


import pic1 from '../images/ad_sample1.jpg'
import pic2 from'../images/ad_sample2.jpg'

class Exhibit extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Carousel autoplay>
                <div>
                    <img src={pic1} style={{width:  '100%'}} />
                    {/* <h3>1</h3> */}
                </div>
                <div>
                    <img src={pic2} style={{width:  '100%'}} /> 
                    {/* <h3>2</h3>   */}
                </div>
                <div>
                    <img src={pic1} style={{width:  '100%'}} />
                    {/* <h3>3</h3> */}
                </div>
                <div>
                    <img src={pic2} style={{width:  '100%'}} /> 
                    {/* <h3>4</h3>   */}
                </div>
            </Carousel>
        )
    }
 }

export default Exhibit;