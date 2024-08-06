import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Demon Slayer','goku']);
    
    const onAddCategory = () => {
        setCategories([...categories,'valorant']);
    }

    return (
        <>
        <h1>Expert App</h1>
        <AddCategory onAddCategory={setCategories}/>
        <ol>
            { categories.map(category => <li key={category}>{category}</li>) }
        </ol>

        </>
        
    )
}

