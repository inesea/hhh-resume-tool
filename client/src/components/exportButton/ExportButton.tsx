import React from 'react'
import styled from 'styled-components'
import exportToPdf from './exportToPdf'

const StyledButton = styled.div`
  padding: 20px 0 30px 0;
  width: 100px;
  margin: 0 auto;
`

const ExportButton = () => (
  <StyledButton>
    <button
      type="button"
      onClick={exportToPdf}
      style={{
        backgroundColor: '#E8E9E9',
        height: '40px',
        width: '100px',
        borderRadius: '2px'
      }}
    >
      Save As PDF
    </button>
  </StyledButton>
)

export default ExportButton
