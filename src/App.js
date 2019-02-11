import React, { Component } from 'react';
import Background from './portada4.jpg';
import Signup from './Signup';
import {BrowserRouter, Route} from 'react-router-dom';


var sectionStyle = {
 width: "100%",
 height: "640px",
 backgroundImage: `url(${Background})`,
 backgroundSize: 'cover'
};

const TodoComponent = {
  width: "400px",
  margin: "100px auto",
  backgroundColor: "rgba(200, 200, 195, 0.75)",
  minHeight: "250px",
  boxSizing: "border-box",
  textAlign: "center",
}
const Header = {
  padding: "10px 20px",
  textAlign: "center",
  color: "white",
  fontSize: "22px"
}

class App extends Component {

  constructor(props){
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
       event.preventDefault();
       const data = new FormData(event.target);

       fetch('/login', {
         method: 'POST',
         body: data,
       });
   }

  render() {
    return (
      <section style={ sectionStyle }>
      <div className="App">
        {/*Test

        <form>
          <label>
            Nombre:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        */}

<form onSubmit={this.handleSubmit}>
        <form action="action_page.php">
          <div class="imgcontainer" >
            <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Inicia Sesión</h2>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Usuario" name="uname" required/>
            <br/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Contraseña" name="psw" required/>
            <br/>
            <button type="submit">Login</button>
            <br/>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Recordarme
            </label>
<br/>
            <span class="psw">¿Olvidaste tu <a href="/">contraseña?</a></span>
            <br/>
              <p>¿Necesitas una cuenta? <a href="/signup">Regístrate</a></p>

          </div>

        </form>
        </form>


      </div>
      </section>
    );

  }
}

export default App;
