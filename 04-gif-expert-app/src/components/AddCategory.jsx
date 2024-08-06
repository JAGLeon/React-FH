import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Demon Slayer');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setCategories( categories => [inputValue, ...categories]);
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

