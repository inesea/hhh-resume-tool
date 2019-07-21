import React from 'react'
import styled from 'styled-components'

import CalendarSvg from './calendar.svg'

const IconContainer = styled.div`
  padding: 0 4px 0 2px;
`

const CalendarIcon = () => {
  return (
    <IconContainer>
      <div>
        <CalendarSvg />
      </div>
    </IconContainer>
  )
}

export default CalendarIcon
