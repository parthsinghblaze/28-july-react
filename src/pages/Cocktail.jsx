import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MoveUp from "../component/MoveUp";

function Cocktail() {
  const [allDrinks, setAllDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((resp) => {
        setAllDrinks(resp.data.drinks);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MoveUp className="container">
      <h2>All Drinks</h2>
      <hr />
      <div className="row">
        {allDrinks.map((item, index) => {
          const { strDrink, strDrinkThumb, idDrink } = item;
          return (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <img src={strDrinkThumb} alt="" />
                <div className="card-body">
                  <h3>Drinks Name : {strDrink}</h3>
                  <h5> Drink Id : {idDrink} </h5>
                </div>
                <div className="card-footer">
                  <Link to={`/cocktail/${idDrink}`} className="btn btn-primary">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MoveUp>
  );
}

export default Cocktail;
