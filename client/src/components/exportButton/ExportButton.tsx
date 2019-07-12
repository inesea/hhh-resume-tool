import React from 'react'
import exportToPdf from './exportToPdf'

const ExportButton = () => {
  return (
    <button type="button" onClick={exportToPdf}>
      Print
    </button>
  )
}

export default ExportButton
