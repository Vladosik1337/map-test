import { TenementCard } from "../tenementCard";
import { TenementsListWrapper } from "./styled";

interface TenementsListProps {
  tenements: Tenement[];
}

export const TenementsList = ({ tenements }: TenementsListProps) => {
  return (
    <TenementsListWrapper>
      {tenements &&
        tenements.map((tenement, index) => (
          <TenementCard key={tenement.id} tenement={tenement} index={index} />
        ))}
    </TenementsListWrapper>
  );
};
