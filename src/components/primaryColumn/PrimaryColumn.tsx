import React from 'react'
import styled from 'styled-components'
import MainDetail from './components/MainDetail'
import WorkSection from './components/WorkSection'
import { IResume } from '../../model/Resume'
import EducationSection from './components/EducationSection'

const StyledPrimaryColumn = styled.div`
  padding-top: 70px;
`

interface IPrimaryColumnProps {
  resume: IResume
}

const PrimaryColumn = ({ resume }: IPrimaryColumnProps) => {
  const { basics, work, education } = resume
  return (
    <StyledPrimaryColumn>
      <MainDetail
        name={basics.name}
        email={basics.email}
        phoneNumber={basics.phone}
        summaryText={basics.summary}
      />
      <WorkSection workList={work} />
      <EducationSection educationList={education} />
    </StyledPrimaryColumn>
  )
}

export default PrimaryColumn
