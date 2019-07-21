import React from 'react'
import styled from 'styled-components'
import SecondarySection from './components/SecondarySection'
import { IResume } from '../../../model/Resume'
import { A4_HEIGHT_CM } from '../../../constants/constants'

import * as styles from '../../../styles/commonStyles'

interface ISecondaryColumnProps {
  resume: IResume
  page: number
  printable: boolean
}

interface StyledProps {
  printable: boolean
}

const StyledForPage1 = styled.div<StyledProps>`
  background: ${styles.background.secondary};
  padding-top: 200px;
  padding-left: 15px;
  margin-top: ${props => (props.printable ? '-20px' : '0px')};
`

const StyledForPage2 = styled.div<StyledProps>`
  background: ${styles.background.secondary};
  height: ${A4_HEIGHT_CM + 4}cm;
  margin-bottom: ${props => (props.printable ? `-20px` : '0px')};
`

const SecondaryColumn = ({
  resume,
  page,
  printable
}: ISecondaryColumnProps) => {
  const { languages, skills, certificates, interests } = resume

  const languagesList = languages
    ? languages.map(item => `${item.name} - ${item.fluency}`)
    : null

  const certificatesList = certificates
    ? certificates.map(item => item.name)
    : null

  return (
    <>
      {page === 1 && (
        <StyledForPage1 printable={printable}>
          {languagesList && (
            <SecondarySection title="Languages" listItems={languagesList} />
          )}
          {skills && (
            <SecondarySection
              title="Tools &amp; Technologies"
              listItems={skills}
            />
          )}
          {certificatesList && (
            <SecondarySection
              title="Certificates"
              listItems={certificatesList}
            />
          )}
          {interests && (
            <SecondarySection
              title="Personal Interests"
              listItems={interests}
            />
          )}
        </StyledForPage1>
      )}

      {page === 2 && <StyledForPage2 printable={printable} />}
    </>
  )
}

export default SecondaryColumn
