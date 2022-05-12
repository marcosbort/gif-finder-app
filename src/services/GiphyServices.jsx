const apiKey = "ySJ1ITTL4G7OSGU3IbTUFmQWYjpEEtTc"
const limitGifs = 30

export const getGifs = async (keyword) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limitGifs}&offset=0&rating=g&lang=en`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      const gifs = data.map((image) => {
        const { title, id } = image
        const url = image.images.preview_webp.url
        const urlHD = image.images.downsized.url
        return { title, id, url, urlHD }
      })
      return gifs
    })
}

export const getGifById = async (keyword, id) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limitGifs}&offset=0&rating=g&lang=en`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      const gifs = data.map((image) => {
        const { title, id } = image
        const url = image.images.preview_webp.url
        const urlHD = image.images.downsized.url
        return { title, id, url, urlHD }
      })
      return gifs
    })
}

export const getTrendingGifs = async () => {
  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limitGifs}&rating=g`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      const trendingGifs = data.map((image) => {
        const { title, id } = image
        const url = image.images.preview_webp.url
        const urlHD = image.images.downsized.url
        return { title, id, url, urlHD }
      })
      return trendingGifs
    })
}

export const getTrendingSearches = async () => {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      return data
    })
}
