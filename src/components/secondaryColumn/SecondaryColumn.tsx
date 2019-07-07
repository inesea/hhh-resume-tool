import React from 'react'
import styled from 'styled-components'
import SecondarySection from './components/SecondarySection'
import { IResume, ILanguage, ICertificate } from '../../model/Resume'

const StyledSecondaryColumn = styled.div`
  background: lightBlue;
  padding-top: 140px;
  padding-left: 15px;
`
interface ISecondaryColumnProps {
  resume: IResume
}

const getLanguagesList = (languages: ILanguage[]) =>
  languages ? languages.map(item => `${item.name} - ${item.fluency}`) : null

const getCertificatesList = (certificates: ICertificate[]) =>
  certificates ? certificates.map(item => item.name) : null

const SecondaryColumn = ({ resume }: ISecondaryColumnProps) => {
  const { languages, skills, certificates, interests } = resume

  const languagesList = getLanguagesList(languages)
  const certificatesList = getCertificatesList(certificates)

  return (
    <StyledSecondaryColumn>
      {languagesList && (
        <SecondarySection title="Languages" listItems={languagesList} />
      )}
      {skills && (
        <SecondarySection title="Tools &amp; Technologies" listItems={skills} />
      )}
      {certificatesList && (
        <SecondarySection title="Certificates" listItems={certificatesList} />
      )}
      {interests && (
        <SecondarySection title="Personal Interests" listItems={interests} />
      )}
    </StyledSecondaryColumn>
  )
}
export default SecondaryColumn
