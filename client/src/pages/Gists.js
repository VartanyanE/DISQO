import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../styles/gists.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Gists() {
  const [data, setData] = useState([{}]);
  const [createdAtState, setCreatedAtState] = useState([]);
  const [numberOfGists, setNumberOfGists] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/gists?per_page=25", {
      headers: {
        Authorization: "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",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [createdAtState]);

  const loopDates = async () => {
    const createdAt = [];
    const gists = [];
    for (let i = 0; i < data.length; i += 5) {
      createdAt.push(data[i].created_at);
    }

   
    setCreatedAtState(createdAt);
    setNumberOfGists(gists);
    
  };

 

  const chartData = {
    labels: [
      createdAtState[0],
      createdAtState[1],
      createdAtState[2],
      createdAtState[3],
    ],
    datasets: [
      {
        data: [50, 100, 200, 300, 400, 500],
        label: "Gists Created",
      },
    ],
  };

  const chartData2 = {
    labels: [
      createdAtState[0],
      createdAtState[1],
      createdAtState[2],
      createdAtState[3],
    ],
    datasets: [
      {
        data: [50, 100, 200, 300, 400, 500],
        label: "Files Per Gist",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
  };

  const options2 = {
    title: {
      display: true,
      text: "World population per region (in millions)",
    },
  };

  return (
    <div className="container">
      <div className="mainTitle">Notepad Application </div>
      <div className="card-gists">
        {" "}
        <div className="gist-chart">
          <Line data={chartData} options={options} />
        </div>
        <div className="stats-button">
          <Link to="/">
            <button className="close-stats-btn">Close Stats</button>
          </Link>
        </div>
        <div className="load-btn">
          <button className="load-more-btn" onClick={loopDates}>
            Load More
          </button>
        </div>
        <div className="gist-chart-files">
          <Line data={chartData2} options={options2} />
        </div>
        <div className="load-btn-2">
          <button className="load-more-btn-2" onClick={loopDates}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gists;
