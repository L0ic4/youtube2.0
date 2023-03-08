import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl } from "../utils/constants";
import { demoVideoUrl } from "../utils/constants";
import { demoVideoTitle } from "../utils/constants";
import { demoChannelUrl } from "../utils/constants";
import { demoChannelTitle } from "../utils/constants";
import { Item } from "../Types/AllTypes";

interface VideoCardProps {
  video: Item;
}
export const VideoCard: React.FC<VideoCardProps> = (props: VideoCardProps) => {
  return (
    <Card
      sx={{
        width: {
          md: "320px",
          xs: "100%",
        },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={
          props.video.id.videoId
            ? `/video/${props.video.id.videoId}`
            : demoVideoUrl
        }
      >
        <CardMedia
          image={props.video.snippet?.thumbnails?.high?.url}
          sx={{
            width: 358,
            height: 180,
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "100px",
        }}
      >
        <Link
          to={
            props.video.id.videoId
              ? `/video/${props.video.id.videoId}`
              : demoVideoUrl
          }
        >
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
            {props.video.snippet?.title.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            props.video.snippet?.channelId
              ? `/channel/${props.video.snippet?.channelId}`
              : demoVideoUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"}>
            <CheckCircle
              sx={{
                fontSize: 12,
                color: "gray",
                ml: "5px",
              }}
            />
            {props.video.snippet?.channelTitle.slice(0, 50)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
