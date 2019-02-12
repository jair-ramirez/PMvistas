import React, { Component } from 'react';

const Head = {
  width: "100%",
  //marginLeft: "240px",
  backgroundColor: "rgba(245, 245, 110)",
  minHeight: "50px",
  textAlign: "center",
  padding: "8px",
}

{/*const Side = {
  height: "400px",
  width: "240px",
  top: "0px",
  backgroundColor: "rgba(230, 230, 220)",
  textAlign: "center",
}*/}

const Card = {
    background: "#ffffff",
    height: "400px",
    width: "300px",
    position: "fixed",
    top: "10vh",
    display: "block",
    margin: "0 auto",
    border:"4px solid #a1a1a1",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    padding: "40px",
}

var imageName = require('./avatar1.jpg')

class App extends Component {

  constructor() {
          super();
          this.state = {
            placeholder:'Nombre'
          };
        }

  render() {
    return (

      <div className="App">

        <div style={Head}>

                <form class="text-right search" method="GET">
                    <input name="q" placeholder="Buscar" type="text"/>
                </form>
        </div>

        <div style={Card}>
          <img src={imageName} alt="avatar1" width="100" height="100" />
          <br/><br/>
          <label>Usuario</label>
        </div>

                        {/*<div class="row">
                            <div class="col-sm-8 col-sm-offset-2 data-post">
                                <p>Lorem Ipsum Dolor si amet</p>
                                <div class="reaction">
                                    <img draggable="false" class="emoji" alt="❤" src="https://twemoji.maxcdn.com/16x16/2764.png"/> 156
                                </div>
                                <div class="comments">
                                    <div class="more-comments">Mas comentarios</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" class="emoji" alt="😂" src="https://twemoji.maxcdn.com/16x16/1f602.png"/></li>
                                    </ul>
                                    <form>
                                        <input class="form-control" placeholder="Agregar un comentario" type="text"/>
                                    </form>
                                </div>
                            </div>
                        </div>*/}


      </div>

    );

  }
}

export default App;
