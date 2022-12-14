/* import { ClockLoader } from "react-spinners"; */
import ClockLoader from "react-spinners/ClockLoader";

export const LoaderClock = () => {
    
  return (
    <div className="loader__style">
      <ClockLoader
        color= "yellow"
        height={4}
        width = {100}
        size={50}
        speedMultiplier = {1}
        cssOverride={{}}
      />
    </div>
  )
    
}

export default LoaderClock;