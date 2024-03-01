const getTokenConfig = () => {
  return{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

export default getTokenConfig
