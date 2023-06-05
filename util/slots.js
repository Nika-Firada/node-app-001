const axios = require("axios");
const Table = require("tty-table");
const { config, options } = require("./config");
// https://api.covidtracking.com/v1/states/ca/20200501.json
module.exports = async function (state, date) {
  try {
    const response = await axios.get(
      `https://api.covidtracking.com/v1/states/${state}/${date}.json`,
      config
    );
    let header = [
      {
        value: "State",
        headerColor: "cyan",
        color: "white",
        align: "left",
        width: 15,
      },
      {
        value: "Death",
        color: "red",
        width: 23,
      },
      {
        value: "Date",
        color: "red",
        width: 23,
      },
      {
        value: "Positive",
        color: "red",
        width: 23,
      },
      {
        value: "Total",
        color: "red",
        width: 23,
      },
    ];
    let data = [
      {
        State: response.data.state,
        Death: response.data.death,
        Date: response.data.date,
        Positive: response.data.positive,
        Total: response.data.totalTestResults,
      },
    ];

    const table = Table(header, data, options);
    const out = table.render();
    console.log(out);
  } catch (error) {
    console.log(error);
  }
};