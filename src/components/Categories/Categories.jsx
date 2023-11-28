import React, { useEffect, useState } from "react";
import "./Categories.css";
import { getProducts, getCategories } from "../../services/FakeStoreAPI";


let Categories = () => {

  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => setCategories(category));
  }, [])

  return (
    <>
      <section id="categories" className="container mt-5">
      <h2 className="text-center subtitle">Categorias:</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {
            categories.slice(0,9).map((category) => {
              return (
                <div className="col mb-5" key={category.id}>
                  <div className="card h-100 penguin-card-border shadow rounded">
                    <img
                      src={category.image}
                      className="card-img-top penguin-card-img"
                      alt={category.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{String(category.name).substring(0,1).toUpperCase()+String(category.name).substring(1)}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>)
};


export default Categories;