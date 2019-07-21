import React from 'react'
import styled from 'styled-components'
import { IWork } from '../../../../model/Resume'
import CalendarIcon from '../../../../icons/CalendarIcon'
import LocationIcon from '../../../../icons/LocationIcon'

import * as styles from '../../../../styles/commonStyles'

const StyledWorkItem = styled.div`
  padding-bottom: 30px;
`
const Position = styled.div`
  font-weight: bold;
`
const LineContainer = styled.div`
  display: flex;
  align-items: left;
  padding-bottom: 5px;
`

const Company = styled.div`
  font-weight: bold;
  color: ${styles.text.color.highlight};
  margin-right: 5px;
`

const Location = styled.div`
  margin-right: 8px;
  color: ${styles.text.color.secondary};
`
const Dates = styled.div`
  margin-right: 7px;
  font-style: italic;
  color: ${styles.text.color.secondary};
`
const Highlight = styled.li`
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
      <LocationIcon />
      <Location>{item.location}</Location>
      <CalendarIcon />
      <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>
    </LineContainer>
    {item.highlights.map(highlight => (
      <Highlight>{highlight}</Highlight>
    ))}
  </StyledWorkItem>
)

export default WorkItem
