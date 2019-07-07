import React from 'react'
import styled from 'styled-components'
import { IWork } from '../../../model/Resume'

const StyledWorkItem = styled.div`
  padding-bottom: 30px;
`
const Position = styled.div`
  font-weight: bold;
`
const LineContainer = styled.div`
  display: flex;
  padding-bottom: 5px;
`
const Company = styled.div`
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
const Highlight = styled.div`
  padding-left: 30px;
`

interface IWorkItemProps {
  key: string
  item: IWork
}

const WorkItem = ({ key, item }: IWorkItemProps) => (
  <StyledWorkItem key={key}>
    <Position>{item.position}</Position>
    <LineContainer>
      <Company>{item.name}</Company>
      <Location>{`(${item.location})`}</Location>
      <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>
    </LineContainer>
    {item.highlights.map(highlight => (
      <Highlight>{`* ${highlight}`}</Highlight>
    ))}
  </StyledWorkItem>
)

export default WorkItem
