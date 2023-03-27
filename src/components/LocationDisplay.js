import React from "react";
import { useLocation } from "react-router-dom";

function LocationDisplay() {
  const { pathname } = useLocation();

  return (
    <div data-testid="location-display">
      Current Path: {pathname}
    </div>
  );
}

export default LocationDisplay;
