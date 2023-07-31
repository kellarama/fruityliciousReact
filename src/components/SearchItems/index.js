import './index.css'

const SearchItems = props => {
  const {items} = props
  const {name, image, description, price, quantity} = items

  return (
    <div className="search-items">
      <h1 className="title">{name}</h1>
      <img src={image} alt={name} className="img-size" />
      <p className="price">
        Price:- <span className="style">{price}/- </span>
      </p>
      <p className="quantity">
        Quantity <span className="style">{quantity}</span>
      </p>
      <p className="description">
        Description <br />
        <span className="description-style">{description}</span>
      </p>
    </div>
  )
}

export default SearchItems
