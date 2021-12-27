import axios from 'axios'

const documents = axios.create({
    baseURL: 'https://cogm-documents.s3.amazonaws.com'
})

const getDocument = path => documents.get(path)

const api = {
    'getDocument': getDocument
}

export default api