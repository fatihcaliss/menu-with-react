import React from 'react';

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <article>
      <div className='img-container'><img src={img} alt={title} /></div>
      <div className="content">
        <h3>{title}</h3>
        <h4 className='price'>${price}</h4>
        <p>{desc}</p>
      </div>

    </article>
  )
};

export default Menu;
