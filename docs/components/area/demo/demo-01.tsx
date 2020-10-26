import React, { useState, useEffect } from 'react';
import { Area } from '@pansy/react-charts';
import { AreaConfig } from '@pansy/react-charts/es/area';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: AreaConfig = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 }
  };

  return <Area {...config} />;
};
