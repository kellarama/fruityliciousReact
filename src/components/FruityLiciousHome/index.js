import {Component} from 'react'

import NavBarLg from '../NavBarLg'

import NavBarSm from '../NavBarSm'

import SearchItems from '../SearchItems'

import InitialItemsList from '../InitialItemsList'

import LoginAndRegistration from '../LoginAndRegistration'

import './index.css'

// using class Component to return jsx element

class FruityLiciousHome extends Component {
  state = {
    isSearchBtnClicked: false,
    isProfileBtnClicked: false,
    isLoginBtnClicked: false,
    searchInput: '',
    count: 0,
  }

  // using onSearchClick function to modify the isSearchBtnClicked

  onSearchClick = () => {
    this.setState(prevState => ({
      isSearchBtnClicked: !prevState.isSearchBtnClicked,
    }))
  }

  // login and register update value when clicked

  onLoginAndRegistrationClick = () => {
    this.setState(prevState => ({
      isLoginBtnClicked: !prevState.isLoginBtnClicked,
    }))
  }

  // using btnClick function to back from the search container

  btnClick = () => {
    this.setState(prevState => ({
      isSearchBtnClicked: !prevState.isSearchBtnClicked,
    }))
  }

  loginClick = () => {
    this.setState(prevState => ({
      isLoginBtnClicked: !prevState.isLoginBtnClicked,
    }))
  }

  // creating home section using createHomeSection function

  createHomeSection = () => (
    <div>
      <div className="nav-bar d-block d-lg-none">
        <NavBarSm
          onSearchClick={this.onSearchClick}
          onLoginAndRegistrationClick={this.onLoginAndRegistrationClick}
        />
      </div>
      <div className="nav-bar d-none d-lg-block">
        <NavBarLg
          onSearchClick={this.onSearchClick}
          onLoginAndRegistrationClick={this.onLoginAndRegistrationClick}
        />
      </div>
    </div>
  )

  // searchInput function is used to modify the searchInput and count value

  searchInput = event => {
    this.setState({searchInput: event.target.value})
    this.setState({count: event.target.value.length})
  }

  // searchContainer function is used to display search items

  searchContainer = (searchResults, count) => (
    <div className="container text-center mt-3">
      <img
        src="https://res.cloudinary.com/dpcgriaf4/image/upload/v1688378520/fruitylicious/2-removebg-preview_nbsras.png"
        alt="company logo"
        className="company-image"
      />
      <button
        type="button"
        className="btn btn-primary m-3"
        onClick={this.btnClick}
      >
        Back
      </button>
      <div className="mt-3">
        <div className="d-flex flex-row justify-content-center">
          <input
            type="search"
            placeholder="Search Items"
            className="search"
            onChange={this.searchInput}
          />
          <h1 className="search-text ml-3">Search</h1>
        </div>
        <div className="d-flex flex-row justify-content-center mt-3">
          <button type="button" className="suggestion-btn m-2">
            Fruits
          </button>
          <button type="button" className="suggestion-btn m-2">
            Juices
          </button>
          <button type="button" className="suggestion-btn m-2">
            Salads
          </button>
          <button type="button" className="suggestion-btn m-2">
            Ice Creams
          </button>
        </div>
        <div className="result-container mt-5">
          {count > 0
            ? searchResults.map(eachItem => (
                <SearchItems items={eachItem} key={eachItem.id} />
              ))
            : null}
        </div>
      </div>
    </div>
  )

  // used for profile container

  loginContainer = () => (
    <div>
      <div>
        <LoginAndRegistration loginClick={this.loginClick} />
      </div>
    </div>
  )

  // used for sign in or login

  profileContainer = () => (
    <div>
      <p>login</p>
    </div>
  )

  // simply return null if false value

  returnNullFun = () => null

  render() {
    const {
      isSearchBtnClicked,
      isProfileBtnClicked,
      isLoginBtnClicked,
      count,
      searchInput,
    } = this.state

    const searchResults = InitialItemsList.filter(eachItem =>
      eachItem.name.toUpperCase().includes(searchInput.toUpperCase()),
    )
    console.log(isLoginBtnClicked)
    console.log(count)
    let jsxEleCreateFun
    let checkState
    switch (true) {
      case isSearchBtnClicked:
        jsxEleCreateFun = this.searchContainer(searchResults, count)
        checkState = isSearchBtnClicked
        break
      case isProfileBtnClicked:
        jsxEleCreateFun = this.profileContainer()
        checkState = isProfileBtnClicked
        break
      case isLoginBtnClicked:
        jsxEleCreateFun = this.loginContainer()
        checkState = isLoginBtnClicked
        break
      default:
        checkState = false
        jsxEleCreateFun = this.returnNullFun()
        break
    }
    return <div>{checkState ? jsxEleCreateFun : this.createHomeSection()}</div>
  }
}

export default FruityLiciousHome
