import Markets from "../../components/combocoin/Markets"
import Trending from "../../components/combocoin/Trending"

const CryptoHome = () => {
  return (
    <div className="wrapper-container">
      <Trending />
      <Markets />
    </div>
  )
}

export default CryptoHome