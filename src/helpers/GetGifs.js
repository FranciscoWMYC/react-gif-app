// import React from 'react'

export const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria) }&limit=5&api_key=rMPt7EcS3v6kEeo2MvAzpz727Pf8BXTM`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
      //el signo de interrogacion es para asegurarnos que trae imagenes
      return {
        id: img.id,
        title:img.title,
        urlImage:img.images?.downsized_medium.url
      }
    });
    console.log(gifs);
    //EL NUEVO ESTADO SON LOS GIFS QUE RECIBO
    return gifs;


  }
