import React, { Component } from 'react';
import Background from './portada4.jpg';

var sectionStyle = {
 width: "100%",
 height: "640px",
 backgroundImage: `url(${Background})`,
 backgroundSize: 'cover'
};

const TodoComponent = {
  width: "400px",
  margin: "100px auto",
  backgroundColor: "rgba(170, 165, 30, 0.75)",
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

class Signup extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      <div className="App">

        <form action="action_page.php">
          <div class="imgcontainer" >
            <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Inicia Sesión</h2>
            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Nombre" name="name" required/>
            <br/>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Usuario" name="uname" required/>
            <br/>
            <label for="mail"><b>Email</b></label>
            <input type="email" placeholder="Correo electrónico" name="mail" required/>
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
            <br/>
              <p>¿Ya tienes una cuenta? <a href="/">Inicia sesión</a></p>

          </div>

        </form>

      </div>
      </section>
    );

  }
}

export default Signup;
