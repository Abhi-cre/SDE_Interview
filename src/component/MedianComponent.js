import React from 'react';
import { Data } from '../Data';

const MedianComponent = () => {
  function calculateMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
      const median1 = sortedArr[middleIndex - 1];
      const median2 = sortedArr[middleIndex];
      return ((median1 + median2) / 2).toFixed(3); // Format median to 3 decimal places
    } else {
      return sortedArr[middleIndex].toFixed(3); // Format median to 3 decimal places
    }
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

  const medianArray = properties.map((property) => calculateMedian(Data.map((item) => item[property])));

  console.log("medianArray", medianArray);

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
            <td key="median">Flavanoids Median</td>
            {medianArray.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MedianComponent;
