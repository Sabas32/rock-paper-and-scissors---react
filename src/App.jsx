import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import lizard from "./images/icon-lizard.svg";
import spoock from "./images/icon-spock.svg";
import triangle from "./images/bg-triangle.svg";
import pentagon from "./images/bg-pentagon.svg";
import close from "./images/icon-close.svg";
import rules from "./images/image-rules.svg";
import rulesBonus from "./images/image-rules-bonus.svg";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import clap from "./audio/short-crowd-cheer-6713.mp3";
import lostAp from "./audio/videogame-death-sound-43894.mp3";
import drewClap from "./audio/failure-drum-sound-effect-2-7184.mp3";
import bgMosic from "./audio/chill-drum-loop-6887.mp3";
import bgMosiconus from "./audio/game-music-loop-7-145285.mp3";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Preloader from "./conmponets/preloader";

function App() {

  const [showRules, setShowRules] = useState(false);
  const [siteLoading, setSiteLoading] = useState(true);
  const [choosen, setChoosen] = useState();
  const [comNumOrig, setcomNumOrig] = useState(
    Math.floor(Math.random() * 3) + 1
  );
  const [comNumBonus, setcomNumBonus] = useState(
    Math.floor(Math.random() * 3) + 1
  );
  const [win, setWin] = useState();
  const [score, setScore] = useState(Number(localStorage.getItem("score")));
  const [hasPlayed, sethasPlayed] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [home, setHome] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const audiobgRef = useRef(null);
  const audioRefdrew = useRef(null);
  const audioReflost = useRef(null);
  

  const restScore = () => {
    if (window.confirm("Do You Really Want to Reset the scores")) {
      localStorage.clear("score");
      setScore(0);
    } else {
      console.log("Canceled.");
    }
  };
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      setSiteLoading(true);
    } else {
      setSiteLoading(false);
    }
  };

  const handleHomeChange = () => {
    if (home === true) {
      setHome(false);
    } else {
      setHome(true);
    }
  };

  const handleShowRules = () => {
    if (showRules === false) {
      setShowRules(true);
    } else {
      setShowRules(false);
    }
  };

  const handlePlayBg = () => {
    audiobgRef.current.play();
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleStopClick = () => {
    audioRef.current.pause();
    audioRefdrew.current.pause();
    audioReflost.current.pause();
    audioRef.current.currentTime = 0; // Optionally reset the audio to start
    audioRefdrew.current.currentTime = 0; // Optionally reset the audio to start
    audioReflost.current.currentTime = 0; // Optionally reset the audio to start
    setIsPlaying(false);
  };


  function handlePlay() {
    setcomNumOrig(Math.floor(Math.random() * 3) + 1);
    setcomNumBonus(Math.floor(Math.random() * 5) + 1);
    sethasPlayed(true);
  }

  // Refresh to home page
  useEffect(() => {
    // Check if the page was reloaded
    if (window.performance && window.performance.navigation.type === 1) {
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    if (window.location.pathname === "/original") {
      if (choosen === 3 && comNumOrig === 2) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 3 && comNumOrig === 1) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 2 && comNumOrig === 3) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 2 && comNumOrig === 1) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 1 && comNumOrig === 3) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 1 && comNumOrig === 2) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }

      if (choosen === comNumOrig) {
        setWin(null);
        audioRefdrew.current.play();
        handlePlayClick();
       
      }

      // handleStopClick();
    } else {
      if (choosen === 3 && comNumBonus === 2) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 3 && comNumBonus === 1) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 2 && comNumBonus === 3) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 2 && comNumBonus === 1) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 1 && comNumBonus === 3) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 1 && comNumBonus === 2) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }

      // Bonus rounds
      if (choosen === 3 && comNumBonus === 4) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 3 && comNumBonus === 5) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 2 && comNumBonus === 4) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 2 && comNumBonus === 5) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 1 && comNumBonus === 4) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 1 && comNumBonus === 5) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 4 && comNumBonus === 2) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 4 && comNumBonus === 3) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 4 && comNumBonus === 5) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 4 && comNumBonus === 1) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 5 && comNumBonus === 3) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 5 && comNumBonus === 4) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === 5 && comNumBonus === 1) {
        setWin(true);
        audioRef.current.play();
        setConfetti(true);
        handlePlayClick();
        setScore(score + 1);
        localStorage.setItem("score", score + 1);
        
      }
      if (choosen === 5 && comNumBonus === 2) {
        setWin(false);
        audioReflost.current.play();
        
        handlePlayClick();
      }
      if (choosen === comNumBonus) {
        setWin(null);
        audioRefdrew.current.play();
        handlePlayClick();
        
      }
      
    }
  }, [choosen, comNumOrig, comNumBonus]);

  const handlePlayAgain = () => {
    sethasPlayed(false);
    setConfetti(false);
    handleStopClick();
    setChoosen(NaN);
  };

  const [loaded, setLoaded] = useState(false);
  
  // Simulate loading completion after a delay (remove this in production)
  useEffect(() => {
      setLoaded(true)
  }, []);



  // const volume = 0.5
  return (
    <BrowserRouter>
      {loaded ? (
        // Your main application content here
        <>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="startPage"
                  style={
                    home ? { transform: "scale(1)" } : { transform: "scale(0)" }
                  }
                  // style={siteLoading?{dispaly:'none'}:{visibility:'block'}}
                >
                  <h1>Rock Paper Scissors</h1>

                  <div className="optSelect">
                    <h3>Choose What Version to play</h3>
                    <p>
                      Press <span className="redText">ORIGINAL</span>(ROCK PAPER
                      AND SCISSORS) for the original game and{" "}
                      <span className="redText">BONUS</span>(ROCK PAPER SCISSORS
                      LIZARD AND SPOCK) for the more advanced of version game.
                    </p>

                    <p>
                      Your SCORES will be save in the current Browser you are
                      using Engoy the game THANK YOU.
                    </p>
                    <div className="btnCn">
                      <Link onClick={handleHomeChange} to="original">
                        <button>Original</button>
                      </Link>
                      <Link to="bonus">
                        <button onClick={handleHomeChange}>Bonus</button>
                      </Link>
                    </div>
                    <Link className="footnAME">by Masaba Ian Samuel</Link>
                  </div>
                </div>
              }
            ></Route>

            <Route
              path="original"
              element={
                <div className="original">
                  <Link
                    className="backHome"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </Link>
                  <div>
                    {/* <audio ref={audioRef} loop src={(win === true) ? clap : (win === false) ? lostAp :  drewClap }></audio> */}
                    <audio ref={audioRef} src={clap}></audio>
                    <audio ref={audioReflost} src={lostAp}></audio>
                    <audio ref={audioRefdrew} src={drewClap}></audio>
                    <audio
                      ref={audiobgRef}
                      className="bgMusic"
                      autoPlay={true}
                      loop
                      src={bgMosic}
                    ></audio>
                  </div>
                  {confetti ? (
                    <Confetti
                      className="Confetti"
                      width={window.innerWidth}
                      height={window.innerHeight}
                    />
                  ) : (
                    ""
                  )}

                  <div
                    className="laws"
                    style={
                      showRules
                        ? { transform: "scale(1) translate(-0%)", opacity: "1" }
                        : {
                            transform: "scale(0) translate(-50%)",
                            opacity: "0",
                          }
                    }
                  >
                    <div className="rul">
                      <div className="headRl">
                        <p>Rules</p>
                        <img src={close} alt="" onClick={handleShowRules} />
                      </div>
                      <img src={rules} alt="" />
                    </div>
                  </div>
                  <div className="App">
                    <header>
                      <div className="head">
                        <p>Roak Paper Scissors</p>

                        <div className="score">
                          <p>score</p>
                          <p>{score}</p>
                        </div>
                      </div>
                    </header>

                    <section className="choose">
                      <div
                        className="option"
                        style={
                          hasPlayed
                            ? {
                                transform: "scale(0) translate(-50%)",
                                position: "absolute",
                              }
                            : { transform: "scale(1) translate(-50%)" }
                        }
                      >
                        <img className="tr-bg" src={triangle} alt="" />
                        <div
                          className="iamgeOption "
                          onClick={() => {
                            setChoosen(3);
                            handlePlay();
                          }}
                        >
                          <img className="" src={rock} alt="" />
                        </div>
                        <div
                          className="iamgeOption "
                          onClick={() => {
                            setChoosen(1);
                            handlePlay();
                          }}
                        >
                          <img className="" src={scissors} alt="" />
                        </div>
                        <div
                          className="iamgeOption"
                          onClick={() => {
                            setChoosen(2);
                            handlePlay();
                          }}
                        >
                          <img className="" src={paper} alt="" />
                        </div>
                      </div>
                      <div
                        className="played"
                        style={
                          hasPlayed
                            ? {
                                transform: "scale(1) translate(-50%)",
                                width: "max-content",
                              }
                            : {
                                width: "max-content",
                                transform: "scale(0) translate(-50%)",
                                position: "absolute",
                              }
                        }
                      >
                        {choosen === 1 ? (
                          <div className="iamgeOption scissors">
                            <p>You Picked</p>
                            <img className="" src={scissors} alt="" />
                          </div>
                        ) : choosen === 2 ? (
                          <div className="iamgeOption">
                            <p>You Picked</p>
                            <img className="" src={paper} alt="" />
                          </div>
                        ) : (
                          <div className="iamgeOption rock">
                            <p>You Picked</p>
                            <img className="" src={rock} alt="" />
                          </div>
                        )}

                        <div className="win-Lost">
                          <p
                            style={
                              win === false
                                ? { color: "hsl(349, 71%, 50%)", opacity: ".7" }
                                : win === null
                                ? { color: "#e4e4e4", opacity: ".7" }
                                : { opacity: "1", color: "#e4e4e4" }
                            }
                          >
                            You {win ? "Win" : win === null ? "Drew" : "Lost"}
                          </p>
                          <button
                            onClick={handlePlayAgain}
                            style={
                              win === false
                                ? { color: "hsl(349, 71%, 50%)" }
                                : win === null
                                ? { color: "hsl(237, 49%, 15%)" }
                                : { opacity: "1", color: "hsl(237, 49%, 15%)" }
                            }
                          >
                            Play Again
                          </button>
                        </div>

                        {comNumOrig === 1 ? (
                          <div className="iamgeOption scissors">
                            <p>The House Picked</p>
                            <img className="" src={scissors} alt="" />
                          </div>
                        ) : comNumOrig === 2 ? (
                          <div className="iamgeOption paper">
                            <p>The House Picked</p>
                            <img className="" src={paper} alt="" />
                          </div>
                        ) : (
                          <div className="iamgeOption rock">
                            <p>The House Picked</p>
                            <img className="" src={rock} alt="" />
                          </div>
                        )}
                      </div>
                    </section>
                    <div className="rules" onClick={handleShowRules}>
                      rules
                    </div>
                    <div className="rules restScore" onClick={restScore}>
                      Rest Score
                    </div>
                  </div>
                </div>
              }
            ></Route>
            <Route
              path="bonus"
              element={
                <div className="bonus">
                  <Link
                    className="backHome"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </Link>
                  <div>
                    {/* <audio ref={audioRef} loop src={(win === true) ? clap : (win === false) ? lostAp :  drewClap }></audio> */}
                    <audio ref={audioRef} src={clap}></audio>
                    <audio ref={audioReflost} src={lostAp}></audio>
                    <audio ref={audioRefdrew} src={drewClap}></audio>
                    <audio
                      ref={audiobgRef}
                      className="bgMusic"
                      autoPlay={true}
                      loop
                      src={bgMosiconus}
                    ></audio>
                  </div>
                  {confetti ? (
                    <Confetti
                      className="Confetti"
                      width={window.innerWidth}
                      height={window.innerHeight}
                    />
                  ) : (
                    ""
                  )}

                  <div
                    className="laws"
                    style={
                      showRules
                        ? { transform: "scale(1) translate(-0%)", opacity: "1" }
                        : {
                            transform: "scale(0) translate(-50%)",
                            opacity: "0",
                          }
                    }
                  >
                    <div className="rul">
                      <div className="headRl">
                        <p>Rules</p>
                        <img src={close} alt="" onClick={handleShowRules} />
                      </div>
                      <img src={rulesBonus} alt="" />
                    </div>
                  </div>
                  <div className="App">
                    <header>
                      <div className="head">
                        <p>Roak Paper Scissors Lizard Spock</p>

                        <div className="score">
                          <p>score</p>
                          <p>{score}</p>
                        </div>
                      </div>
                    </header>

                    <section className="choose">
                      <div
                        className="option"
                        style={
                          hasPlayed
                            ? {
                                transform: "scale(0) translate(-50%)",
                                position: "absolute",
                              }
                            : { transform: "scale(1) translate(-50%)" }
                        }
                      >
                        <img className="tr-bg" src={pentagon} alt="" />

                        <div
                          className="iamgeOption rock"
                          onClick={() => {
                            setChoosen(3);
                            handlePlay();
                          }}
                        >
                          <img className="" src={rock} alt="" />
                        </div>
                        <div
                          className="iamgeOption scissors"
                          onClick={() => {
                            setChoosen(1);
                            handlePlay();
                          }}
                        >
                          <img className="" src={scissors} alt="" />
                        </div>
                        <div
                          className="iamgeOption lizard"
                          onClick={() => {
                            setChoosen(4);
                            handlePlay();
                          }}
                        >
                          <img className="" src={lizard} alt="" />
                        </div>
                        <div
                          className="iamgeOption spoock"
                          onClick={() => {
                            setChoosen(5);
                            handlePlay();
                          }}
                        >
                          <img className="" src={spoock} alt="" />
                        </div>
                        <div
                          className="iamgeOption  paper"
                          onClick={() => {
                            setChoosen(2);
                            handlePlay();
                          }}
                        >
                          <img className="" src={paper} alt="" />
                        </div>
                      </div>
                      <div
                        className="played"
                        style={
                          hasPlayed
                            ? {
                                transform: "scale(1) translate(-50%)",
                                width: "max-content",
                              }
                            : {
                                width: "max-content",
                                transform: "scale(0) translate(-50%)",
                                position: "absolute",
                              }
                        }
                      >
                        {choosen === 1 ? (
                          <div className="iamgeOption scissors">
                            <p>You Picked</p>
                            <img className="" src={scissors} alt="" />
                          </div>
                        ) : choosen === 2 ? (
                          <div className="iamgeOption paper">
                            <p>You Picked</p>
                            <img className="" src={paper} alt="" />
                          </div>
                        ) : choosen === 3 ? (
                          <div className="iamgeOption rock">
                            <p>You Picked</p>
                            <img className="" src={rock} alt="" />
                          </div>
                        ) : choosen === 4 ? (
                          <div className="iamgeOption lizard">
                            <p>You Picked</p>
                            <img className="" src={lizard} alt="" />
                          </div>
                        ) : (
                          <div className="iamgeOption spoock">
                            <p>You Picked</p>
                            <img className="" src={spoock} alt="" />
                          </div>
                        )}

                        <div className="win-Lost">
                          <p
                            style={
                              win === false
                                ? { color: "hsl(349, 71%, 50%)", opacity: ".7" }
                                : win === null
                                ? { color: "#e4e4e4", opacity: ".7" }
                                : { opacity: "1", color: "#e4e4e4" }
                            }
                          >
                            You {win ? "Win" : win === null ? "Drew" : "Lost"}
                          </p>
                          <button
                            onClick={handlePlayAgain}
                            style={
                              win === false
                                ? { color: "hsl(349, 71%, 50%)" }
                                : win === null
                                ? { color: "hsl(237, 49%, 15%)" }
                                : { opacity: "1", color: "hsl(237, 49%, 15%)" }
                            }
                          >
                            Play Again
                          </button>
                        </div>

                        {comNumBonus === 1 ? (
                          <div className="iamgeOption scissors">
                            <p>The House Picked</p>
                            <img className="" src={scissors} alt="" />
                          </div>
                        ) : comNumBonus === 2 ? (
                          <div className="iamgeOption paper">
                            <p>The House Picked</p>
                            <img className="" src={paper} alt="" />
                          </div>
                        ) : comNumBonus === 3 ? (
                          <div className="iamgeOption rock">
                            <p>The House Picked</p>
                            <img className="" src={rock} alt="" />
                          </div>
                        ) : comNumBonus === 4 ? (
                          <div className="iamgeOption lizard">
                            <p>The House Picked</p>
                            <img className="" src={lizard} alt="" />
                          </div>
                        ) : (
                          <div className="iamgeOption spoock">
                            <p>The House Picked</p>
                            <img className="" src={spoock} alt="" />
                          </div>
                        )}
                      </div>
                    </section>
                    <div className="rules" onClick={handleShowRules}>
                      rules
                    </div>
                    <div className="rules restScore" onClick={restScore}>
                      Rest Score
                    </div>
                  </div>
                </div>
              }
            ></Route>
          </Routes>
        </>
      ) : (
        <Preloader />
      )}
    </BrowserRouter>
  );
}

export default App;
