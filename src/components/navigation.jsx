import React from "react";

export const Navigation = (props) => {
  console.log(props)
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{marginRight: '0px'}}
          >
            {" "}
            <span className="sr-only"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          НУРЗИГАН
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Номера
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#pricing" className="page-scroll">
                Цены
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                услуги
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
            <li>
              <a onClick={(e) => {e.preventDefault(); props.updateData()}} href="" className="page-scroll" style={{color:"#4040ff"}}>
                Обратный звонок
              </a>
            </li>
            <li>
              <a href="tel:+79500767080" className="page-scroll" style={{color:"#FF0000"}}>
               +7 (950) 076-70-80
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
