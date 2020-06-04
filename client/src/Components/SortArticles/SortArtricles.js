import React, { Component } from 'react';

class SortArtricles extends Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        sort: {
            "name_asc": {
                "key": "name",
                "value": "asc"
            },
            "visits_desc": {
                "key": "visits",
                "value": "desc"
            },
            "price_asc": {
                "key": "price",
                "value": "asc"
            },
            "price_desc": {
                "key": "price",
                "value": "desc"
            }
        },
        };
    }

    sort_articles(paramsSort) {
        fetch(`https://127.0.0.1:8000/api/articles?order[${this.state.sort[paramsSort].key}]=${this.state.sort[paramsSort].value}`)
        .then(res => res.json())
        .then(
            (result) => {
                var sortArticleCategorie = [];
                result["hydra:member"].map((article) => {
                    if(article.categoryId === `/api/categories/${this.props.id}`) {
                    sortArticleCategorie.push(article["@id"])
                    }
                })
                this.props.sort_path(sortArticleCategorie)
            this.setState({
                isLoaded: true,
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
        
        return (
            <div className="row">
                <div class="col align-self-end mb-3">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Trier les produits
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button" onClick={() => this.sort_articles("name_asc")}>Nom</button>
                            <button class="dropdown-item" type="button" onClick={() => this.sort_articles("visits_desc")}>Top vus</button>
                            <button class="dropdown-item" type="button" onClick={() => this.sort_articles("price_asc")}>Du - cher au + cher</button>
                            <button class="dropdown-item" type="button" onClick={() => this.sort_articles("price_desc")}>Du + cher au - cher</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SortArtricles;