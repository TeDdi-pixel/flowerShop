import ReactPlayer from "react-player/youtube";

const LocationPlayer = () => {
  return (
    <div className="player">
      <div className="player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=4zUUCTwOb0w"
          className="react-player"
          loop
          width="100%"
          height="100%"
          controls
          volume={0.03}
        />
      </div>
    </div>
  );
};

export default LocationPlayer;
