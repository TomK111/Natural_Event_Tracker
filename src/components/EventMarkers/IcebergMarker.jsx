import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/circle";

const IcebergMarker = ({ onClick }) => {
  return (
    <div className="iceberg-marker" onClick={onClick}>
      <Icon icon={locationIcon} />
    </div>
  );
};

export default IcebergMarker;
