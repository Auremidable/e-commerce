import React from "react";
import './NavBar.css';
import Config from '../../config.json';


function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/">
                    <img className="img-fluid" src={ Config.url + "/images/logo.png" } id="logo" />
                </a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" />
                    <button className="btn btn-warning my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                    <div className="icons-nav">
                        <div className="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Mon profil</a>
                                <a className="dropdown-item" href="#">Mes commandes</a>
                                <a className="dropdown-item text-danger" href="#">Déconnexion</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Article 1</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Article 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Article 3</a>
                                <button type="button" className="btn btn-warning btn-block" id="voir-panier">Voir panier ></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;