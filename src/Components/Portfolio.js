import React, { Component, useState } from 'react';
import ModalVideo from 'react-modal-video'

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      videoId: ''
    };
  }
  
  saveToF() {
  }

  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map( (projects) => {
        var projectImage = 'images/padrinhos/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href="" title={projects.title} onClick={(e) => {e.preventDefault(); this.setState({ videoId: projects.url, open: true })}}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1 onClick={this.saveToF()}>Nossos Padrinhos</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={this.state.open} videoId={this.state.videoId} onClose={() => this.setState({ open: false })} />
      </section>
    );
  }
}

export default Portfolio;
