import React from 'react'
import Header from './components/Header'
import News from './components/News'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path="/" element={<News key="general" category="General"/>}/>
      <Route exact path="/entertainment" element={<News key="entertainment" category="Entertainment"/>}/>
      <Route exact path="/sports" element={<News key="sports" category="Sports"/>}/>
      <Route exact path="/business" element={<News key="business" category="Business"/>}/>
      <Route exact path="/politics" element={<News key="politics" category="politics"/>}/>
      <Route exact path="/health" element={<News key="health" category="Health"/>}/>
      <Route exact path="/science" element={<News key="science" category="Science"/>}/>
      <Route exact path="/technology" element={<News key="technology" category="Technology"/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

