import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export const Features = (props) => {
  console.log(props)
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

  return (
    <div id="features" className="text-center">
      <div style={{}} className="carousel">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Номера</h2>
        </div>
        <Carousel dynamicHeight={false} emulateTouch={false} centerSlidePercentage={50} centerMode={true} showThumbs={false} infiniteLoop={false} showIndicators={true} showStatus={false} style={{backgroundColor: 'rgb(246, 246, 246)'}}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
              <button type="button" onClick={onClickHandler} title={"назад"} style={{ ...arrowStyles, left: 5 }}>
                  ←
              </button>
          )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
              <button type="button" onClick={onClickHandler} title={"вперед"} style={{ ...arrowStyles, right: 0 }}>
                  →
              </button>
          )
      }
>
          {props.data?.map((d,i)=>
          <div style={{backgroundColor: 'rgb(246, 246, 246)', textAlign: "center", height: "80%"}} key={`${d.title}-${i}`}>
            <div style={{width: "98%",}}>
            <i style={{textAlign: "center", marginLeft: ""}} className={d.icon}></i>
            <h3 style={{marginLeft: ""}} >{d.title}</h3>
            {d.text.map((text) =>
                  <p style={{marginLeft: ""}}>{text}</p>
                  )}
            </div>
          </div>
          )}
        </Carousel>
      </div>
    </div>
  );
};
