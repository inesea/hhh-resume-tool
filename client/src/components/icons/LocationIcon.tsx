import React from 'react'
import styled from 'styled-components'

import LocationSvg from '../../assets/icons/location.svg'

const IconContainer = styled.div`
  padding: 0 2px 0 2px;
`

const LocationIcon = () => {
  return (
    <IconContainer>
      <div>
        <LocationSvg />
      </div>
    </IconContainer>
  )
}

export default LocationIcon
