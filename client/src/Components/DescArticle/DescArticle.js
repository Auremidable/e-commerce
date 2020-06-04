import React from "react";
import Config from "../../config.json";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Ariane from "../Ariane/Ariane";
import "./DescArticle.css";

class DescArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          DescArticle: [],
        };
      }
    
      componentDidMount() {
        fetch(`https://127.0.0.1:8000/api/articles/${this.props.match.params.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              
              this.setState({
                isLoaded: true,
                DescArticle: result,
                articleName: result['name'],
              });
              fetch(`https://127.0.0.1:8000${result.categoryId}`)
                .then(res => res.json())
                .then(
                  (result2) => {
                    
                    
                    this.setState({
                      isLoaded: true,
                      categorieId: result2['id'],
                      categorieName: result2['name'],
                    });
                  },
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
                )
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      render() {
        const { error, isLoaded, articleName, categorieName, DescArticle, categorieId } = this.state;
        console.log(categorieId);
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
        return (
          <div>
            <NavBar/>
              <div className="container">
                <div className="row justify-content-center">
                  <Ariane nameCategorie={ categorieName } nameArticle={ articleName } idCategorie={ categorieId }/> 
                  <div class="card mb-3">
                    <div class="row no-gutters" id="width-row">
                      <div class="col-md-5 pl-5 pr-3">
                        <img key={ DescArticle.image } src={ Config.url +"/" + DescArticle.image } className="card-img-top" alt="Desc Img"/>
                      </div>
                      <div class="col-md-7 pl-5 pr-3">
                        <div class="card-body text-right">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="card-body">
                              <h5 key={ DescArticle.name } className="card-title h2">{ DescArticle.name }</h5>
                              <p key={ DescArticle.description } className="card-text">{ DescArticle.description }</p>
                              <p key={ DescArticle.stock } className="card-text">STOCK : { DescArticle.stock }</p>
                              </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-body">
                                  <h5 key={ DescArticle.price } className="text-center font-weight-bold h2" id="price">{ DescArticle.price }<small className="font-weight-bold">€</small></h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-body">
                                  <button type="submit" className="btn btn-success btn-lg">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                                </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-6">
                                <div class="card-body">
                                  <p className="card-text">Les transporteurs suivants sont disponibles: </p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card-body">
                                  <img className="img-fluid" id="img-width" src={ Config.url + "/images/colissimo.png" } alt="images transport" />
                                  <img className="img-fluid" id="img-width" src={ Config.url + "/images/Chronopost.png" } alt="images transport" />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <Footer/>
          </div>
        );
      }
    }
}

export default DescArticle;