import React from "react";
import { Link } from "react-router-dom";
import './Category.css';


class Category extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categorie: []
      };
    }
  
    componentDidMount() {
      fetch("https://127.0.0.1:8000/api/categories")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              categorie: result['hydra:member']
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

    render() {
      const { error, isLoaded, categorie } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
            <div>
                <div className="row mt-5">
                    {categorie.map(categorie => (
                      <div className="col-3">
                        <Link to={`/articles/${categorie.id}`}>
                        <img key={categorie.image} src={categorie.image} className="img-thumbnail" id="img_categorie" alt="images categories" />
                        <div className="overlay img-thumbnail">
                            <div key={categorie.name} className="text">{categorie.name}</div>
                        </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        );
      }
    }
  }

export default Category;

