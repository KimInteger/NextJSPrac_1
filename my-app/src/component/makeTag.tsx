interface HOneTag {
  textNode : string
}


const HOneTag : React.FC<HOneTag> = ({textNode}) => {
  return(
    <h1>Hellow Next.js!</h1>
  )
}

export default HOneTag