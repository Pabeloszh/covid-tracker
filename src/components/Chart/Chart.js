import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import api from "../../utils/api";
import {AbbrevContext} from "../../context/AbbrevContext"

const Chart = () => {
    const [monthly, setMonthly] = useState([]);
    const [dataChartMonthly, setMonthlyData] = useState({});
    const [abbrev, setAbbrev] = useContext(AbbrevContext)

    var beggining = new Date(2020, 1, 2);
    const today = new Date();

    const getMonthlyData = (data) => {
        let array = [];
        let monthDifference =
        today.getMonth() -
        beggining.getMonth() +
        12 * (today.getFullYear() - beggining.getFullYear()) +
        1;
        while (monthDifference > 0) {
        let loopMonth = beggining.toISOString().split("T")[0];
        let monthlyData = data.find((x) => x.Date === `${loopMonth}T00:00:00Z`);
        array.push(monthlyData);
        beggining = new Date(
            beggining.getFullYear(),
            beggining.getMonth() + 1,
            2
        );
        monthDifference--;
        }
        setMonthly(array);
    };

    useEffect(() => {
        if (
        abbrev !== "" &&
        abbrev !== "GL" &&
        abbrev !== "AQ" &&
        abbrev !== "-99"
        ) {
        (async () => {
            const res = await api.getChartData(abbrev);
            getMonthlyData(res.data);
        })();
        }
    }, [abbrev]);

    useEffect(() => {
        const datasetData = {
        labels: monthly.map((date) => date.Date.split("T")[0]),
        confirmed: monthly.map((con) => con.Confirmed),
        deaths: monthly.map((dead) => dead.Deaths),
        recovered: monthly.map((rec) => rec.Recovered),
        };

        setMonthlyData({
        labels: datasetData.labels,
        datasets: [
            {
            label: "Confirmed",
            backgroundColor: "rgb(135, 135, 135, 0.2)",
            borderColor: "rgb(135, 135, 135)",

            data: datasetData.confirmed,
            },
            {
            label: "Deaths",
            backgroundColor: "rgb(38, 38, 38, 0.2)",
            borderColor: "rgb(38, 38, 38)",
            data: datasetData.deaths,
            },
            {
            label: "Recovered",
            backgroundColor: "rgb(255, 255, 255, 0.2)",
            borderColor: "rgb(255,255,255)",
            data: datasetData.recovered,
            },
        ],
        });
    }, [monthly]);
    return (
        <div>
            <h2>Monthly Cases Chart</h2>
            <Line
            data={dataChartMonthly}
            options={{
                maintainAspectRatio: false,
                scales: {
                xAxes: [
                    {
                    gridLines: {
                        display: true,
                        color: "#262626",
                    },
                    },
                ],
                yAxes: [
                    {
                    gridLines: {
                        display: true,
                        color: "#262626",
                    },
                    },
                ],
                },
            }}
            />
        </div>
    )
}
export default Chart
