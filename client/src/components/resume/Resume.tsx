import React from 'react'
import styled from 'styled-components'

import ColumnLayout from './columnLayout/ColumnLayout'
import PrimaryColumn from './primaryColumn/PrimaryColumn'
import SecondaryColumn from './secondaryColumn/SecondaryColumn'

import { IResume } from '../../model/Resume'

const StyledResume = styled.div`
  background: white;
  width: 21.5cm;
  height: 28.7cm;
  padding: 0.5cm 0.5cm 0.5cm 1cm;
`

interface IResumeProps {
  resume: IResume
}

const Resume = ({ resume }: IResumeProps) => (
  <StyledResume>
    <ColumnLayout>
      <PrimaryColumn resume={resume} />
      <SecondaryColumn resume={resume} />
    </ColumnLayout>
  </StyledResume>
)

export default Resume
