import { useFetch } from "../hooks/useFetch"


export const Prueba = () => {

    const { data, loading, error } = useFetch('http://localhost:3300/edificios');
    
    return (
        <code>
            {JSON.stringify(data)}
        </code>
    )
}