import React from 'react'
import styled from 'styled-components'
import PrimarySectionHeading from './PrimarySectionHeading'
import WorkItem from './WorkItem'
import { IWork } from '../../../model/Resume'

const StyledWorkSection = styled.div`
  padding-top: 50px;
  margin-bottom: 40px;
`

interface IWorkSectionProps {
  work: IWork[]
}

const WorkSection = ({ work }: IWorkSectionProps) => (
  <StyledWorkSection>
    <PrimarySectionHeading>Experience</PrimarySectionHeading>
    {work.map(workItem => (
      <WorkItem
        key={`${workItem.position}-${workItem.startDate}`}
        item={workItem}
      />
    ))}
  </StyledWorkSection>
)

export default WorkSection
