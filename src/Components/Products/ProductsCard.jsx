import React from "react";

export default function ProductsCard({ product }) {
  const {
    Category,
    ProductName,
    Description,
    Price,
    ProductCreationTime,
    Ratings,
    ProductCreationDate,
  } = product;
  return (
    <div>
      <div className="w-full max-w-80 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <div className="flex items-center px-6 py-2 bg-gray-900">
          <h1 className="mx-3 text-lg font-semibold text-white">{Category}</h1>
        </div>

        <div className="px-6 py-2">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {ProductName}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">{Description}</p>

          <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              <span className="font-bold">Price</span> : {Price}$
            </h1>
          </div>

          <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              <span className="font-bold">Ratings : </span>
              {Ratings}
            </h1>
          </div>
          <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              <span className="font-bold">ProductCreationDate : </span>
              {ProductCreationDate}
            </h1>
          </div>
          <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">
              <span className="font-bold">ProductCreationTime : </span>
              {ProductCreationTime}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
