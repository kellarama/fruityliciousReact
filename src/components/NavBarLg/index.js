import './index.css'

const NavBar = props => {
  const empty = ''
  const {onSearchClick} = props

  const searchBtn = () => {
    onSearchClick()
  }

  return (
    <nav className="container-fluid bg-dark p-3 d-flex">
      <h1 className="company-name-lg m-auto">
        Fruit<span style={{color: '#fa2205', fontSize: '35px'}}>y</span>
        Licious
      </h1>
      <div className="links-for-lg-device m-auto">
        <a href="#homeSection" target="_self" className="link-style">
          Home
        </a>
        <select className="dropdown-box">
          <option className="option">Category</option>
          <option className="option">Fruits</option>
          <option className="option">Juices</option>
          <option className="option">Ice Cream</option>
          <option className="option">salads</option>
        </select>
        <a href="#homeSection" target="_self" className="link-style">
          Offers
        </a>
        <a href="#homeSection" target="_self" className="link-style">
          Reviews
        </a>
        <a href="#homeSection" target="_self" className="link-style">
          About Us
        </a>
      </div>
      <div className="search-location-sign-container m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#ffffff"
          className="bi bi-search mr-4"
          viewBox="0 0 16 16"
          onClick={searchBtn}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          {empty}
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#ffffff"
          className="bi bi-bag mr-4"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="#ffffff"
          className="bi bi-person mr-4"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
      </div>
    </nav>
  )
}
export default NavBar
