import CoinDetail from "../../components/combocoin/CoinDetail"
import HistoryChart from "../../components/combocoin/HistoryChart"

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetail />
    </div>
  )
}

export default CryptoDetail