import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const featchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    featchProducts();
  }, []);

  return <div>shopBuddy UI</div>;
};

export default App;
