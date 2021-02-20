import React from 'react';


interface IPropertyProps {
  rooms: number,
  bathrooms: number,
  wc: number,
  kitchen: boolean,
  studio?: boolean,
  ensuite?: boolean
  
}

const Property: React.FunctionComponent<IPropertyProps> = (props: IPropertyProps) =>{

  return(
    <>
    </>
  )
}

export default Property;