import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "../components/Products/ProductCard";

const products = [
         {
          id: 1,
          name: "RegularFries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-regular-January162020-min.jpg",
          price: 50,
        },
        {
          id: 2,
          name: "Steak Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-steak-January162020-min.jpg",
          price: 30,
        },
        {
          id: 3,
          name: "Shoestring Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-shoestring-January162020-min.jpg",
          price: 100,
        },
        {
          id: 4,
          name: "Matchstick Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-matchstick-January162020-min.jpg",
          price: 45,
        },
        {
          id: 5,
          name: "Crinkle-Cut Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-crinkle-cut-January162020-min.jpg",
          price: 35,
        },
        {
          id: 6,
          name: "Waffle-Cut Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-waffle-cut-January162020-min.jpg",
          price: 50,
        },
        {
          id: 7,
          name: "Wedges",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-wedges-January162020-min.jpg",
          price: 30,
        },
        {
          id: 8,
          name: "Tater Tots",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-tater-tots-January162020-min.jpg",
          price: 100,
        },
        {
          id: 9,
          name: "Cottage Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-cottage-January162020-min.jpg",
          price: 32,
        },
        {
          id: 10,
          name: "Sweet Potato Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-sweet-potato-January162020-min.jpg",
          price: 40,
        },
        {
          id: 11,
          name: "Chips",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-chips-January162020-min.jpg",
          price: 55,
        },
        {
          id: 12,
          name: "Cyrly Fries",
          imgURL: "https://www.homeperch.com/wp-content/uploads/2019/02/different-types-french-fries-curly-January162020-min.jpg",
          price: 70,
        },
      ];

function Products() {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //   This useEffect API will be triggered whenever a search is made
  useEffect(() => {
    function searchMeal() {
      if (searchInput === "") {
        setProductList(products);
      } else {
        const searchList = products.filter((product) => {
          return product.name.toLowerCase().includes(searchInput.toLowerCase());
        });

        setProductList(searchList);
      }
    }

    searchMeal();
  }, [searchInput]);

  return (
    <section className="products">
      <div className="container ">
        <div className="products__header">
          <h1>Products</h1>
        </div>

        <div className="products__search">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* This will be shown when the result is empty */}
        {productList.length === 0 && (
          <p className="emptyResult">Search result is empty</p>
        )}

        {/* This will be shown when there is at least a product in the productList */}
        {searchInput !== "" && productList.length > 0 && (
          <p className="searchHeader">Your search result:</p>
        )}

        <div className="products__list">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;