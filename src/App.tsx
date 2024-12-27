import {PathFindingProvider} from "./Context/PathFindingContext.tsx";
import {TileProvider} from "./Context/TileContext.tsx";
import {SpeedProvider} from "./Context/speedContext.tsx";
import {Grid} from "./Components/grid.tsx";
import {useRef} from "react";

function App() {
    const isVisualizationRunningRef = useRef<boolean>(false)

  return (
      <PathFindingProvider>
          <TileProvider>
              <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
          </div>
              </SpeedProvider>
          </TileProvider>
    </PathFindingProvider>
  )
}

export default App
