

import { useContext } from "react"

import { CapasContext } from '../context/CapasContext'

export const Capas = () => {
    const { capas, onCheckboxChange } = useContext( CapasContext );
    

    //Extraemos la referencia la variable booleana de cada capa
    const { edificios, zonas_verdes, aceras, vialidad } = capas;

    
    return (
        <div className="Capas-Container">
            <section className="Capas-CheckboxContainer">
                <input 
                    type = "checkbox" 
                    id = "edificios" 
                    name = "edificios" 
                    value = "edificios" 
                    onClick = { onCheckboxChange } 
                    //Verificamos si la capa en cuestión está activa
                    checked = { edificios }
                />
                <label htmlFor="edificios">Edificios</label>
            </section>
            
            <section className="Capas-CheckboxContainer">
                <input 
                    type = "checkbox" 
                    id = "zonas_verdes" 
                    name = "zonas_verdes" 
                    value = "zonas_verdes" 
                    onClick = { onCheckboxChange }
                    checked = { zonas_verdes }
                />
                <label htmlFor="zonas_verdes">Zonas Verdes</label>
            </section>
            
            <section className="Capas-CheckboxContainer">
                <input 
                    type = "checkbox" 
                    id = "aceras" 
                    name = "aceras" 
                    value = "aceras" 
                    onClick = { onCheckboxChange }
                    checked={ aceras }
                />
                <label htmlFor="aceras">Aceras</label>
            </section>

            <section className="Capas-CheckboxContainer">
                <input 
                    type = "checkbox" 
                    id = "vialidad" 
                    name = "vialidad" 
                    value = "vialidad" 
                    onClick = { onCheckboxChange }
                    checked = { vialidad }
                />
                <label htmlFor="vialidad">Vialidad</label>
            </section>
        </div>
    )
}
