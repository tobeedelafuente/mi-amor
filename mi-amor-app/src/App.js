import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import GalleryBoard from './components/gallery/GalleryBoard'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/galleryboard' component={GalleryBoard}/>
    </Switch>
  </div>
)

export default App
