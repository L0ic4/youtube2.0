import React from "react";
import { Item } from "../Types/AllTypes";
import { Box,CardContent,CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface ChannelCardProps {
  ChannelDetail: Item;
}

export const ChannelCard: React.FC<ChannelCardProps> = (
  props: ChannelCardProps
) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${props.ChannelDetail?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
            image={props?.ChannelDetail?.snippet?.thumbnails?.high?.url}

          />
        </CardContent>
      </Link>
    </Box>
  );
};
