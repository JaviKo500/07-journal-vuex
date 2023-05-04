import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demos-e9141-default-rtdb.firebaseio.com'
})


export default journalApi