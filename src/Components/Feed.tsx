import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from "./SideBar";
import { Videos } from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const Feed: React.FC = () => {

  const [SelectedCategory, setSelectedCategory] = useState("New");

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`).then((data) => {
      setvideos(data.items);
    });
  }, [SelectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <SideBar
          selectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copiright 2023
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: "2",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          marginBottom={2}
          sx={{
            color: "white",
          }}
        >
          {SelectedCategory}
          <span
            style={{
              color: "#F31503",
            }}
          >
            video
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
