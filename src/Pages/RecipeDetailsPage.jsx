import { useParams } from "react-router-dom";
import Idly from "../RecipeDetailComponents/Idly";


import React from 'react';

function RecipeDetailsPage() {
    const { name } = useParams();

    if (name === "Idly") {
        return <Idly />;
   
    } else {
        return <div>Recipe not found</div>;
    }
}

export default RecipeDetailsPage;
