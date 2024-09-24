import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Pages/Homepage';
import Hero from './Components/Hero'


import Contactus from './Components/Contactus';



import Addrecipe from './Components/Addrecipe';
import RecipeListPage from './Pages/RecipeListPage';
import RecipeDetailsPage from './Pages/RecipeDetailsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/addrecipe" element={<Addrecipe/>} />
        <Route path="/Hero" element={<Hero/>}/>
        <Route path="/RecipeListPage" element={<RecipeListPage/>}/>
        <Route path="/RecipeDetails/:name" element={<RecipeDetailsPage/>}/>
    
       

      </Routes>
    </Router>
  );
}

export default App;
