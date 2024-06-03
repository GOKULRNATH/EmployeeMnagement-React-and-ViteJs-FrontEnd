import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080';

// export const listEmployees=()=>{
// return axios.get(REST_API_BASE_URL);
// }
                // OR
export const listEmployees=()=>axios.get(REST_API_BASE_URL);
export const saveEmployee=(employee)=>axios.post(`${REST_API_BASE_URL}/save`,employee);
export const deleteByidemp=(id)=>axios.delete(`${REST_API_BASE_URL}/deletebyid/${id}`);
export const getempById=(id)=>axios.get(`${REST_API_BASE_URL}/getempbyid/${id}`);
export const updateempById=(id,employee)=>axios.put(`${REST_API_BASE_URL}/updatebyid/${id}`,employee);