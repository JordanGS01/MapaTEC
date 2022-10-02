import { useState } from 'react'
import { CapasContext } from './CapasContext'


export const CapasProvider = ({ children }) => {
    
    const [capas, setCapas] = useState({
        edificios: true,
        zonas_verdes: true,
        aceras: true,
        vialidad: true
    });

    const [chosedId, setChosedId] = useState(null);
    const [zoomActive, setZoomActive] = useState(false);

    const onCheckboxChange = ({ target }) => {
        //Se extrae nombre de la capa
        const { name } = target;
        
        //Se extrae el valor booleano actual de la capa
        const newValue = !capas[ name ];

        //Se asigna el nuevo valor booleano de la capa
        setCapas({
            ...capas,
            [ name ]: newValue
        })
    }

  return (
    <CapasContext.Provider value={{ 
        capas, 
        onCheckboxChange, 
        chosedId, 
        setChosedId,
        zoomActive,
        setZoomActive
    }}>
        { children }
    </CapasContext.Provider>
  )
}
