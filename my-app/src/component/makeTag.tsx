interface HOneTag {
  textNode : string
}


const HOneTag : React.FC<HOneTag> = ({textNode}) => {
  return(
    <h1>{textNode}</h1>
  )
}

export default HOneTag