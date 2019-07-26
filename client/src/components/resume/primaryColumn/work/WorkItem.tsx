import React from 'react'
import styled from 'styled-components'
import { IWork } from '../../../../model/Resume'
import CalendarIcon from '../../../icons/CalendarIcon'
import LocationIcon from '../../../icons/LocationIcon'

import * as styles from '../../../../styles/commonStyles'

const StyledWorkItem = styled.div`
  padding-bottom: 20px;
`
const Position = styled.div`
  font-weight: bold;
`
const LineContainer = styled.div`
  display: flex;
  align-items: left;
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
const List = styled.ul`
  margin-top: 6px;
  list-style-position: outside;
`
const Highlight = styled.li``

interface IWorkItemProps {
  item: IWork
}

const WorkItem = ({ item }: IWorkItemProps) => (
  <StyledWorkItem>
    <Position>{item.position}</Position>
    <LineContainer>
      <Company>{item.name}</Company>
      <LocationIcon />
      <Location>{item.location}</Location>
      <CalendarIcon />
      <Dates>{`${item.startDate} - ${item.endDate}`}</Dates>
    </LineContainer>
    <List>
      {item.highlights.map((highlight, index) => (
        <Highlight key={`${index}-${highlight}`}>{highlight}</Highlight>
      ))}
    </List>
  </StyledWorkItem>
)

export default WorkItem
