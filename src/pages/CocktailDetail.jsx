import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import MoveUp from "../component/MoveUp";

function CocktailDetail() {
  const data = useParams();

  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.id}`
      )
      .then((resp) => {
        if (resp.status === 200) {
          setDetail(resp.data.drinks[0]);
          setIsLoading(false);
        }
      });
  }, []);

  if (isLoading) {
    return <h1>Single Drink is Loading...</h1>;
  }

  return (
    <MoveUp className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={detail.strDrinkThumb} className="w-100" alt="" />
        </div>
        <div className="col-md-6">
          <h2> Name : {detail.strDrink} </h2>
          <h2> Category : {detail.strCategory} </h2>
          <h2> Alcoholic : {detail.strAlcoholic} </h2>
        </div>
      </div>
    </MoveUp>
  );
}

export default CocktailDetail;
