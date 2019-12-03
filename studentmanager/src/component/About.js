import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="angle-bg sky-bg section-padding">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div id="caption_slide" className="carousel slide caption-slider" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item row">
              <div className="v-center">
                <div className="col-xs-12 col-md-6">
                  <div className="caption-title animated fadeInUp" data-animation="animated fadeInUp">
                    <h2>This is about-page</h2>
                  </div>
                  <div className="caption-desc animated fadeInUp" data-animation="animated fadeInUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                  </div>
                  <div className="caption-button animated fadeInUp" data-animation="animated fadeInUp">
                    <a href="#" className="button">Read more</a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo one animated fadeInRight" data-animation="animated fadeInRight">
                    <img src="images/screen-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo two animated fadeInRight" data-animation="animated fadeInRight">
                    <img src="images/screen-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item row">
              <div className="v-center">
                <div className="col-xs-12 col-md-6">
                  <div className="caption-title" data-animation="animated fadeInUp">
                  <h2>This is about-page</h2>
                  </div>
                  <div className="caption-desc" data-animation="animated fadeInUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                  </div>
                  <div className="caption-button" data-animation="animated fadeInUp">
                    <a href="#" className="button">Read more</a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo one" data-animation="animated fadeInRight">
                    <img src="images/screen-3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo two" data-animation="animated fadeInRight">
                    <img src="images/screen-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item row">
              <div className="v-center">
                <div className="col-xs-12 col-md-6">
                  <div className="caption-title" data-animation="animated fadeInUp">
                  <h2>This is about-page</h2>
                  </div>
                  <div className="caption-desc" data-animation="animated fadeInUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                  </div>
                  <div className="caption-button" data-animation="animated fadeInUp">
                    <a href="#" className="button">Read more</a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo one" data-animation="animated fadeInRight">
                    <img src="images/screen-7.jpg" alt="" />
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo two" data-animation="animated fadeInRight">
                    <img src="images/screen-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item row active">
              <div className="v-center">
                <div className="col-xs-12 col-md-6">
                  <div className="caption-title" data-animation="animated fadeInUp">
                  <h2>This is about-page</h2>
                  </div>
                  <div className="caption-desc" data-animation="animated fadeInUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                  </div>
                  <div className="caption-button" data-animation="animated fadeInUp">
                    <a href="#" className="button">Read more</a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo one" data-animation="animated fadeInRight">
                    <img src="images/screen-3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-xs-6 col-md-3">
                  <div className="caption-photo two" data-animation="animated fadeInRight">
                    <img src="images/screen-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Indicators */}
          <ol className="carousel-indicators caption-indector">
            <li data-target="#caption_slide" data-slide-to={0} className>
              <strong>Lorem ipsum </strong>consectetur adipisicing elit.
            </li>
            <li data-target="#caption_slide" data-slide-to={1} className>
              <strong>Lorem ipsum </strong>consectetur adipisicing elit.
            </li>
            <li data-target="#caption_slide" data-slide-to={2} className>
              <strong>Lorem ipsum </strong>consectetur adipisicing elit.
            </li>
            <li data-target="#caption_slide" data-slide-to={3} className="active">
              <strong>Lorem ipsum </strong>consectetur adipisicing elit.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
}
