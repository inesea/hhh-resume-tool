import React from 'react'

import MainSectionWrapper from '../main/MainSectionWrapper'
import PrimarySectionHeading from '../PrimarySectionHeading'
import EducationItem from './EducationItem'
import { IEducation } from '../../../../model/Resume'

interface IEducationSectionProps {
  educationList: IEducation[]
}

const EducationSection = ({ educationList }: IEducationSectionProps) => (
  <MainSectionWrapper>
    <PrimarySectionHeading>Education</PrimarySectionHeading>
    {educationList.map(item => (
      <EducationItem key={`${item.studyType}-${item.area}`} item={item} />
    ))}
  </MainSectionWrapper>
)

export default EducationSection
