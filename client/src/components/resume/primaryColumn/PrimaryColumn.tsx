import React from 'react'
import styled from 'styled-components'

import MainDetail from './main/MainDetail'
import WorkSection from './work/WorkSection'
import EducationSection from './education/EducationSection'

import { IResume } from '../../../model/Resume'

const StyledForPage1 = styled.div`
  padding-top: 130px;
`
const StyledForPage2 = styled.div`
  padding-top: 140px;
`

interface IPrimaryColumnProps {
  resume: IResume
  page: number
  printable: boolean
}

const PrimaryColumn = ({ resume, page }: IPrimaryColumnProps) => {
  const { basics, work, education } = resume
  return (
    <>
      {page === 1 && (
        <StyledForPage1>
          <MainDetail
            name={basics.name}
            email={basics.email}
            phoneNumber={basics.phone}
            summaryText={basics.summary}
          />
          <WorkSection
            workList={work.filter(workItem => workItem.page === 1)}
          />
        </StyledForPage1>
      )}

      {page === 2 && (
        <StyledForPage2>
          <WorkSection
            displayHeading={false}
            workList={work.filter(workItem => workItem.page === 2)}
          />
          <EducationSection educationList={education} />
        </StyledForPage2>
      )}
    </>
  )
}

export default PrimaryColumn
