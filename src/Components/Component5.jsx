import React from 'react'
import styles from  './Component5.module.css'


import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image7 from '../Images/image7.jpg'

const Component1 = () => {
    const lunchitems = [
        { name: 'Chai', path: '/recipe/chai' },
        { name: 'Lassi', path: '/recipe/lassi' },
        {name:'Buttermilk', path:'/recipe/buttermilk'},
        
      ];
  return (
    <>
   
    <div>
    
      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image7} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Drinks</h2>
        <ul className={styles.lunchitems}>
          {lunchitems.map((item) => (
            <li key={item.name} className={styles.breakfastitem}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    </div>
    </>
  )
}

export default Component1
