// index.js 
import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGountletsRecipe = {
    ...elvenShieldRecipe, // spread syntax
    leather: 1,
    refinedMoonstone: 4,

}

console.log(elvenShieldRecipe);
console.log(elvenGountletsRecipe);


/*
npm run build
node dist/main.js
*/