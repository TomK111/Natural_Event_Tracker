import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/storm-advisory-outline";

const SevereStormMarker = ({ onClick }) => {
  return (
    <div className="severestorm-marker" onClick={onClick}>
      <Icon icon={locationIcon} />
    </div>
  );
};

export default SevereStormMarker;
