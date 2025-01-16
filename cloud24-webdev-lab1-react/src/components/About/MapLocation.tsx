interface MapLocationProps {
  address: string,
  width: number,
  height: number
}

function MapLocation(props: MapLocationProps) {
  const apiKey: string | undefined = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const {address, width, height} = props;

  return (
    <>
      {apiKey !== undefined ?
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=15&size=${width}x${height}&key=${apiKey}`}
          alt="Map"
          className="img-fluid rounded d-block"/>
        : null}
    </>
  );
}

export default MapLocation;