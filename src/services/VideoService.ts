import { api } from "../constants/api";
// interfaces
import { Video } from "../interfaces/Video";

export const getVideos = () => {
  return window
    .fetch(`${api}/videos`)
    .then((request) => {
      if (request.status === 200) return request.json();
    })
    .then((response) => {
      if (response.success && response.data.length !== 0) return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getAVideo = (id: string | undefined): Promise<Response> => {
  return window.fetch(`${api}/videos/${id}`);
};

export const createVideo = (video: Video) => {
  return window
    .fetch(`${api}/create-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    })
    .then((response) => response.json())
    .then((data) => data);
};

export const updateVideo = (id: string | undefined, video: Video) => {
  return window
    .fetch(`${api}/videos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(video),
    })
    .then((response) => response.json());
};

export const deleteAVideo = (id: string | undefined) => {
  return window
    .fetch(`${api}/videos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => response.json());
};
