import React, { Component } from 'react';
import Config from '../../config.json';

class BestArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        BestArticle: []
        };
    }
    
    componentDidMount() {
        fetch("https://127.0.0.1:8000/api/articles?order[visits]=desc")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                BestArticle: result['hydra:member']
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
        const { error, isLoaded, BestArticle } = this.state;
        if (error) {
        return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Chargement…</div>;
        } else {
            let allBestArticles = [];
            for(var i=0; i < 5; i++) {
                allBestArticles.push(
                    <div className="col">
                    <div className="card" id="best-articles-card">
                        <img src={ Config.url + "/" + BestArticle[i]['image'] } className="card-img-top img-thumbnail" alt="images product" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{ BestArticle[i]['name'] }</h5>
                            <p className="text-center text-success">{ BestArticle[i]['visits'] } Vus</p>
                            <a href="#" className="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                        </div>
                    </div>
                </div>
                )
            }
            return (
                <div className="flex">
                    { allBestArticles }
                </div>
            );
        }
    }
}

export default BestArticles;