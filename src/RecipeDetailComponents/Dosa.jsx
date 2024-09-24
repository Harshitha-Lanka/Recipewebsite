import React from 'react'
import Header from '../Components/Header'
import styles from './Idly.module.css'
import image17 from '../Images/image17.png'
import image18 from '../Images/image18.png'
import image19 from '../Images/image19.png'
import image20 from '../Images/image20.png'
import image21 from '../Images/image21.png'


const Idly = () => {
  return (
    <>
    <Header/>
  <h1>Idly</h1>
  <div>
    <img src={image17} alt='idly' className={styles.idlyimage}></img>
  </div>
  <div className={styles.intro}>
    <p className={styles.para}>Idly is a traditional South Indian breakfast dish, known for being light, healthy, and nutritious. It is made from a batter of fermented rice and urad dal (split black gram), which is steamed to make soft, fluffy cakes. Idly is often paired with sambar (a tangy, spicy lentil-based soup) and coconut chutney, making it a wholesome and satisfying meal.</p>
  </div>
  <div className={styles.info}>
  <div>
  
    <p>4</p>
    <p>Ingredients</p>
  </div>
  <div className={styles.line}>
    <p>15</p>
    <p>Minutes</p>
  </div>
  <div>
    <p>37</p>
    <p>Calories</p>
  </div>
  </div>
  <div className={styles.ingredients}>
    <h1 className={styles.heading}>Ingredients</h1>
    <p className={styles.para1}>

    1. 2 cups of Rice (preferably parboiled or idly rice)<br></br>
    2.  1 cup of Urad Dal (skinned split black gram)<br></br>
    3.  Water (as required)<br></br>
    4. Salt (to taste)</p>
  </div>
  <div>
    <img src={image18} alt="idly" className={styles.ingreimage}></img>
  </div>
  <div className={styles.steps}>
    <p className={styles.para3}>
      <h1 className={styles.stepsheading}>Steps</h1>
      <b>Soak the Ingredients:</b>

Rinse the rice and urad dal separately in water until the water runs clear.
Soak the rice in a bowl and the urad dal in another bowl along with fenugreek seeds. Let them soak for 4-6 hours.<br></br>
<b>Grind the Batter:</b>

After soaking, drain the water and grind the urad dal and fenugreek seeds into a smooth, fluffy batter using a blender or wet grinder. Add water as needed to achieve the right consistency.
Similarly, grind the rice into a slightly coarse batter.
Combine the rice and urad dal batters in a large bowl, mix well, and add salt. The batter should have a thick, pourable consistency.<br></br>
<b>Ferment the Batter:</b>

Cover the batter and let it ferment in a warm place overnight or for 8-12 hours. Fermentation helps the batter rise, resulting in soft, fluffy idlis.<br></br>
<b>Prepare the Idly:</b>

Once the batter is fermented, grease idly molds with oil or ghee.
Pour the fermented batter into the molds, filling them about three-quarters full.
Steam the idlis in a steamer or pressure cooker (without the whistle) for 10-15 minutes on medium heat.
Once done, remove the idlis from the steamer and allow them to cool for a minute before taking them out of the molds.<br></br></p>
  </div>
  <div>
    <img src={image19} alt="idly" className={styles.stepsimage}></img>
  </div>
  <div className={styles.accom}>
    <h1 className={styles.accoheading}>Accompaniments</h1>
    <p className={styles.para3}><b>Sambar:</b>

<b>Sambar</b> is a lentil-based stew made with toor dal (split pigeon peas), tamarind, and a variety of vegetables like drumsticks, carrots, onions, and tomatoes.
It is seasoned with mustard seeds, curry leaves, and sambar powder, giving it a tangy and spicy flavor that complements the idly.<br></br>
<b>Coconut Chutney:</b>

This is a simple, refreshing chutney made from fresh coconut, green chilies, roasted chana dal, and a bit of tamarind.
It is ground into a smooth paste and tempered with mustard seeds, curry leaves, and dried red chilies.
</p>
  </div>
  <div>
    <img src={image20} alt="idly" className={styles.image20}></img>
  </div>
  <div className={styles.water}>
 
  </div>
  <h1 className={styles.nutri}>Nutrition</h1>
  <div className={styles.bigdiv}>
  <div className={styles.circle1}>
     <h3>Carbohydrates</h3>
  </div>
  <div className={styles.circle2}>
    <h3 className={styles.protein}>Protein</h3>
  </div>
  <div className={styles.circle3}>
    <h3 className={styles.fat}>Fat</h3>
  </div>
  <div className={styles.circle4}>
    <h3 className={styles.sodium}>Sodium</h3>
  </div>
  </div>
  </>
  )
}

export default Idly