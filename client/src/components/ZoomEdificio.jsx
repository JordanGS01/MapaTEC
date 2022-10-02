
import { useContext } from 'react';

import { CapasContext } from '../context/CapasContext';

import { useFetch } from '../hooks/useFetch'
import { Figure } from './Figure';


export const ZoomEdificio = ({ chosedId }) => {
    const { setZoomActive } = useContext(CapasContext);
    
    const { data:dimensiones } = useFetch(`http://localhost:3300/dimensiones/${chosedId}`);
    const { data:edificio } = useFetch(`http://localhost:3300/edificio_zoom/${chosedId}`);
    const { data:zona_segura } = useFetch(`http://localhost:3300/zona_segura/${chosedId}`);
    const { data:ruta_evacuacion } = useFetch(`http://localhost:3300/ruta_evacuacion/${chosedId}`);

    
    if( dimensiones === null || edificio === null || zona_segura === null || ruta_evacuacion === null) { return<>Cargando...</> }

    //Dimensiones del viewBox del SVG
    const { xmin, ymax, alto, ancho } = dimensiones[0];
    
    return (
    <>
    <button className='BotonRegresar' onClick={()=>{setZoomActive(false)}}>
        Regresar
    </button>
    <svg
            id="Contenedor-ZoomEdificio"
            width={"70%"} 
            height={"70%"}
            viewBox={`${xmin} ${ymax} ${alto} ${ancho}`}
        >
            <Figure 
                data={edificio} 
                fill="lightblue" 
                key={'edificio_zoom'} 
                active={true} 
            />

            <Figure 
                data={zona_segura} 
                fill="lightgreen" 
                key={'zona_segura'} 
                active={true} 
            />

            <Figure 
                data={ruta_evacuacion} 
                fill="none" 
                key={'ruta_evaciacion'} 
                active={true} 
            />
    </svg>
    </>
  )
}
