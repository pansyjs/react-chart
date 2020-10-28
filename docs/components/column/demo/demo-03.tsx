import React from 'react';
import { Column } from '@pansy/react-charts';
import { ColumnConfig } from '@pansy/react-charts/es/column';

const data = [
  { type: '家具家电', sales: 38 },
  { type: '粮油副食', sales: 52 },
  { type: '生鲜水果', sales: 61 },
  { type: '美容洗护', sales: 145 },
  { type: '母婴用品', sales: 48 },
  { type: '进口食品', sales: 38 },
  { type: '食品饮料', sales: 38 },
  { type: '家庭清洁', sales: 38 }
];

export default () => {
  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    seriesField: '',
    color: ({ type }) => {
      return type === '美容洗护' ? 'red' : 'green';
    },
    legend: false,
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  };

  return <Column {...config} />;
};
