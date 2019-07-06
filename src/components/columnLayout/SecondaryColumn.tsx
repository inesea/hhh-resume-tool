import React from 'react'
import styled from 'styled-components'
import { IResume } from '../../model/Resume'
import Languages from '../sections/Languages'

const StyledSecondaryColumn = styled.div`
  background: lightBlue;
  padding-top: 140px;
  padding-left: 15px;
`
interface ISecondaryColumnProps {
  resume: IResume
}

const SecondaryColumn = ({ resume }: ISecondaryColumnProps) => {
  const { languages } = resume
  return (
    <StyledSecondaryColumn>
      <Languages languages={languages} />
    </StyledSecondaryColumn>
  )
}
export default SecondaryColumn
