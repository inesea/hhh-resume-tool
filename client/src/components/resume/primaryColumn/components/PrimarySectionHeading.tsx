import React from 'react'
import styled from 'styled-components'

import * as styles from '../../../../styles/commonStyles'

const Heading = styled.div`
  letter-spacing: ${styles.text.letterSpacing.wide};
  text-transform: ${styles.text.transform.heading};
  font-size: 14px;
  font-weight: bold;
`
const Divider = styled.hr`
  height: 1px;
  padding: 0;
  border: 0;
  border-top: 1px solid rgb(220, 220, 220);
  margin-bottom: 20px;
`

interface ISectionTitleProps {
  children: string
}

const SectionTitle = ({ children }: ISectionTitleProps) => (
  <div>
    <Heading>{children}</Heading>
    <Divider />
  </div>
)

export default SectionTitle
