import React from 'react'
import styled from 'styled-components'

import ExportButton from '../components/exportButton/ExportButton'
import Page1 from '../components/resume/Page1'
import Page2 from '../components/resume/Page2'

import { A4_WIDTH_CM } from '../constants/constants'

import { IResume } from '../model/Resume'

const StyledPreviewPage = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
`

const SomeSpaceBetween = styled.div`
  height: 40px;
`
const PageImitation = styled.div`
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: ${A4_WIDTH_CM + 2}cm;
  margin: 0 auto;
`

interface IPreviewPageProps {
  resume: IResume
}

const PreviewPage = ({ resume }: IPreviewPageProps) => (
  <StyledPreviewPage>
    <ExportButton />

    <PageImitation>
      <Page1 resume={resume} printable={false} />
    </PageImitation>

    <SomeSpaceBetween />

    <PageImitation>
      <Page2 resume={resume} printable={false} />
    </PageImitation>
  </StyledPreviewPage>
)

export default PreviewPage
