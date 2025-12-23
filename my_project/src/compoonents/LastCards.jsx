export default function LastCards() {

  const videos = [
    "/video2.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video3.mp4"
  ];

  const containerStyle = {
    display: "flex",
    gap: "40px",          // ✅ GAP HERE
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px"
  };

  const cardStyle = {
    width: "500px"
  };

  const videoStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "12px"
  };

  return (
    <div style={containerStyle} id="Lastt">
      {videos.map((vid, index) => (
        <div key={index} style={cardStyle}>
          <video
            style={videoStyle}
            autoPlay      // ✅ AUTOPLAY
            muted         // ✅ REQUIRED
            loop
            playsInline
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
