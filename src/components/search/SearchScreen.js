import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useHook'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({ history }) => {

  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const [formValues, handleInputChange] = useForm({
    search: q,
  })
  const { search } = formValues

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
  // const heroesFiltered = getHeroesByName(search)

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${search}`)
  }

  return (
    <>
      <h1>Search Screen</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr/>
          <form onSubmit={handleSearch}>
            <input type="text"
                   className="form-control"
                   placeholder="Find your hero"
                   autoComplete="off"
                   name="search"
                   value={search}
                   onChange={handleInputChange}
            />
            <button className="btn btn-outline-success btn-block mt-1"
                    type="submit">
              <i style={{fontStyle: 'normal'}} className="bi bi-search"> Search</i>
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            (q === '') &&
            <div className="alert alert-info">Search a hero</div>
          }
          {
            (q !== '' && heroesFiltered.length === 0) &&
            <div className="alert alert-danger">Hero not found</div>
          }

          {
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}