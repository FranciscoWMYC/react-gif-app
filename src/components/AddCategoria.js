import React,{useState} from 'react'
import PropTypes from 'prop-types'
//rafc  snippet
export const AddCategoria = ({setcategorias}) => {

    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (evento)=>{
        setinputValue(evento.target.value);
    }

    const handleSubmit = (e)=>{
        //PREVIENE QUE SE RECARGUE LA PAGINA 
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            
            setcategorias(cats => [ inputValue, ...cats]);
            setinputValue('');
        }
        

    }

    return (
        <>  
            {/* INPUT VALUE TIENE EL ULTIMO VALOR ACTUALIZADO */}
            {/* <h1>{inputValue}</h1> */}
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            ></input>
            </form>
            
        </>
    )
}
AddCategoria.propTypes = {
    setcategorias: PropTypes.func.isRequired
}