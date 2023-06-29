import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div style={{width: "100%"}} className="about-text">
              <h2>Услуги</h2>
              <h3>В гостевом доме вы можете воспользоваться:</h3>
              <div style={{width: "100%"}} className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.text.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
            <h4 style={{width: "100%",display: "grid"}}>Это все предоставляется бесплатно, при условии возвращения в исправном состоянии</h4>
          </div>
          <div style={{}} className="col-xs-12 col-md-6 second">
            <div className="about-text">
            <h4>Также Вы можете приобрести у нас:</h4>
              <div className="list-style">
                <div style={{width: "100%"}} className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.text2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h4>И воспользоваться:</h4>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.text3.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
