import React from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categoria}) => {

  // const [images, setImages] = useState([]);
//para renombrar es data: nombre
  const {data:images,loading} = useFetchGifs(categoria);
  // console.log(data);
  // console.log(loading);


  // EL [] ES UN ARREGLO DE DEPENDENCIAS, 
  // SI LO MANDAMOS VACIO OSEA QUE NO TIENE DEPENDECIAS
  //EL USE EFFECT SOLO SE DISPARA 1 VEZ
  //si la categoria cambia tendria que volver a ejecutar esto de abajo
  //EN ESTE CASO NO SUCEDE POR COMO TENEMOS LA LOGICA
  //sirve por si queremos volver a disparar la peticion htpt
  
  // useEffect( ()=>{
  //   getGifs(categoria)

    // .then( (imagenes) => setImages(imagenes))
    // MAS CORTO PORQUE SOLO ES UN ARGUMENTO MANDADO EN LA PRIMERA POSICION

  //   .then(setImages);
  // },[categoria]);


    return (
          // images.map( img => {
          //   return <li key={img.id}>{img.title}</li>
      <>
      <h3>{categoria}</h3> 
      {/* {loading ? 'Cargando...' : 'Termino de cargar'} */}
      {loading && <p>Cargando...</p>}
        <div className="card-grid">
            {
            
            images.map( (img) => {
              return <GifGridItem
                key={img.id}
                {...img}
              />
            })

            }
        </div>
        
      </>       
    )
}
