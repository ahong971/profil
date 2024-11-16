import React from 'react'

const Badge = ({name,warna}:{name:string,warna:string}) => {
  return (
    <span className={`px-3 py-1 rounded-full text-md font-semibold  ${warna}`}>{name}</span>
  )
}

export default Badge