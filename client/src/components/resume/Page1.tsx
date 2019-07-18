import React from 'react'
import styled from 'styled-components'

import ColumnLayout from './columnLayout/ColumnLayout'
import PrimaryColumn from './primaryColumn/PrimaryColumn'
import SecondaryColumn from './secondaryColumn/SecondaryColumn'

import { IResume } from '../../model/Resume'
import { A4_WIDTH_CM, A4_HEIGHT_CM } from '../../constants/constants'

const StyledPage1 = styled.div`
  width: ${A4_WIDTH_CM}cm;
  height: ${A4_HEIGHT_CM + 2}cm;
  padding: 0 0.5cm 0 1.5cm;
`

interface IPage1Props {
  resume: IResume
  printable: boolean
}

const Page1 = ({ resume, printable }: IPage1Props) => (
  <StyledPage1>
    <ColumnLayout>
      <PrimaryColumn resume={resume} page={1} printable={printable} />
      <SecondaryColumn resume={resume} page={1} printable={printable} />
    </ColumnLayout>
  </StyledPage1>
)

export default Page1
