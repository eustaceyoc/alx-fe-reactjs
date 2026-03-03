import { useState } from "react";

export default function AddRecipeForm() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!recipeTitle.trim()) {
      newErrors.recipeTitle = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients
        .split(",")
        .map(item => item.trim())
        .filter(Boolean);

      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients (comma separated)";
      }
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Instructions are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validate()) return;

    setRecipeTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add Recipe
        </h2>

        <label className="flex flex-col text-sm font-medium text-gray-700">
          Recipe Title
          <input
            type="text"
            className="mt-1 rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
          {errors.recipeTitle && (
            <span className="text-red-500 text-xs mt-1">
              {errors.recipeTitle}
            </span>
          )}
        </label>

        <label className="flex flex-col text-sm font-medium text-gray-700">
          Ingredients
          <textarea
            rows="3"
            className="mt-1 rounded-md border border-gray-300 p-2 resize-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <span className="text-red-500 text-xs mt-1">
              {errors.ingredients}
            </span>
          )}
        </label>

        <label className="flex flex-col text-sm font-medium text-gray-700">

          {/* steps */}
          Steps
          <textarea
            rows="4"
            className="mt-1 rounded-md border border-gray-300 p-2 resize-none focus:ring-2 focus:ring-blue-500"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          {errors.instructions && (
            <span className="text-red-500 text-xs mt-1">
              {errors.instructions}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors sm:w-auto sm:px-6"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
