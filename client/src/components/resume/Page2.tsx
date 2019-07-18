import React from 'react'
import styled from 'styled-components'

import ColumnLayout from './columnLayout/ColumnLayout'
import PrimaryColumn from './primaryColumn/PrimaryColumn'
import SecondaryColumn from './secondaryColumn/SecondaryColumn'

import { IResume } from '../../model/Resume'
import { A4_WIDTH_CM, A4_HEIGHT_CM } from '../../constants/constants'

const StyledPage2 = styled.div`
  width: ${A4_WIDTH_CM}cm;
  height: ${A4_HEIGHT_CM + 2}cm;
  padding: 0 0.5cm 0 1.5cm;
  height: 100%;
`

interface IPage2Props {
  resume: IResume
  printable: boolean
}

const Page2 = ({ resume, printable }: IPage2Props) => (
  <StyledPage2>
    <ColumnLayout>
      <PrimaryColumn resume={resume} page={2} printable={printable} />
      <SecondaryColumn resume={resume} page={2} printable={printable} />
    </ColumnLayout>
  </StyledPage2>
)

export default Page2
