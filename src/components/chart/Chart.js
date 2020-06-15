import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = () => {
  const [chart, setChart] = React.useState(null);
  React.useEffect(() => {
    setChart(<TradingViewWidget width="100%" details={true} symbol="XAUHKD" />);
  }, []);
  return <>{chart || '' }</>;
};

export default Chart;
