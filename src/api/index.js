import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.56.100:8080/api',
})

export const getAllMovies = () => api.get(`/exams`)
export const getMovieByName = name => api.get(`/exam/${name}`)

const apis = {
    getAllMovies,
    getMovieByName,
}

export default apis