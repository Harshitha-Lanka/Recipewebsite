import React from 'react'
import styles from  './Component4.module.css'


import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image6 from '../Images/image6.jpg'

const Component1 = () => {
    const lunchitems = [
        { name: 'Indian', path: '/recipe/paneer' },
        { name: 'Italian', path: '/recipe/chicken' },
        {name:'Chinese', path:'/recipe/chinese'},
        
      ];
  return (
    <>
   
    <div>
    
      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image6} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Cuisines</h2>
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
