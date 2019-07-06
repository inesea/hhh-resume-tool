import React from 'react'
import styled from 'styled-components'
import IResume from '../../model/Resume'

const StyledSecondaryColumn = styled.div`
  background: lightBlue;
`
interface ISecondaryColumnProps {
  resume: IResume
}

const SecondaryColumn = ({ resume }: ISecondaryColumnProps) => (
  <StyledSecondaryColumn>
    <div>LANGUAGES</div>
    {resume.languages.map(language => (
      <div key={language.language}>
        {`${language.language} - ${language.fluency}`}
      </div>
    ))}
  </StyledSecondaryColumn>
)

export default SecondaryColumn
