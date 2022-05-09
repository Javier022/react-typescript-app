import { useEffect, useState } from "react";
import { notify } from "../utils/notify";

// compnts
import Layout from "../components/Layout";
import VideoCard from "../components/VideoCard";

// Interface
import { Video } from "../interfaces/Video";

// Services
import * as videoService from "../services/VideoService";

const VideosPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = (): void => {
    setIsLoading(true);

    videoService.getVideos().then((data) => {
      setIsLoading(false);
      if (Array.isArray(data)) {
        // al momento de recivir la respuesta de la promesa estoy validando que sea
        // un arreglo ya que si no es un array entonces se seteara lo que venga en el data
        //  y si por algun motivo viene algo diferente a un arreglo, por ejemplo un {} eso se setearia en setVideos,
        // esto pasa porque solo en el then se recive la respuesta del servicio ya sea si todo fue exitoso
        // o si hubo un error, el catch no funciona, si lo necesito usar necesitaria traer el servicio
        // directamente aqui
        setVideos(data.reverse());
      }

      notify(data.message, "error");
    });
  };

  const convertVideoUrl = (url: string): string => {
    return url.includes("/watch?v=")
      ? url.replace("/watch?v=", "/embed/")
      : url;
  };

  const deleteVideo = (id: string | undefined) => {
    videoService
      .deleteAVideo(id)
      .then((result) => {
        if (result.success === true) return notify("video deleted");
      })
      .catch((e) => {
        notify(e.message, "error");
      });

    const newStateVideos = videos.filter((video) => video._id !== id);

    setVideos(newStateVideos);
  };

  useEffect(() => {
    console.log("useEffect PageVideo");
    getData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="h-screen w-full relative bg-white border flex justify-center items-center">
          loading...
        </div>
      )}
      <Layout>
        <h1 className="text-3xl font-bold pb-5">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.length === 0 && "add your first video"}
          {videos.map(({ _id, url, description, title }) => {
            let validUrl = convertVideoUrl(url);

            let video = {
              _id,
              url: validUrl,
              title,
              description,
            };

            return <VideoCard key={_id} {...video} fn={deleteVideo} />;
          })}
        </div>
      </Layout>
    </>
  );
};

export default VideosPage;
