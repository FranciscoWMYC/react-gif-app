import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GiftExpert = () => {
    // const categorias = ['Hellsing', 'Ranme 1/2', 'Dragon Ball'];
    const [categorias, setcategorias] = useState(['Hellsing']);
    // const  handleAdd = () => {
        //AGREGAR ELEMENTOS A UN ARREGLO
        // PARA PONERLO AL PRINCIPIO
        // setcategorias(["Wolf's Rain", ...categorias, ]);
        // PARA PONERLO SEGUNDO
        // setcategorias([...categorias, "Wolf's Rain"]);
        //RECIBE UN CALLBACK, REGRESA UN NUEVO ARREGLO CON TODAS LAS CATEGORIAS
        //EL PRIMER CATS EN EL VALOR ANTERIOR Y REGRESA EL NUEVO ESTADO
    //     setcategorias(cats => [...cats, "Wolf's Rain"])
    // }

    return (
        <>
        <h1 className="animate__animated animate__fadeInDown">Gif APP</h1>
        <AddCategoria setcategorias={setcategorias} />
        <hr/>
        {/* <button onClick={handleAdd} >Agregar</button> */}

        <ol>
            {
                categorias.map( (categoria)=>{
                    return <GifGrid 
                    key= {categoria}
                    categoria = {categoria}>

                    </GifGrid>
                    // <li key={categoria}> {categoria}</li>
                })
            }
        </ol>
        </>
    )
}
