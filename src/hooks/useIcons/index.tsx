import { useTenementsContext } from "@/contexts";

export const useIcons = () => {
  const { activateDrawMode, setActivateDrawMode } = useTenementsContext();

  const ICONS = [
    {
      id: "poi",
      title: "Point of Interest",
      iconPath: "/points_of_interest.svg",
      position: {
        top: 20,
      },
      onClick: () => {},
    },
    {
      id: "layers",
      title: "Layers",
      iconPath: "/layer.svg",
      position: {
        top: 70,
      },
      onClick: () => {},
    },
    {
      id: "draw",
      title: "Draw",
      iconPath: "/draw.svg",
      position: {
        top: 120,
      },
      onClick: () => {
        setActivateDrawMode(!activateDrawMode);
      },
    },
    {
      id: "streetview",
      title: "Streetview",
      iconPath: "/streetview.svg",
      position: {
        bottom: 20,
      },
      onClick: () => {},
    },
    {
      id: "routePlanner",
      title: "Route Planner",
      iconPath: "/route_planner.svg",
      position: {
        bottom: 20,
        left: 150,
      },
      onClick: () => {},
    },
  ];

  return ICONS;
};
