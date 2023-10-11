import React from 'react';
import { Data } from '../Data';

const ModeComponent = () => {
  function calculateMode(arr) {
    const frequencyMap = {};
    arr.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let maxFrequency = 0;
    let mode = null;

    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        mode = value;
      }
    }

    // Format mode to 3 decimal places
    if (mode !== null && !isNaN(mode)) {
      mode = parseFloat(mode).toFixed(3);
    }

    return mode;
  }

  const properties = [
    "Alcohol",
    "Malic Acid",
    "Ash",
    "Alcalinity of ash",
    "Color intensity",
    "Flavanoids",
    "Hue",
    "Magnesium",
    "Nonflavanoid phenols",
    "OD280/OD315 of diluted wines",
    "Proanthocyanins",
    "Total phenols",
    "Unknown",
  ];

  const modeArray = properties.map((property) => calculateMode(Data.map((item) => item[property])));

  console.log("modeArray", modeArray);

  return (
    <div>
      <table id="customers">
        <thead>
          {/* <tr>
            <th>Measure</th>
            {properties.map((property, index) => (
              <th key={index}>{property}</th>
            ))}
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td key="mode">Flavanoids Mode</td>
            {modeArray.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModeComponent;
