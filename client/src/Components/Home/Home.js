import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Category from '../Category/Category';
import BestArticles from "../BestArticles/BestArticles";
import './Home.css';


function Home (){
    return (
        <div>
            <NavBar/>
            <div className="container-fluid">
                <div className="row">
                    <img className="img-fluid" src="./images/banner.jpg" alt="bannière 1" />
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Catégories de produits</h2>
                    </div>
                </div>
               <Category/>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <img className="img-fluid" src="./images/montage-banner.jpg" alt="bannière 2" />
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Meilleures ventes</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <BestArticles />
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;

