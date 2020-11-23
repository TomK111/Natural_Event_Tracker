import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/pine-tree-fire";

const LocationMarker = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <Icon icon={locationIcon} className="wildfire-marker"/>
    </div>
  );
};

export default LocationMarker;
