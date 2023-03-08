import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./VideoCard";
import { ChannelCard } from "./ChannelCard";
import { Item } from "../Types/AllTypes";

interface VideoProps {
  videos: Item[];
}

export const Videos: React.FC<VideoProps> = (props: VideoProps) => {

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {props.videos.map((item: Item, idx: number) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};
