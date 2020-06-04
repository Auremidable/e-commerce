import React from "react";
import { Link } from "react-router-dom";
import './Ariane.css';

class Ariane extends React.Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
        <div id="form" className="container">
            <div className="row justify-content">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li className="breadcrumb-item"><a href="/"><i className="fas fa-home"></i> / </a></li>
                        <Link to={`/articles/${this.props.idCategorie}`}>
                        <li className="breadcrumb-item"><a>{this.props.nameCategorie}</a> / </li>
                        </Link>
                        <li className="breadcrumb-item active" aria-current="page">{this.props.nameArticle}</li>
                    </ol>
                </nav>
            </div>
        </div>
        );
    }
}

export default Ariane;