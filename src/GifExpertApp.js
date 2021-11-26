import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    // const categories = ['Ironman','Hulk','Thor','Capitán América','Black Panter'];
    const [categories, setCategories] = useState(['Ironman']);

    // const handleAdd = () =>{
    //     // setCategories( ['Rodrigo Vega', ...categories] );
    //     setCategories(cats => [...categories, 'Rodrigo Vega']);
    // };

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories = {setCategories} />  

          <hr />

          <ol>
            {
                categories.map( category => ( 
                    <GifGrid 
                        key = {category}
                        category={category}/> 
                    ))
            }             
          </ol>  
        </>
    )
}
 export default GifExpertApp;