import React, { PureComponent, Fragment } from "react";
import CallToAction from "./CallToAction";

import "./signIn.css";

class SignIn extends PureComponent {
  render() {
    return (
      <Fragment>
        <CallToAction />

        <section className="block">
          <div className="wrapper">
            <h2 className="title">Entrar</h2>
            <p>Gostou da vaga? Agora você precisa entrar na sua conta VOJO para poder se candidatar.</p>

            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">E-mail</label>
                <i className="icon icon-user" />
                <input type="text" className="form-input form-icon--user" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Senha</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira sua senha" />
              </div>
              <a href="#" className="form-link">
                Esqueci minha senha
              </a>
              <button type="button" className="btn-default btn-light">
                Acessar
              </button>
            </form>
          </div>
        </section> 
      </Fragment>
    );
  }
}

export default SignIn;
