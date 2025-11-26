import axios from 'axios'
const API_BASE = 'https://accident-severity-app.onrender.com'
export async function predictSeverity(payload) {
    const resp = await axios.post(`${API_BASE}/api/predict`, payload)
    return resp.data

}
