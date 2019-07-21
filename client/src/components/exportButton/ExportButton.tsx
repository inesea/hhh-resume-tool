import React from 'react'
import styled from 'styled-components'
import exportToPdf from './exportToPdf'

const ButtonContainer = styled.div`
  padding: 20px 0 30px 0;
  width: 100px;
  margin: 0 auto;
`

const Button = styled.button`
  background-color: #e8e9e9;
  height: 40px;
  width: 100px;
  border-radius: 2px;
`

interface IExportButtonProps {
  fileName: string
}

const ExportButton = ({ fileName }: IExportButtonProps) => (
  <ButtonContainer>
    <Button type="button" onClick={() => exportToPdf(fileName)}>
      Save As PDF
    </Button>
  </ButtonContainer>
)

export default ExportButton
