import React, { Component } from 'react';

export default class Porfolio extends Component {

  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="card h-100">
                    <a href={item.link}><img src={`${item.imgurl}`} className="item-img"/>
                      <div className="card-body">
                        <div className="card-title">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}