import React, { useEffect, useRef } from "react";

import "./styles.css";

import initAnimation from "./animation";

export default function Rain() {

    const canvasRef = useRef(null);

    useEffect(() => canvasRef && initAnimation(canvasRef.current));

    return <canvas id="canvas-rain" ref={canvasRef}></canvas>;
}