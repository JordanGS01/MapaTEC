
import { useFetch } from '../hooks/useFetch'

import { Figure } from './Figure'

export const MapaGlobal = ({ capas }) => {

    const { data:edificios } = useFetch('http://localhost:3300/edificios');
    const { data:aceras } = useFetch('http://localhost:3300/aceras');
    const { data:vialidad } = useFetch('http://localhost:3300/vialidad');
    const { data:zonasVerdes } = useFetch('http://localhost:3300/zonas_verdes');

    //Extraemos la referencia la variable booleana de cada capa y las renombramos
    const { 
        edificios: capaEdificiosBool, 
        zonas_verdes: capaZonasVerdesBool, 
        aceras: capaAcerasBool, 
        vialidad: capaVialidadBool 
    } = capas;

    if(edificios != null && aceras != null && vialidad != null && zonasVerdes != null)

    return (
        <svg
            id="Contenedor-MapaTec"
            width={"70%"} 
            height={"70%"}
            viewBox={"443480 -1146600 1200 1200"}
        >
            <Figure data={edificios} fill="lightblue" key={'edificios'} active={capaEdificiosBool}/>
            <Figure data={aceras} fill="grey" key={'aceras'} active={capaAcerasBool}/>
            <Figure data={vialidad} fill="black" key={'vialidad'} active={capaVialidadBool}/>
            <Figure data={zonasVerdes} fill="green" key={'zonas_verdes'} active={capaZonasVerdesBool}/>

        </svg>
  )
}
