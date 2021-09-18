import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/GetGifs';


export const useFetchGifs = (categoria) => {
    //la primera vez que se use tendra esta data
    //por defecto
   const [state, setState] = useState({
       data:[],
       loading:true
   }); 
// SE USA ESTE EFECTO CUANDO LA CATEGORIA CAMBIA, ES DECIR LA PRIMERA VEZ
// AHI SE DISPARA. NO PUEDEN SER ASYNC
   useEffect( ()=>{
    getGifs(categoria).then( (imagenes) =>{
        
            setState({
                data: imagenes,
                loading: false
            });
       
    });
   },[categoria])

//    setTimeout(() => {
//        setState({
//         data:[1,2,3,4,5,6],
//         loading:false
//     })
//    }, 3000);

   return state;

}
