import { useSelector } from "react-redux";

export const Coin=()=> {
  const count = useSelector((state) => state.counter.count) ;
  const themeTextColor = useSelector((state) => state.theme.color) ;

  return (
    <div>
{/* using redux we can simply pass the value of count in Coin File */}
      <h4 style={{color: themeTextColor}}>Coin(Redux-Toolkit): {count}</h4>
    </div>
  )
}

