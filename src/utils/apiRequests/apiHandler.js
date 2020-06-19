import axios from 'axios'

const getLinksFromAPI = async () =>{
  
  let response = await  axios.get("https://5eeaa9c5b13d0a00164e4acf.mockapi.io/challenge/link");   

  return response.data;
}

export { getLinksFromAPI }