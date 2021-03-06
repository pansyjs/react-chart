import React, { useState, useEffect } from 'react';
import { Column } from '@pansy/react-charts';
import { ColumnConfig } from '@pansy/react-charts/es/column';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: ColumnConfig = {
    data,
    xField: '城市',
    yField: '销售额',
    xAxis: { label: { autoRotate: false } },
    scrollbar: { type: 'horizontal' }
  };

  return <Column {...config} />;
};
