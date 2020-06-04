import React from 'react';
import "./Register.css"

function Register() {
    return(
        <div id="form" className="container">
            <div className="row justify-content-center" id="cardCenter">
                <div className="col mb-3">
                    <h2 className="text-center">Créez votre compte</h2>
                </div>
            </div>
            <div className="row justify-content-center" id="cardCenter">
                <div className="card col-md-5" id="cardContent">
                    <div className="card-body">
                        <form>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" for="inlineRadio1">Mme</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">Mr</label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nom"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Comfirmer le mot de passe"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ville"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block text-uppercase">Inscription</button>
                        </form>
                        <hr/>
                        <p className="card-text">Déjà client ?</p>
                        <a href="#" className="font-weight-bold"><u>Se connecter</u></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;