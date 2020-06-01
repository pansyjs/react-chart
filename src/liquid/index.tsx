import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { deepMix } from '@antv/util';
import { Liquid as G2plotLiquid, LiquidConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../common/hooks/use-chart';
import ErrorBoundary from '../common/components/error-boundary';

export interface LiquidConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotLiquid | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const defaultConfig: Partial<LiquidConfig> = {};

const LiquidChart = forwardRef((props: LiquidConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotLiquid, LiquidConfig>(G2plotLiquid, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current
  }));
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

LiquidChart.defaultProps = G2plotLiquid.getDefaultOptions();
LiquidChart.defaultProps = deepMix({}, G2plotLiquid.getDefaultOptions(), defaultConfig);

export default LiquidChart;
