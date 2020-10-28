import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var presentMessage = this.props.data.presentMessage;
      var giftList = this.props.data.giftList.map(function(giftList){
        return <div key={giftList.title}><h3>{giftList.title}</h3>
        <p className="info">{giftList.description}</p>
        <button onClick={() => { window.location = giftList.link }}>Nossa Lista</button></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Lista de Presentes</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {giftList}
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Resume;
