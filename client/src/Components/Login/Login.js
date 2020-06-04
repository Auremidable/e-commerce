import React from 'react';
import "./Login.css"

function Login() {
    return(
        <div id="form" className="container">
            <div className="row justify-content-center">
                <div className="col mb-3">
                <h2 className="text-center">Identifiez vous</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="card col-md-5" id="cardContent">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Comfirmer le mot de passe"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block text-uppercase">Connection</button>
                        </form>
                        <hr/>
                        <p className="card-text">Pas encore client ?</p>
                        <a href="#" className="font-weight-bold"><u>S'inscrire</u></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;