import React from "react";
import BasicOfMotion from "./pages/BasicOfMotion.js";
import Gesture from "./pages/Gesture.js";
import AnimatePresenceStack from "./examples/AnimatePresenceStack.js";
import BoxAnimation from "./examples/BoxAnimation.js";
import AnimateSequene from "./examples/AnimateSequene.js";
import ColorInterpolation from "./examples/ColorInterpolation.js";
import ColorsKeyFrameAnimation from "./examples/ColorsKeyFrameAnimation.js";
import ColorsSwitchingBetweenStates from "./examples/ColorsSwitchingBetweenStates.js";
import CyclingParentAndChild from "./examples/CyclingParentAndChild.js";
import CycleThroughStates from "./examples/CycleThroughStates.js";
import Drag from "./examples/Drag.js";
import Drag3d from "./examples/drag3d.js";

const App = () => {
  return (
    <div>
      {/* <BasicOfMotion /> */}
      {/* <Gesture /> */}
      {/* Examples */}
      {/* <AnimatePresenceStack /> */}
      {/* <BoxAnimation /> */}
      {/* <AnimateSequene /> */}
      {/* <ColorInterpolation />
       */}
      {/* <ColorsKeyFrameAnimation /> */}
      {/* <ColorsSwitchingBetweenStates /> */}
      {/* <CyclingParentAndChild /> */}
      {/* <CycleThroughStates /> */}
      {/* <Drag /> */}
      <Drag3d />
    </div>
  );
};

export default App;
