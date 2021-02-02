import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var primePic= "images/"+this.props.data.imagePrime;
      var local = this.props.data.local;
    }

    return (
      <section id="localizacao">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={primePic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Localização</h2>
            <p>{local}</p>
            <div className="mapouter"><div className="gmap_canvas">
            <iframe width={400} height={250} id="gmap_canvas" src="https://maps.google.com/maps?q=Espa%C3%A7o%20Prime%20Eventos%20-%20Unnamed%20Rd%2CRibeir%C3%A3o%20Preto%20-%20SP&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
            </iframe><a href="https://torrent9-fr.com">torrent9 search</a></div>
            <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:250px;width:400px;}.gmap_canvas {overflow:hidden;background:none!important;height:250px;width:400px;}\n               " }} />
         </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
