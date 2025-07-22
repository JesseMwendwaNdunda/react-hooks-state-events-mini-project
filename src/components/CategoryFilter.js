import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoryButtons = categories.map((cat) => (
    <button
      key={cat}
      className={cat === selectedCategory ? "selected" : null}
      onClick={() => onCategoryChange(cat)}
    >
      {cat}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

