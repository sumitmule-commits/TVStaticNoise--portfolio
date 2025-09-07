import React from "react";
import TVStaticNoise from "./TVStaticNoise";
import UnderConstruction from "./Construction";

export default function App() {
  return (
    <div>
      <TVStaticNoise />
      <div className="fade-in-slow">
        <UnderConstruction />
      </div>
    </div>
  );
}
