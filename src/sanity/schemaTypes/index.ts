import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { recipeType } from "./recipeType";
import { ingredientType } from "./ingredientType";
import { recipeIngredientType } from "./recipeIngredientType";
import { recipeIngredientReferenceType } from "./recipeIngredientReference";
import { scalableRecipeNumberType } from "./scalableRecipeNumberType";
import { timeValueType } from "./timeValueType";
import { durationType } from "./durationType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    recipeType,
    ingredientType,
    recipeIngredientType,
    recipeIngredientReferenceType,
    scalableRecipeNumberType,
    timeValueType,
    durationType,
  ],
};
