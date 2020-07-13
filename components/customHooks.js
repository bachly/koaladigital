import React, { useState, useEffect, useRef } from "react";

/**
 * Custom hook for setInterval()
 * From: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 **/

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(
    function rememberTheLatestCallback() {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  useEffect(
    function setupTheInterval() {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },
    [delay]
  );
}