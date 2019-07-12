import React from 'react'
import styled from 'styled-components'
import { IEducation } from '../../../../model/Resume'

const StyledEducationItem = styled.div`
  padding-bottom: 30px;
`
const Degree = styled.div`
  font-weight: bold;
`
const LineContainer = styled.div`
  display: flex;
  padding-bottom: 5px;
`
const Institution = styled.div`
  font-weight: bold;
  color: steelBlue;
  float: left;
  margin-right: 7px;
`
const Location = styled.div`
  margin-right: 7px;
`
const Dates = styled.div`
  margin-right: 7px;
  font-style: italic;
`

interface IEducationItemProps {
  key: string
  item: IEducation
}

const EducationItem = ({ key, item }: IEducationItemProps) => (
  <StyledEducationItem key={key}>
    <Degree>{`${item.studyType} ${item.area}`}</Degree>
    <LineContainer>
      <Institution>{item.institution}</Institution>
      <Location>{`(${item.location})`}</Location>
      <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>
    </LineContainer>
  </StyledEducationItem>
)

export default EducationItem
