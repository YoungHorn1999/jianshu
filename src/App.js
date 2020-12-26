import React, { Component } from 'react'
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from './style'
import { GlobalStyleFont } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <GlobalStyleFont/>
        <Header/>
      </Provider>
    )
  }
}

export default App;
