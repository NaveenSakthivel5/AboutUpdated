import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const VideoMesh = ({ videoRef }) => {
  const texture = useRef();

  useFrame(() => {
    if (videoRef.current && texture.current && videoRef.current.readyState >= 2) {
      texture.current.needsUpdate = true; // Ensure the texture updates
    }
  });

  return (
    <mesh>
      <planeGeometry args={[14, 8]} /> {/* Video plane dimensions */}
      <meshBasicMaterial ref={texture} transparent={true} opacity={1}>
        <videoTexture
          attach="map"
          args={[videoRef.current]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
};

const ScrollControlledVideo = () => {
  const videoRefDown = useRef(null); // Ref for video played when scrolling down
  const videoRefUp = useRef(null); // Ref for video played when scrolling up
  const [sticky, setSticky] = useState(false); // Track if the video is sticky
  const [scrollDirection, setScrollDirection] = useState("down"); // Track the scroll direction
  const lastScrollY = useRef(0); // Track last scroll position
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track when the video is ready
  const [video1Playing, setVideo1Playing] = useState(false); // Track if video1 is playing
  const [video2Playing, setVideo2Playing] = useState(false); // Track if video2 is playing
  const [allowVideo1Play, setAllowVideo1Play] = useState(true); // Allow Video 1 to play
  const [allowVideo2Play, setAllowVideo2Play] = useState(false); // Allow Video 2 to play

  // Ensure both videos are loaded before playing
  useEffect(() => {
    if (videoRefDown.current && videoRefUp.current) {
      videoRefDown.current.oncanplay = () => setIsVideoLoaded(true);
      videoRefUp.current.oncanplay = () => setIsVideoLoaded(true);
    }
  }, []);

  // Handle scroll to switch between videos based on scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentScrollY;

    // Prevent switching while a video is playing
    if (video1Playing || video2Playing) {
      return; // Ignore opposite scroll direction while a video is still playing
    }

    setScrollDirection(direction);

    const videoRect = videoRefDown.current.getBoundingClientRect();
    const centerOffset = window.innerHeight / 2;

    // Make the video sticky once it's in the center
    if (videoRect.top <= centerOffset && !sticky) {
      setSticky(true); // Make the video sticky
    }

    if (sticky && isVideoLoaded) {
      if (direction === "down" && allowVideo1Play && !video1Playing) {
        // Play video1 only if it's allowed to play and not already playing
        playVideo(videoRefDown, setVideo1Playing);
      } else if (direction === "up" && allowVideo2Play && !video2Playing) {
        // Play video2 only if it's allowed to play and not already playing
        playVideo(videoRefUp, setVideo2Playing);
      }
    }
  };

  // Function to play the selected video and manage state
  const playVideo = (videoRefToPlay, setPlaying) => {
    if (videoRefToPlay.current && videoRefToPlay.current.paused) {
      videoRefToPlay.current.play();
      setPlaying(true);
    }
  };

  // Handle video1 completion
  const handleVideo1End = () => {
    setVideo1Playing(false); // Mark video1 as not playing
    setAllowVideo2Play(true); // Allow Video 2 to play next
    setAllowVideo1Play(false); // Prevent Video 1 from playing again until Video 2 finishes
  };

  // Handle video2 completion
  const handleVideo2End = () => {
    setVideo2Playing(false); // Mark video2 as not playing
    setAllowVideo1Play(true); // Allow Video 1 to play next
    setAllowVideo2Play(false); // Prevent Video 2 from playing again until Video 1 finishes
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sticky, isVideoLoaded, video1Playing, video2Playing]);

  return (
    <>
      {/* First video for scrolling down */}
      <video
        ref={videoRefDown}
        src="/GearRev.webm" // Video played on scrolling down
        style={{ display: 'none' }}
        loop={false}
        muted
        playsInline
        onEnded={handleVideo1End} // Trigger when video1 ends
      />

      {/* Second video for scrolling up */}
      <video
        ref={videoRefUp}
        src="/Gearfinal.webm" // Video played on scrolling up
        style={{ display: 'none' }}
        loop={false}
        muted
        playsInline
        onEnded={handleVideo2End} // Trigger when video2 ends
      />

      {/* Canvas rendering the active video */}
      <Canvas
        style={{
          width: '100%',
          height: sticky ? '70vh' : 'auto', // Height for the video
          position: sticky ? 'sticky' : 'relative', // Make it sticky
          top: sticky ? '50%' : 'auto', // Stick it to the center when active
          transform: sticky ? 'translateY(-50%)' : 'none', // Center it vertically
          zIndex: sticky ? 100 : 'auto', // Ensure it's on top when sticky
        }}
      >
        <VideoMesh videoRef={scrollDirection === "down" ? videoRefDown : videoRefUp} />
      </Canvas>
    </>
  );
};

const App = () => {
  return (
    <div style={{ height: '200vh' }}>
      <ScrollControlledVideo />
      <div style={{ height: '100vh', visibility: 'hidden' }}></div>
    </div>
  );
};

export default App;
