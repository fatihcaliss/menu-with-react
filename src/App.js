import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map((item) => item.category))]
function App() {

  const [data, setData] = useState(items);
  // const [categories, setCatogories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setData(items);
    } else {
      const filteredData = items.filter((e) => e.category === category)
      setData(filteredData);
    }
  };

  return (
    <>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItem={filterItem} categories={allCategories} />
      <main>
        {data.map((item, i) => <Menu {...item} key={i} />)}
      </main>
    </>
  )
}

export default App;
