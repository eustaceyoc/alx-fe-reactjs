import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const foundRecipe = recipeData.find(
        (item) => item.id === Number(id)
      );

      if (!foundRecipe) {
        throw new Error("Recipe not found");
      }

      setRecipe(foundRecipe);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 shadow">
      <h1 className="text-xl font-bold mt-2 text-blue-500 mb-2">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded" />
      <p className="text-gray-700 text-base mb-3">{recipe.summary}</p>

      <h2 className="font-semibold text-blue-400">Ingredients</h2>
      <ul className="mb-3">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="before:content-['✅']">{ingredient}</li>
        ))}
      </ul>

      <h2 className="font-semibold text-blue-400">Cooking instructions</h2>
      <ol>
        {Object.values(recipe.cooking).map((step, index) => (
          <li key={index} className="before:content-['☞']">{step}</li>
        ))}
      </ol>
    </div>
  );
}
