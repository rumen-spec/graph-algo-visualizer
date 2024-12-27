import {PathFindingProvider} from "./Context/PathFindingContext.tsx";
import {TileProvider} from "./Context/TileContext.tsx";
import {SpeedProivder} from "./Context/speedContext.tsx";
import {Grid} from "./Components/grid.tsx";

function App() {

  return (
      <PathFindingProvider>
          <TileProvider>
              <SpeedProivder>
          <div className="h-screen w-screen flex flex-col">
            <Grid/>
          </div>
              </SpeedProivder>
          </TileProvider>
    </PathFindingProvider>
  )
}

export default App
