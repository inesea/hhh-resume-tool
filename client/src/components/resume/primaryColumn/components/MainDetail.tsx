import React from 'react'
import styled from 'styled-components'

import * as styles from '../../../../styles/commonStyles'

import EmailIcon from '../../../icons/EmailIcon'
import PhoneIcon from '../../../icons/PhoneIcon'

const StyledMainDetail = styled.div`
  margin-bottom: 70px;
`
const Name = styled.div`
  font-size: ${styles.text.size.headingLarge};
  font-weight: bold;
  text-transform: ${styles.text.transform.heading};
`
const ContactDetailsLine = styled.div`
  display: flex;
  align-items: left;
  font-size: ${styles.text.size.secondary};
  color: ${styles.text.color.main};
  padding-bottom: 15px;
`

const SummaryText = styled.div`
  text-align: justify;
`
const ContactDetailContainer = styled.div`
  margin-right: 9px;
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
    <ContactDetailsLine>
      <EmailIcon />
      <ContactDetailContainer>{email}</ContactDetailContainer>
      <PhoneIcon />
      <ContactDetailContainer>{phoneNumber}</ContactDetailContainer>
    </ContactDetailsLine>
    <SummaryText>{summaryText}</SummaryText>
  </StyledMainDetail>
)

export default MainDetail
