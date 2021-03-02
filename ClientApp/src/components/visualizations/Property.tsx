import React from 'react';


interface IPropertyProps {
  rooms: number,
  bathrooms: number,
  wc: number,
  kitchen: boolean,
  studio?: boolean,
  ensuite?: boolean,
  floorPlan?: string //floor plan url
  images: string //album url
  location: string
}

const Property: React.FunctionComponent<IPropertyProps> = (props: IPropertyProps) =>{

  return(
    <>
    </>
  )
}

export default Property;