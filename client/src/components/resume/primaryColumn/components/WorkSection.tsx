import React from 'react'

import MainSectionWrapper from './MainSectionWrapper'
import PrimarySectionHeading from './PrimarySectionHeading'
import WorkItem from './WorkItem'
import { IWork } from '../../../../model/Resume'

interface IWorkSectionProps {
  workList: IWork[]
}

const WorkSection = ({ workList }: IWorkSectionProps) => (
  <MainSectionWrapper>
    <PrimarySectionHeading>Experience</PrimarySectionHeading>
    {workList.map(workItem => (
      <WorkItem
        key={`${workItem.position}-${workItem.startDate}`}
        item={workItem}
      />
    ))}
  </MainSectionWrapper>
)

export default WorkSection
