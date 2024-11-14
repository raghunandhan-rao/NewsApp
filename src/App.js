import React, { useState} from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 
const App =()=>{
  const pageSize=10
  const apikey=process.env.REACT_APP_API_KEY
  const [progress, setprogress] = useState(10)
  const setProgress=(progress)=>{
    setprogress(progress)
  }
 
     return (
        <Router>
      <Navbar/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
      <div className="container my-3">
          <Routes>
          <Route exact path="/home" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="home" country="us" category="general"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="science" country="us" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="sports" country="us" category="sports"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="health" country="us" category="health"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="general" country="us" category="general"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="entertainment" country="us" category="entertainment"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey} key="business" country="us" category="business"/>} />
          </Routes>
        </div>
      </Router>
     )
   }
 export default App;