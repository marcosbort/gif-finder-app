const apiKey = "ySJ1ITTL4G7OSGU3IbTUFmQWYjpEEtTc"
const limitGifs = 40

export const getGifs = async (keyword) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limitGifs}&offset=0&rating=g&lang=en`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((Response) => {
      const { data = [] } = Response
      const gifs = data.map((image) => {
        const { title, id } = image
        const url = image.images.preview_webp.url
        const urlHD = image.images.downsized.url
        return { title, id, url, urlHD }
      })
      return gifs
    })
  }
  
/*
calidad 4
50 kb
const url = image.images.preview_webp.url

calidad 3
maryor calidad (pesado) 100 kb
const url = image.images.fixed_height.url

calidad 2
const urlHD = image.images.downsized.url

calidad 1
(Max calidad) (mas pesado) 5mb - 9mb
const url = image.images.original.url
*/