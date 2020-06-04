import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Ariane from "../Ariane/Ariane";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import SortArticles from '../SortArticles/SortArtricles';
import Config from '../../config.json';
import "./Article.css";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.update_state_article = this.update_state_article.bind(this);
        this.state = {
          error: null,
          isLoaded: false,
          article: [],
          categorieName: "",
          categorieBanner:"",
          artcilesSort: []
        };
      }
    
      componentDidMount() {
        fetch(`https://127.0.0.1:8000/api/categories/${this.props.match.params.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                article: result.articles,
                categorieName: result['name'],
                categorieBanner: result['banner']
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      update_state_article(sorted_path) {
        this.setState({article:sorted_path})
      }

      render() {
        const { error, isLoaded, article, categorieName, categorieBanner } = this.state;
        var ArticleDetails = article.map((path) => {
          return <DetailsArticle api_path={path} />
        }) 
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
            return (
              <div>
                <NavBar/>
                <div className="container-fluid">
                  <div className="row">
                    <img src={ Config.url +"/" + categorieBanner } />
                  </div>
                </div>
                <div className="container">
                  <Ariane nameCategorie={ categorieName }/>
                  <SortArticles id={this.props.match.params.id} sort_path={this.update_state_article} />
                  <div className="row justify-content-center">
                    { ArticleDetails }
                  </div>
                </div>
                <Footer/>
              </div>
            )
        }
    }
}

export default Article;