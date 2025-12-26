export default function Audio() {
  return (
    <audio controls>
      <source src="/audio1.mp3" type="audio/mpeg" />
      Your browser does not support audio.
    </audio>
  );
}
