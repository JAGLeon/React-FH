import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Demon Slayer','goku']);
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([...categories,newCategory]);
    }

    return (
        <>
            <h1>Expert App</h1>

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = {onAddCategory}
            />
            
            {
                categories.map(category =>(
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

