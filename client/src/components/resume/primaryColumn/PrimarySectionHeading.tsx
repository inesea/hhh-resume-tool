import React from 'react'
import styled from 'styled-components'

import * as styles from '../../../styles/commonStyles'

const Heading = styled.div`
  letter-spacing: ${styles.text.letterSpacing.wide};
  text-transform: ${styles.text.transform.heading};
  font-size: 14px;
  font-weight: bold;
`
const DividerLine = styled.hr`
  height: 1px;
  padding: 0;
  border: 0;
  border-top: 1px solid #dcdcdc;
  margin-bottom: 20px;
`

interface ISectionTitleProps {
  children: string
}

const PrimarySectionHeading = ({ children }: ISectionTitleProps) => (
  <div>
    <Heading>{children}</Heading>
    <DividerLine />
  </div>
)

export default PrimarySectionHeading
