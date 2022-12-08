import { useSelector } from "react-redux";

export const Coin=()=> {
  const count = useSelector((state) => state.counter.count) ;
  return (
    <div>
{/* using redux we can simply pass the value of count in Coin File */}
      <h4 style={{color: "magenta"}}>Coin(Redux-Toolkit): {count}</h4>
    </div>
  )
}

