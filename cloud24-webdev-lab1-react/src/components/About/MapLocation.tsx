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
        // !: Google Maps URLs API
        // Source: https://developers.google.com/maps/documentation/urls/get-started#search-action
        // !: Google Maps Static Map API
        // Source: https://developers.google.com/maps/documentation/maps-static/overview
        <a href={`https://www.google.com/maps/search/?api=1&query=${address}`} target="_blank">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=15&size=${width}x${height}&key=${apiKey}`}
            alt="Map"
            className="img-fluid rounded d-block"/>
        </a>
        : null}
    </>
  );
}

export default MapLocation;