import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}/>
          <Route exact path="/marvel/:heroId" component={HeroScreen}/>
          <Route exact path="/dc" component={DcScreen}/>
          <Redirect to="/marvel"/>
        </Switch>
      </div>
    </>
  )
}