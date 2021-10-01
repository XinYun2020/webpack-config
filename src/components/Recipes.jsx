// @refresh reset
// import React from 'react';
import { list } from 'postcss';
import { useState } from 'react';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGountletsRecipe = {
    ...elvenShieldRecipe, // spread syntax
    leather: 1,
    refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGountletsRecipe);

/*
npm run build
node dist/main.js
*/

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
        <div>
            <h3>Current Recipe: </h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>
                Elven Shield Recipe
            </button>
            <button onClick={() => setRecipe(elvenGountletsRecipe)}>
                Elven Gountlets Recipe
            </button>

            <ul>
                {Object.keys(recipe).map((material) => (
                <li key = {material}>
                    {material}: {recipe[material]}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes