import React from 'react'
import styled from 'styled-components'

import * as styles from '../../../styles/commonStyles'

const StyledSectionTitle = styled.div`
  letter-spacing: ${styles.text.letterSpacing.wide};
  text-transform: ${styles.text.transform.heading};
  font-size: ${styles.text.size.headingMedium};
  font-weight: bold;
`

interface ISectionTitleProps {
  children: string
}

const SectionTitle = ({ children }: ISectionTitleProps) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
)

export default SectionTitle
