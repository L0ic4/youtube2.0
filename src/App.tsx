import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { NavBar } from "./Components/NavBar";
import { Feed } from "./Components/Feed";
import { VideoDetails } from "./Components/VideoDetails";
import { SearchFeed } from "./Components/SearchFeed";
import { ChannelDetails } from "./Components/ChannelDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/searsh/:searshTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
