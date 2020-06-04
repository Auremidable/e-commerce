import React from "react";
import Config from "../../config.json";
import './Footer.css';


function Footer() {
    return (
        <div className="container-fluid" id="footer">
            <div className="row align-items-end">
        <div className="container-fluid" id="footer-one">
            <div className="container">
                <div className="row justify-content-center justify-content-between text-center" id="shipping-info" >
                    <div className="shipping-info">
                        <i className="fas fa-shipping-fast"></i>
                        <p>Livraison rapide</p>
                    </div>
                    <div className="shipping-info">  
                        <i className="far fa-credit-card"></i>
                        <p>Debit à l'expedition</p>
                    </div>
                    <div className="shipping-info">                    
                        <i className="fas fa-euro-sign"></i>
                        <p>Paiement en 3x</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="footer-two">
            <div className="container">
                <div className="row mb-5">
                    <div className="col text-center text-white">
                        <p>Moyens de paiement acceptés</p>
                        <img className="img-fluid" src={ Config.url + "/images/paiment.png" } alt="images paiement" />
                    </div>
                    <div className="col text-center text-white">
                        <p>Nos transporteurs</p>
                        <img className="img-fluid" src={ Config.url + "/images/transporteur.png" } alt="images transport" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-white text-center" id="icons-social">
                        <p>Rejoignez-nous sur nos réseaux sociaux</p>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                    <div className="col text-white text-center">
                        <p>Une question ?</p>
                        <button className="btn btn-warning">Contactez-nous</button>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col text-white text-center">
                    <ul className="copyright">
                        <li>&copy; Copyright 2020 WACmarket</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer;