class CountryData {
  constructor(
    name,
    tcases,
    ncases,
    tdeaths,
    ndeaths,
    trecovered,
    acases,
    serious
  ) {
    this.name = name
    this.tcases = tcases
    this.ncases = ncases
    this.tdeaths = tdeaths
    this.ndeaths = ndeaths
    this.trecovered = trecovered
    this.acases = acases
    this.serious = serious
  }

  html() {
    return `
          <div class="result">
          <table>
          <tr>
              <td>Country</td>
              <td>${this.name}</td>
          </tr>
          <tr>
              <td>Total Cases</td>
              <td>${this.tcases}</td>
          </tr>
          <tr>
              <td>New Cases</td>
              <td>${this.ncases}</td>
          </tr>
          <tr>
              <td>Total Deaths</td>
              <td>${this.tdeaths}</td>
          </tr>
          <tr>
              <td>New Deaths</td>
              <td>${this.ndeaths}</td>
          </tr>
          <tr>
              <td>Total Recovered</td>
              <td>${this.trecovered}</td>
          </tr>
          <tr>
              <td>Active Cases</td>
              <td>${this.acases}</td>
          </tr>
          <tr>
              <td>Serious</td>
              <td>${this.serious}</td>
          </tr>
          </table>
      </div>
            `
  }
}

export default CountryData
