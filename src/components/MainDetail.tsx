import React from 'react'

interface IMainDetailProps {
  name: string
  phoneNumber: string
  summaryText: string
}

const MainDetail = ({ name, phoneNumber, summaryText }: IMainDetailProps) => {
  return (
    <>
      <div>{name}</div>
      <div>{phoneNumber}</div>
      <div>{summaryText}</div>
    </>
  )
}

export default MainDetail
