import React, { useMemo } from 'react'
import { Redirect, useParams, useHistory } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
const heroImages = require.context('../../assets/heroes', true)

export const HeroScreen = () => {
  const { heroId: id } = useParams()
  const hero = useMemo(() => getHeroById(id), [id])
  let history = useHistory()
  if (!hero) {
    return <Redirect to="/"/>
  }
  const { superhero, alter_ego, first_appearance, publisher, characters } = hero
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    }
    history.goBack()
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={ heroImages(`./${id}.jpg`).default }
          className="img-thumbnail animate__animated animate__shakeX"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
          <li className="list-group-item"><b>First appearance: </b> {first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-dark btn-sm" onClick={handleReturn}>Return</button>
        </div>
      </div>
    </div>
  )
}