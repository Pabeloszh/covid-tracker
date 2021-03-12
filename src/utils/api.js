import axios from "axios";

export default {
  getSummary: () => {
    return axios.get("/summary");
  },
  getChartData: (CountryAbbrev) => {
    const todayString = new Date().toISOString().split("T")[0];

    return axios.get(
      `/country/${CountryAbbrev}?to=${todayString}T00:00:00Z`
    );
  },
};
