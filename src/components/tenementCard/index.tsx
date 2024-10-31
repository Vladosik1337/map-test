import { getDaysAgo } from "@/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ImageSlider } from "../imageSlider";

import dayjs from "dayjs";
import {
  CardWrapper,
  DescriptionLine,
  DescriptionLineItem,
  DescriptionText,
  DescriptionWrapper,
  GrayText,
  VerifiedLine,
  VerifiedTitle,
} from "./styled";

interface TenementCardProps {
  tenement: Tenement;
  index: number;
}

export const TenementCard = ({ tenement, index }: TenementCardProps) => {
  const verified = index === 0 ? true : tenement?.verified;
  const daysAgo = getDaysAgo(tenement.createdAt);

  return (
    <CardWrapper>
      <Box>
        <ImageSlider media={tenement.media} />
      </Box>

      <DescriptionWrapper>
        <VerifiedLine>
          {verified ? (
            <VerifiedTitle>
              <Image src="/verified.svg" alt="verified-icon" width={15} height={15} />
              Verified
            </VerifiedTitle>
          ) : (
            <Typography> </Typography>
          )}
          <GrayText>{daysAgo}</GrayText>
        </VerifiedLine>

        <DescriptionText>{tenement.abstract}</DescriptionText>

        <GrayText fontWeight={500}>{tenement.address}</GrayText>

        <DescriptionLine>
          <DescriptionLineItem>
            <Image src="/gray_cube.svg" height={16} width={16} alt="square-icon" />
            <GrayText>{tenement.size} m²</GrayText>
          </DescriptionLineItem>

          <DescriptionLineItem>
            <Image src="/gray_bed.svg" height={16} width={16} alt="square-icon" />
            <GrayText>{tenement.roomsBed}</GrayText>
          </DescriptionLineItem>

          <DescriptionLineItem>
            <Image src="/gray_bath.svg" height={16} width={16} alt="square-icon" />
            <GrayText>{tenement.roomsBath}</GrayText>
          </DescriptionLineItem>
        </DescriptionLine>

        <DescriptionText>{tenement.rentFull || tenement.rent} €</DescriptionText>

        <DescriptionLineItem fontSize="12px">
          <GrayText>Available from:</GrayText>
          {tenement.availableFrom
            ? dayjs(tenement.availableFrom).format("DD-MM-YYYY")
            : "Immediately"}
        </DescriptionLineItem>
      </DescriptionWrapper>
    </CardWrapper>
  );
};
