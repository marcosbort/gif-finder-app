const apiKey = "ySJ1ITTL4G7OSGU3IbTUFmQWYjpEEtTc"
const limitGifs = 40

export const getGifs = async (keyword) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limitGifs}&offset=0&rating=g&lang=en`

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((Response) => {
      const { data = [] } = Response
      const gif = data.map((image) => {
        const { title, id } = image
        const url = image.images.fixed_height.url
        return { title, id, url }
      })
      return gif
    })
}
