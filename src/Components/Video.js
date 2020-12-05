import React, { Component } from 'react';

class Video extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="video-section">

         <div className="row">
            <div className="twelve columns">
              <div class="container-video">
              <iframe src="//www.youtube.com/embed/2Vv-BfVoq4g" 
              frameborder="0" allowfullscreen class="video"></iframe>
              </div>
           </div>

      </div>
   </section>
    );
  }
}

export default Video;
