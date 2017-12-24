import axios from 'axios'

export default function ({ params, store }) {
  return axios
    .get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then(response => {
      window.$nuxt.$loading.start()
      store.commit('add', response.data.results)
    })
}
