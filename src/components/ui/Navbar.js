import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

  const { user:{ name }, dispatch } = useContext(AuthContext)

  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login')
    dispatch({
      type: types.logout
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-4" to="/">SuperHeroes</Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
            Marvel
          </NavLink>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
            DC
          </NavLink>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-nav">
        <span className="nav-item nav-link text-info pointer">
          {name}
        </span>
        <button className="nav-item nav-link btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}