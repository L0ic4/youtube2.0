import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl } from "../utils/constants";
import { demoVideoUrl } from "../utils/constants";
import { demoVideoTitle } from "../utils/constants";
import { demoChannelUrl } from "../utils/constants";
import { demoChannelTitle } from "../utils/constants";
import { RootObject } from "../Types/AllTypes";

interface VideoCardProps {
  video: RootObject;
}
export const VideoCard: React.FC = () => {
  return <div>VideoCard</div>;
};
