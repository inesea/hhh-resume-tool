import React from 'react'
import styled from 'styled-components'

import * as styles from '../../../../styles/commonStyles'

const StyledMainDetail = styled.div`
  margin-bottom: 70px;
`
const Name = styled.div`
  font-size: ${styles.text.size.headingLarge};
  font-weight: bold;
  text-transform: ${styles.text.transform.heading};
`
const ContactDetails = styled.div`
  font-size: ${styles.text.size.secondary};
  color: ${styles.text.color.secondary};
  padding-bottom: 15px;
`
const SummaryText = styled.div`
  text-align: justify;
`

interface IMainDetailProps {
  name: string
  email: string
  phoneNumber: string
  summaryText: string
}

const MainDetail = ({
  name,
  email,
  phoneNumber,
  summaryText
}: IMainDetailProps) => (
  <StyledMainDetail>
    <Name>{name}</Name>
    <ContactDetails>{`${email} | ${phoneNumber}`}</ContactDetails>
    <SummaryText>{summaryText}</SummaryText>
  </StyledMainDetail>
)

export default MainDetail
