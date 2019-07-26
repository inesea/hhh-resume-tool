import axios from 'axios'

const savePdfFile = (data: any, fileName: string) => {
  const blob = new Blob([data], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = `${fileName}.pdf`
  link.click()
}

const generatePdf = () =>
  axios.get('http://localhost:5052/pdf', {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf'
    }
  })

const exportToPdf = (fileName: string) => {
  generatePdf()
    .then(response => {
      savePdfFile(response.data, fileName)
    })
    .catch(error => {
      console.log({ error })
      alert(error.message)
    })
}

export default exportToPdf
