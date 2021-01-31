import React, { Component } from 'react';

var sizeImage = 10;

class Video extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
  }

  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="nossa-historia">
         <div className="row">
            <div className="">
              <div className="" id="photo-slider-container">
                {/* <img id="image-slider" className="photos-fade" style={{width:`${getSize()}%`, marginLeft:`${getMarginLeft()}%`, marginTop:`${getMarginTop()}%`, bottom:`0`}} src={"images/slider/"+ (Math.floor(Math.random() * 9) + 1) +".jpeg"} />              
                <img id="image-slider" className="photos-fade" style={{width:`${getSize()}%`, marginLeft:`${getMarginLeft()}%`, marginTop:`${getMarginTop()}%`, bottom:`0`}} src={"images/slider/"+ (Math.floor(Math.random() * 9) + 1) +".jpeg"} />              
                <img id="image-slider" className="photos-fade" style={{width:`${getSize()}%`, marginLeft:`${getMarginLeft()}%`, marginTop:`${getMarginTop()}%`, bottom:`0`}} src={"images/slider/"+ (Math.floor(Math.random() * 9) + 1) +".jpeg"} />               */}
                <img className="center" id="imagegif"src={"images/slider/montagem.gif"} />
              </div>
           </div>
      </div>
   </section>
    );
  }
}

function getSize() {
  sizeImage = (Math.floor(Math.random() * 23) + 10) 
  return sizeImage;
} 

function getMarginLeft() {
  if(sizeImage > 35){
    return Math.floor(Math.random() * 11);
  } else {
    return Math.floor(Math.random() * 71);
  }
} 

function getMarginTop() {
  if(sizeImage > 35){
    return Math.floor(Math.random() * 11);
  } else {
    return Math.floor(Math.random() * 31);
  }
} 


export default Video;
