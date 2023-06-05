const axios = require("axios");
const Table = require("tty-table");
const {config, options} = require('./config');
// https://api.covidtracking.com/v1/states/info.json

module.exports = async function () {
  try {
    const response = await axios.get(
      "https://api.covidtracking.com/v1/states/info.json",
      config
    );
    let header = [
      {
        value: "Init",
        headerColor: "cyan",
        color: "white",
        align: "left",
        width: 10,
      },
      {
        value: "State",
        color: "red",
        width: 50,
      },
    ];

    let data = response.data.map((stateInfo) => ({
      Init: stateInfo.state,
      State: stateInfo.name,
    }));

    const table = Table(header, data, options);
    const out = table.render();
    console.log(out);
  } catch (error) {
    console.log(error);
  }
};
