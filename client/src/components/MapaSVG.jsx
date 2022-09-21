import { useFetch } from "../hooks/useFetch"
import { Figure } from "./Figure";


export const MapaSVG = () => {

    const { data:edificios } = useFetch('http://localhost:3300/edificios');
    const { data:aceras } = useFetch('http://localhost:3300/aceras');
    const { data:vialidad } = useFetch('http://localhost:3300/vialidad');
    const { data:zonasVerdes } = useFetch('http://localhost:3300/zonas_verdes');

    if(edificios != null && aceras != null && vialidad != null && zonasVerdes != null)

    return (
        <svg
            id="Contenedor-MapaTec"
            width={"70%"} 
            height={"70%"}
            viewBox={"443574.2675188603 -1146507.6491083507 970.3827371736406 968.9811655969825"}
        >
            <Figure data={edificios} fill="lightblue"/>
            <Figure data={aceras} fill="grey"/>
            <Figure data={vialidad} fill="black"/>
            <Figure data={zonasVerdes} fill="green"/>

        </svg>
    )
}