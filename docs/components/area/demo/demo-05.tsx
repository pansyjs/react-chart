import React, { useState, useEffect } from 'react';
import { Area } from '@pansy/react-charts';
import { AreaConfig } from '@pansy/react-charts/es/area';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: AreaConfig = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    legend: { position: 'right-top' }
  };

  return <Area {...config} />;
};
