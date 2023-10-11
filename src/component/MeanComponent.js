import React from 'react';
import { Data } from '../Data';

const MeanComponent = () => {
  function calculateMean(arr) {
    const sum = arr.reduce((total, value) => total + value, 0);
    return (sum / arr.length).toFixed(3); // Format the mean value to 3 decimal places
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

  const meanArray = properties.map((property) => calculateMean(Data.map((item) => item[property])));

  console.log("meanArray", meanArray);

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Measure</th>
            {properties.map((property, index) => (
              <th key={index}>{property}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {meanArray.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MeanComponent;
