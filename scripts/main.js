import CountryData from './CountryData.js'
import debounce from './utils.js'

const datas = []
let prev = ''

class App {
  static init() {
    fetch('https://covid19-restapi.herokuapp.com/')
      .then(res => res.json())
      .then(dataArr => {
        document.querySelector('.loader').style.display = 'none'
        dataArr.forEach(data => {
          const cData = new CountryData(
            data.Country,
            data['Total Cases'],
            data['New Cases'],
            data['Total Deaths'],
            data['New Deaths'],
            data['Total Recovered'],
            data['Active Cases'],
            data['Serious/Critical']
          )
          datas.push(cData)
        })
      })
  }

  static searchByCountry() {
    let inputValue = document
      .querySelector('#search')
      .value.toLowerCase()
      .trim()

    if (inputValue === '')
      return (document.querySelector('.results').innerHTML = '')

    const lists = datas.filter(data => {
      let cname = data.name.toLowerCase()
      return cname.includes(inputValue)
    })

    let html = ''
    lists.forEach(data => {
      html += data.html()
    })

    if (html == prev) return

    prev = html
    document.querySelector('.results').innerHTML = html
  }
}

App.init()

document
  .querySelector('#search')
  .addEventListener('keyup', debounce(App.searchByCountry, '500'))
