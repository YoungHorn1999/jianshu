import React, { Component } from 'react'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { GlobalStyleFont } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle/>
          <GlobalStyleFont/>
          <BrowserRouter>
            <Header/>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
