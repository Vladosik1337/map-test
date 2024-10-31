import Image from "next/image";
import { HoverBox, HoverText } from "./styled";

interface MapIconProps {
  title: string;
  iconPath: string;
  iconAlt: string;
  position?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  onClick: () => void;
}

export const MapIcon = ({ title, iconPath, iconAlt, position, onClick }: MapIconProps) => {
  return (
    <HoverBox
      sx={{
        ...position,
      }}
      onClick={onClick}
    >
      <Image src={iconPath} alt={iconAlt} width={16} height={16} />
      <HoverText className="hover-text">{title}</HoverText>
    </HoverBox>
  );
};
