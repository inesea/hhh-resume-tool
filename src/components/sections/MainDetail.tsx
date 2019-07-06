import React from 'react'
import styled from 'styled-components'

const Name = styled.div``

const PhoneNumber = styled.div``

const SummaryText = styled.div``

interface IMainDetailProps {
  name: string
  phoneNumber: string
  summaryText: string
}

const MainDetail = ({ name, phoneNumber, summaryText }: IMainDetailProps) => (
  <>
    <Name>{name}</Name>
    <PhoneNumber>{phoneNumber}</PhoneNumber>
    <SummaryText>{summaryText}</SummaryText>
  </>
)

export default MainDetail
