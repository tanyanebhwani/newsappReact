import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  };
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    const router = createBrowserRouter([
      {
        path:"/",
        element: <><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" /></>
      },
      {
        path:"/Business",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" /></>
      },
      {
        path:"/Entertainment",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></>
      },
      {
        path:"/General",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" /></>
      },
      {
        path:"/Health",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" /></>
      },
      {
        path:"/Science",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" /></>
      },
      {
        path:"/Space",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="space" pageSize={this.pageSize} country="in" category="space" /></>
      },
      {
        path:"/Technology",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      /><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" /></>
      }
    ])
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
  }
}
