"use client";
import { useState, useRef, CSSProperties } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (track: string) => {
    if (audioRef.current) {
      if (currentTrack === track) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } else {
        audioRef.current.src = `/music/${track}`;
        audioRef.current.play();
        setCurrentTrack(track);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} preload="auto" />
      <button
        onClick={() => playTrack("familiada_intro.mp3")}
        style={styles.button}
      >
        {currentTrack === "familiada_intro.mp3" && isPlaying
          ? "Pause"
          : "Play INTRO"}
      </button>
      <button
        onClick={() => playTrack("familiada_correct.mp3")}
        style={styles.button}
      >
        {currentTrack === "familiada_correct.mp3" && isPlaying
          ? "Pause"
          : "Play CORRECT"}
      </button>
      <button
        onClick={() => playTrack("familiada_fail.mp3")}
        style={styles.button}
      >
        {currentTrack === "familiada_fail.mp3" && isPlaying
          ? "Pause"
          : "Play FAIL"}
      </button>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
    container: {
      display: "flex",
      flexDirection: "column", // Poprawna wartość dla CSS w TypeScript
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "auto",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#0070f3",
      color: "white",
      cursor: "pointer",
    },
  };

export default AudioPlayer;
