


export const Figure = ({ data, fill }) => {
  return (
    data.map( (svgPath) => {
        return(
            <g>
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
