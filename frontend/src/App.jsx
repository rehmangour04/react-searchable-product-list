/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const urlPath = "/api/products?search=" + search;
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        });
        const data = await response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled", error.message);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <h1>Fetch Data from API</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading .....</h1>}
      {error && <h1>Something went wrong please check</h1>}
      <h2>Number of products are: {products.length}</h2>
    </>
  );
}

export default App;
