import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all" , ...new Set(items.map((item) => item.category))];

function App() {
  const [category, setcategory] = useState(allCategories);

  const [menuItem, setmenuItem] = useState(items);

  console.log(allCategories);


  const filterItems = (category) => {
    if(category === "all"){
      setmenuItem(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setmenuItem(newItems);
  }
  
  console.log(menuItem);
  
  return (
    <main className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories category={category} filterItems={filterItems} />
      <Menu items={menuItem}/>
    </main>
  );
}

export default App;
