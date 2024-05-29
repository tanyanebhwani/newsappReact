import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
    const router = createBrowserRouter([
      {
        path:"/",
        element: <><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" /></>
      },
      {
        path:"/Business",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></>
      },
      {
        path:"/Entertainment",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></>
      },
      {
        path:"/General",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></>
      },
      {
        path:"/Health",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></>
      },
      {
        path:"/Science",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></>
      },
      {
        path:"/Space",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="space" pageSize={pageSize} country="in" category="space" /></>
      },
      {
        path:"/Technology",
        element:<><Navbar /><LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      /><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></>
      }
    ])
    return (
      <>
        <RouterProvider router={router}/>
      </>
    )
  }
  export default App;
