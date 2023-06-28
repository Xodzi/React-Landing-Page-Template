import React, { useState, useEffect } from "react";
import Modal from './Modal';



export const Header = (props) => {


  useEffect(()=>{
    console.log('start')

    document.addEventListener('cf-btn-click', handleClose);
    //const test = (event) => window.cbFreeModal();
  })
  useEffect(() => {
    setShow(props.Modal) //children function of interest
  }, [props.Modal]);



  const test = (event) => {event.preventDefault(); window.cbFreeModal();}
  const test2 = (event) => {event.preventDefault(); console.log(show);}
  const [show, setShow] = useState(props.Modal);
  const [back,setBack] = useState(false);

  const handleClose = () => {setShow(false); props.onModalChange(false)}
  const handleShow = () => setShow(true);

  console.log(props)
  console.log(show)

  let number;

  if(!back){
    number = <a
    href="tel:+79148824466"
    className="btn btn-custom btn-lg page-scroll col-xs-12"
  >
    +7 (914) 882-44-66
  </a>;
  }
  else{
    number = <input className="form-control form-rounded input-lg " placeholder="Ваш номер"></input>
  }

  return (
    <header id="header">
      
      <div className="modal show"
      style={{ display: 'block', position: 'initial' }}>
        <Modal visible={show} setVisible={setShow}>
          <form>
            <h2>Бронирование
              <a
                    className="btn btn-custom btn-lg page-scroll"
                    style={{marginLeft: '5px'}}
                    onClick={handleClose}
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
              </a>{" "}
            </h2>
            <button
            style={{marginBottom: '5px'}}
                  className="btn btn-custom btn-lg page-scroll col-xs-12"
                  onClick={test}
                >
                  Обратный звонок
                </button>{" "}
            {number}
          </form>
        </Modal>
      </div>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{ fontFamily: 'Segoe Print' }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{ fontFamily: 'Segoe Print' }}>{props.data ? props.data.paragraph : "Loading"}
                <br></br>
                {props.data ? props.data.paragraph2 : "Loading"}</p>
                <a
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleShow}
                >
                  Забронировать
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
