import React from 'react';
import styles from './Hero.module.css';
import image1 from '../Images/image1.jpg';
import chef from '../Images/chef.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate('/addrecipe');
  };

  return (
    <div>
      <div>
        <img src={image1} alt="image1" className={styles.image1} />
        <h1 className={styles.overlay}>Weave your culinary Stories with tasty threads</h1>
        <h4 className={styles.overlay1}>Share your favourite recipe and discover new flavours and join a community of food lovers</h4>
        <img src={chef} alt="chef" className={styles.chef} />
        <button className={styles.button} onClick={handleAddRecipeClick}>Add Recipe</button>
      </div>
    </div>
  );
};

export default Hero;
