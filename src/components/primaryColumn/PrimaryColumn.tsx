import React from 'react'
import styled from 'styled-components'
import MainDetail from './components/MainDetail'
import WorkSection from './components/WorkSection'
import { IResume } from '../../model/Resume'

const StyledPrimaryColumn = styled.div`
  padding-top: 70px;
`

interface IPrimaryColumnProps {
  resume: IResume
}

const PrimaryColumn = ({ resume }: IPrimaryColumnProps) => {
  const { basics, work } = resume
  return (
    <StyledPrimaryColumn>
      <MainDetail
        name={basics.name}
        email={basics.email}
        phoneNumber={basics.phone}
        summaryText={basics.summary}
      />
      <WorkSection work={work} />
    </StyledPrimaryColumn>
  )
}
// @ts-ignore
export default PrimaryColumn
