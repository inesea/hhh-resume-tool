import React from 'react'

import ExportButton from '../components/exportButton/ExportButton'
import PreviewContainer from '../components/previewContainer/PreviewContainer'
import Resume from '../components/resume/Resume'

import { IResume } from '../model/Resume'

interface IPreviewPageProps {
  resume: IResume
}

const PreviewPage = ({ resume }: IPreviewPageProps) => (
  <>
    <ExportButton />
    <PreviewContainer>
      <Resume resume={resume} />
    </PreviewContainer>
  </>
)

export default PreviewPage
