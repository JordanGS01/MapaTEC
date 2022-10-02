
import { useContext } from "react";
import { CapasContext } from '../context/CapasContext'



export const Figure = ({ data, fill, active }) => {

  const { setChosedId, setZoomActive, zoomActive } = useContext(CapasContext);
  const acceptedIds = ["16", "17", "9", "6", "29"];

  const onIdChange = (e) => {
    const { id } = e.target;
    
    if( acceptedIds.includes(id) ) {
      setChosedId( id );
      setZoomActive( true );
    }
  }

  if(!active){return <></>}

  return (
    data.map( (svgPath) => {
        return(
            <g 
              key={svgPath.id} 
              onClick={onIdChange} 
              >
                <title>{svgPath?.titulo}</title>
                <path 
                    id={svgPath.id}
                    d={svgPath.svg}
                    stroke="black"
                    fill={ fill }
                    className={`${acceptedIds.includes(`${svgPath.id}`)&&!zoomActive?"EdificioValido":""}`}
                />
            </g>
        )
    }
  ) )
}
