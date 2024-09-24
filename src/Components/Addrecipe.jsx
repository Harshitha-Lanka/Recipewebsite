
import React from 'react';
import styles from './Addrecipe.module.css';
import { useState } from 'react';
import Header from './Header';

const Addrecipe = () => {
 
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <>
      <Header/>  
 
  
   
    <form onSubmit={handleSubmit} className={styles.recipe}>
      <h2>Add a New Recipe</h2>
      <div className={styles.form}>
        <label className={styles.title}>Recipe Title</label>
        <input type="text" placeholder="Recipe Name" required />
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Description</label>
        <textarea placeholder="Short description about the recipe" required></textarea>
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <input key={index} type="text" placeholder={`Ingredient ${index + 1}`} required />
        ))}
        <button type="button" onClick={addIngredient} className={styles.button1}>
          Add Ingredient
        </button>
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Preparation Steps</label>
        {steps.map((step, index) => (
          <textarea key={index} placeholder={`Step ${index + 1}`} required />
        ))}
        <button type="button" onClick={addStep} className={styles.button1}>Add Step</button>
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Preparation Time (minutes)</label>
        <input type="number" placeholder="Prep Time" required />
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Cooking Time (minutes)</label>
        <input type="number" placeholder="Cook Time" required />
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Servings</label>
        <input type="number" placeholder="Number of servings" required />
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Category</label>
        <select>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
          <option>Snack</option>
        </select>
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Image</label>
        <input type="file" accept="image/*" required />
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Video Link (optional)</label>
        <input type="url" placeholder="YouTube or Vimeo link" />
      </div>
      <div className={styles.form}>
        <label className={styles.title}>Tags (optional)</label>
        <input type="text" placeholder="e.g., Vegetarian, Gluten-Free" />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
    
    </>
  );
};


export default Addrecipe;
