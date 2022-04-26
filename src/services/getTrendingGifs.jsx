const apiKey = "ySJ1ITTL4G7OSGU3IbTUFmQWYjpEEtTc"

export const getTrendingGifs = async (keyword) => {
  const apiURL = `https://api.giphy.com/v1/trending/seraches?api_key=${apiKey}`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((Response) => {
      const { data = [] } = Response
      return data
    })
}
