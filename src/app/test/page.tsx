'use client'
import * as React from "react";
import { render } from "react-dom";
import useRecorder from "../components/useRecorder";

export default function Test() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder() as any;
  return (
    <div>
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording} style={{ marginRight: 1rem }}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
    </div>
  );
}
