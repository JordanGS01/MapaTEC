


export const Figure = ({ data, fill, active }) => {

  if(!active){return <></>}

  return (
    data.map( (svgPath) => {
        return(
            <g key={svgPath.svg}>
                <title>{svgPath.titulo}</title>
                <path 
                    d={svgPath.svg}
                    stroke="black"
                    fill={ fill }
                />
            </g>
        )
    }
  ) )
}
