import React from "react";
import Recipe from "./Recipe";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
        <div className="recipes">
          {recipes.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
          ))}
        </div>
      </header>
    </article>
  );
}

export default Menu;