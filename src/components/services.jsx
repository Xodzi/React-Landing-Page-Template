import React from "react";
import { Image } from "./image";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Прекрасный отдых в уютном просторном доме</h2>
          <p>
          Сделано с любовью к гостям и Байкалу
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <Image
                      className={"test"}
                      title={d.title}
                      largeImage={d.icon}
                      smallImage={d.icon}
                    />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p>{d.text2}</p>
                    <p>{d.text3}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
