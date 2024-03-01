import axios from "axios"
import { useState } from "react"

const useFetch = () => {
  const [apiData, setApiData] = useState()

  const getApi = (url, getConfig={}) => {
    axios.get(url, getConfig)
      .then(res => setApiData(res.data))
      .catch(err => console.log(err))
  }
  return [apiData, getApi]
}

export default useFetch
