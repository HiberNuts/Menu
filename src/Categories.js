import React from "react";

const Categories = ({ category, filterItems }) => {
  return (<div className="btn-container">
    {category.map((cat, index) => {
      return(
        <button key={index} type='button' className="filter-btn" onClick={()=> filterItems(cat)}>
          {cat}
        </button>
      )
    })}
  </div>)
};

export default Categories;
