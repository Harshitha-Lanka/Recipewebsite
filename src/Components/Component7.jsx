import React from 'react'
import styles from  './Component1.module.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import  image9 from '../Images/image9.jpeg'

const Component1 = () => {
    const snacks = [
        { name: 'Chat', path: '/recipe/gulab' },
        { name: 'PaniPuri', path: '/recipe/jalebi' },
         { name: 'Samosa', path: '/recipe/kulfi' }
      ];
  return (
    <>
    <h1 className={`${styles.heading} ${styles.fontEffectAnimation}`}></h1>
    <div>

      <div className={styles.recipe}>
      {/* Image of breakfast */}
      <img src={image9} alt="Breakfast" className={styles.recipeimage}/>

      {/* List of breakfast types */}
      <div className={styles.recipecontent}>
        <h2 className={styles.recipetitle}>Available Snacks</h2>
        <ul className={styles.breakfastitem}>
          {snacks.map((item) => (
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
