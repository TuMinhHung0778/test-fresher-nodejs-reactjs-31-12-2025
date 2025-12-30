import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example fetch: set REACT_APP_API_URL in .env for real backend, default to http://localhost:3000
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:3000";
    setLoading(true);
    fetch(`${apiBase}/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {loading && <p>Loading...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="row">
          {products.length === 0 ? (
            <div className="col-12">
              No products available (or backend not running). See README to
              configure API URL.
            </div>
          ) : (
            products.map((p) => (
              <div key={p.id} className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <p className="card-text text-muted">${p.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
