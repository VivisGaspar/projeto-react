import React, { PureComponent, Fragment } from "react";
import HeaderAction from "./HeaderAction";

import "./signUp.css";
import "../../App.css";

class SignUp extends PureComponent {
  render() {
    return (
      <Fragment>
        <HeaderAction />

        <section className="block">
          <div className="wrapper">
            <h2 className="title">Sobre você</h2>

            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Nome completo</label>
                <input type="text" className="form-input" placeholder="Insira seu nome" />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-input" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input type="phone" className="form-input" placeholder="Insira o número com o DDD" />
              </div>
              <div className="form-group">
                <label className="form-label">Gênero</label>
                <select className="form-input">
                  <option value="" selected>
                    Selecione seu gênero
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Nascimento</label>
                <input type="text" className="form-input" placeholder="Insira a data" />
              </div>
              <div className="form-group">
                <label className="form-label">Escolaridade</label>
                <select className="form-input">
                  <option value="" selected>
                    Insira sua escolaridade
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">CEP</label>
                <input type="text" className="form-input" placeholder="Insira seu CEP" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Sou uma pessoa com deficiência
              </label>
            </form>
          </div>
        </section>
        <section className="block">
          <div className="wrapper">
            <h2 className="title">Sua senha VOJO</h2>
            <p>A senha deve possuir no mínimo 6 caracteres</p>
            <form className="section-sign-in">
              <div className="form-group form-icon">
                <label className="form-label">Crie uma nova senha</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira uma nova senha" />
              </div>
              <div className="form-group form-icon">
                <label className="form-label">Repita a senha criada</label>
                <i className="icon icon-locker" />
                <button type="button" className="btn-show-password">
                  mostrar
                </button>
                <input type="text" className="form-input form-icon-lock" placeholder="Insira a nova senha criada" />
              </div>
              <label className="form-checkbox">
                <input type="checkbox" />
                Concordo com os termos de uso
              </label>
              <button type="button" className="btn-default btn-light">
                Finalizar cadastro
              </button>
              <button type="button" className="btn-radius">
                Já possui uma conta VOJO
              </button>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SignUp;
