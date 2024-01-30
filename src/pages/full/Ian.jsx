import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import calen from "../../assets/svg/calen.svg";

import ian from "../../assets/mp4/ian.mp4";

export default function Ian() {
  const [videoPaused, setVideoPaused] = useState(false);
  const [videoElement, setVideoElement] = useState(null);

  const toggleVideo = () => {
    console.log(videoElement);
    console.log(videoElement.paused);

    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        console.log("play");
        setVideoPaused(true);
      } else {
        videoElement.pause();
        console.log("pause");
        setVideoPaused(false);
      }
    }
  };

  return (
    <dix className="main">
      {/* Intro*/}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content" style={{ marginBottom: "1rem" }}>
          <h2 className="h2">meet:</h2>
          <h1 className="h1">Ian Mizer</h1>
          <h3 className="h3">a.k.a. Steven Rogers</h3>
        </div>
        <div
          className="horizontal-content"
          style={{
            border: "1px solid red",
            padding: "2rem",
            gap: "2rem",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <div
            className="vertical-content"
            style={{ border: "1px solid yellow", padding: "2rem" }}
          >
            <video ref={(el) => setVideoElement(el)} className="video">
              <source src={ian} type="video/mp4" />
            </video>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleVideo();
              }}
              style={{ fontSize: "1.5rem" }}
            >
              {videoPaused ? <FaPlay /> : <FaPause />}
            </button>
          </div>
          <div
            className="vertical-content"
            style={{ border: "1px solid green", padding: "1rem" }}
          >
            <div
              className="vertical-content"
              style={{
                border: "1px solid white",
                marginBottom: "2rem",
                padding: "1rem",
              }}
            >
              <h1 className="h1">icon</h1>
            </div>
            <div
              className="vertical-content"
              style={{
                border: "1px solid purple",
                marginBottom: "2rem",
                padding: "1rem",
              }}
            >
              <h1 className="h1">Score</h1>
              <h2 className="h2">LinkedIn</h2>
              <h2 className="h2">Github</h2>
              <h2 className="h2">current skills</h2>
              <h2 className="h2">future skills</h2>
            </div>
            <div className="vertical-content">
              <span
                className="emoji-container"
                style={{ marginBottom: "1rem" }}
              >
                <img src={calen} className="emoji-2" alt="calen" />
                Meet with me
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Work Experience */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content">
          <h1 className="h1">Work Experience</h1>
          <div
            className="horizontal-content"
            style={{
              border: "1px solid blue",
              padding: "1.5rem",
              width: "100%",
            }}
          >
            <div
              className="vertical-content"
              style={{
                alignItems: "start",
                justifyContent: "start",
                textAlign: "left",
              }}
            >
              <h1 className="h1">Job 1</h1>
              <h2 className="h2">Job Title</h2>
              <h3 className="h3">Job Duration</h3>
            </div>
            <div className="vertical-content">
              <h3 className="h3">Job Description</h3>
              <h3 className="h3">Job Salary</h3>
            </div>
            <div className="vertical-content">
              <h2 className="h2">skill learned:</h2>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
            </div>
          </div>
          <div
            className="horizontal-content"
            style={{
              border: "1px solid blue",
              padding: "1.5rem",
              width: "100%",
            }}
          >
            <div
              className="vertical-content"
              style={{
                alignItems: "start",
                justifyContent: "start",
                textAlign: "left",
              }}
            >
              <h1 className="h1">Job 1</h1>
              <h2 className="h2">Job Title</h2>
              <h3 className="h3">Job Duration</h3>
            </div>
            <div className="vertical-content">
              <h3 className="h3">Job Description</h3>
              <h3 className="h3">Job Salary</h3>
            </div>
            <div className="vertical-content">
              <h2 className="h2">skill learned:</h2>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
            </div>
          </div>
          <div
            className="horizontal-content"
            style={{
              border: "1px solid blue",
              padding: "1.5rem",
              width: "100%",
            }}
          >
            <div
              className="vertical-content"
              style={{
                alignItems: "start",
                justifyContent: "start",
                textAlign: "left",
              }}
            >
              <h1 className="h1">Job 1</h1>
              <h2 className="h2">Job Title</h2>
              <h3 className="h3">Job Duration</h3>
            </div>
            <div className="vertical-content">
              <h3 className="h3">Job Description</h3>
              <h3 className="h3">Job Salary</h3>
            </div>
            <div className="vertical-content">
              <h2 className="h2">skill learned:</h2>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content">
          <h1 className="h1">Education</h1>
          <h2 className="h2">School Name</h2>
          <h3 className="h3">School Icon</h3>
          <h3 className="h3">Degree</h3>
          <h3 className="h3">Graduation Date</h3>
        </div>
      </div>
      {/* Projects */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content">
          <h1 className="h1">Projects</h1>
          <h2 className="h2">Project 1</h2>
          <h3 className="h3">Project Description</h3>
          <h3 className="h3">Project Link</h3>
        </div>
      </div>
      {/* Attributes */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">Attributes</h1>
          <h2 className="h2">Attributes 1</h2>
          <h3 className="h3">Attribute Icon</h3>
          <h3 className="h3">Attributes Description</h3>
        </div>
      </div>
    </dix>
  );
}
