import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import VideosPage from "../pages/VideosPage";
import CreateVideoPage from "../pages/CreateVideoPage";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path="/create-video" element={<CreateVideoPage />} />
        <Route path="/update-video/:id" element={<CreateVideoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
