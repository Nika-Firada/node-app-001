const axios = require("axios");
const Table = require("tty-table");
const { config, options } = require("./config");
// https://api.covidtracking.com/v1/states/ca/info.json
module.exports = async function (state) {
  try {
    const response = await axios.get(
      `https://api.covidtracking.com/v1/states/${state}/info.json`,
      config
    );
    let header = [
      {
        value: "State",
        headerColor: "cyan",
        color: "white",
        align: "left",
        width: 10,
      },
      {
        value: "Web",
        color: "red",
        width: 50,
      },
    ];

    let data = [
      {
        State: response.data.state,
        Web: response.data.covid19Site,
      },
    ];

    const table = Table(header, data, options);
    const out = table.render();
    console.log(out);
  } catch (error) {
    console.log(error);
  }
};