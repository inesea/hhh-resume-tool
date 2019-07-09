import axios from 'axios'

const savePdfFile = (data: any) => {
  const blob = new Blob([data], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = `resume.pdf`
  link.click()
}

const generatePdf = () =>
  axios.get('http://localhost:5052/pdf', {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf'
    }
  })

const exportToPdf = () => {
  generatePdf()
    .then(response => {
      savePdfFile(response.data)
    })
    .catch(error => {
      console.log({ errorResult: error })
    })
}

export default exportToPdf
