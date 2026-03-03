import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from "../data.json";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(recipeData);
    } catch (error) {
      setError("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-2">Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/recipe/${item.id}`}
            className="border rounded p-4 shadow hover:border-blue-400 block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2 text-blue-500">
              {item.title}
            </h2>
            <p className="text-gray-700 text-base">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
