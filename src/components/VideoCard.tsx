import { Video } from "../interfaces/Video";
// import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ _id, title, description, url, fn }: Video) => {
  const navigate = useNavigate();
  return (
    <div className="hover:border-gray-400 cursor-pointer border p-5 rounded text-center">
      <div className="flex justify-between pb-3">
        <div
          onClick={() => navigate(`/update-video/${_id}`)}
          className="w-full text-center"
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-">{description}</p>
        </div>

        <span
          className="text-red-500 font-semibold text-lg hover:text-red-700"
          onClick={() => fn && fn(_id)}
        >
          x
        </span>
      </div>

      <iframe
        title="video"
        className="w-full h-72"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <ReactPlayer loop url={url} width="100%" /> */}
    </div>
  );
};

export default VideoCard;
