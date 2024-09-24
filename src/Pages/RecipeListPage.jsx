import React from 'react'
import Component1 from '../Components/Component1'
import Component2 from '../Components/Component2'
import Component3 from '../Components/Component3'
import Component4 from '../Components/Component4'
import Component5 from '../Components/Component5'
import Component6 from '../Components/Component6'
import COmponent7 from '../Components/Component7'
import Component8 from '../Components/Component8'
import Component9 from '../Components/Component9'

import styles from '../Components/Component1.module.css';
import { useNavigate } from 'react-router-dom'
import Idly from '../RecipeDetailComponents/Idly'
import Contactus from '../Components/Contactus'



const RecipeListPage = () => {
   const navigate=useNavigate();

   const buttonClicking =()=>
   {
    navigate("/addrecipe")
   }
  return (
    <>
    <div className={styles.pagecontainer}>
   
      <div className={styles.back}></div>

    
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <COmponent7 />
      <Component8 />
      <Component9 />
     
     <h2 className={styles.heading2}>Have a delicious recipe to add?? Submit It Now!</h2>
     <button className={styles.button2} onClick={buttonClicking}>Add your Recipe</button>
    </div><br></br><br></br><br></br><br></br><br></br>
    <div>
  
    </div>
    </>
  )
}

export default RecipeListPage
