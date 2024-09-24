import React from 'react'
import image16 from '../Images/image16.jpg'
import styles from './Contactus.module.css'

const Contactus = () => {
  return (
    <>
    <div>
<img src={image16} alt="imaging" className={styles.image16}></img>

    <h1 className={styles.heading}>Contact Us</h1>
    <input type="text" placeholder='Name' className={styles.text}></input>
    <input type="email" placeholder='Email' className={styles.text1}></input>
    <div>
    <textarea rows={10} columns={10} placeholder='Message' required className={styles.textarea}>

    </textarea>
    </div>
   
    <button className={styles.submit}>Submit</button>

    </div>
   


</>
  )
}

export default Contactus