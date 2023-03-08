import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./VideoCard";
import { ChannelCard } from "./ChannelCard";

interface VideoProps {
  videos: any;
}


export const Videos: React.FC<VideoProps> = (props: VideoProps) => {
  
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>

      {props.videos.map((item: any, idx: number) => {
        <Box key={idx}>
          {item.id.videoId && <VideoCard />}
          {/* {item.id.channelId && <ChannelCard  />} */}
        </Box>;
      })}
      
    </Stack>
  );
};
