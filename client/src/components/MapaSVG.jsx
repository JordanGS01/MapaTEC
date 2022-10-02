

import { useContext } from "react"

import { CapasContext } from '../context/CapasContext'

import { Capas } from '../components/Capas';
import { MapaGlobal } from "./MapaGlobal";
import { ZoomEdificio } from "./ZoomEdificio";


export const MapaSVG = () => {

    const { capas, chosedId, zoomActive } = useContext( CapasContext );


    return (
        zoomActive 
        ?
        <ZoomEdificio chosedId={ chosedId }/>
        :
        <>
            <MapaGlobal capas={ capas } />
            <Capas />
        </>
    )
}