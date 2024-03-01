import React from 'react'

function ItemCard(url,name,price,description) {
  return (
    <div className="card">
      <img className="product--image" src={url} alt="product image" />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  )
}

export default ItemCard