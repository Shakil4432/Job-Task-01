import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    let query = `https://job-task-01-server.vercel.app/products?page=${page}&limit=9`;

    if (search) query += `&search=${search}`;
    if (category) query += `&category=${category}`;
    if (minPrice) query += `&minPrice=${minPrice}`;
    if (maxPrice) query += `&maxPrice=${maxPrice}`;
    if (sortBy) query += `&sortBy=${sortBy}`;

    const response = await fetch(query);
    const data = await response.json();
    setProducts(data.products);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, category, minPrice, maxPrice, sortBy]);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex justify-center gap-12 items-center mb-4">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded-md"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2"
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="flex justify-center flex-wrap gap-10 space-y-2 mt-12">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 border"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 border"
        >
          Next
        </button>
      </div>
    </div>
  );
}
