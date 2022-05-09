import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notify } from "../utils/notify";

// components
import Layout from "../components/Layout";
import Form from "../components/Form";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

// services
import * as videoService from "../services/VideoService";

// interfaces
import { Video } from "../interfaces/Video";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const CreateVideoPage = () => {
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });
  const [action, setAction] = useState<string>("create");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitData = (e: InputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

  const createAVideo = () => {
    videoService
      .createVideo(video)
      .then((response) => {
        if (response.success === false)
          return notify(response.message, "error");

        notify("video created");
        return navigate("/");
      })
      .catch((e) => {
        notify(e.message, "error");
      });
  };

  const updateVideo = () => {
    videoService
      .updateVideo(id, video)
      .then((data) => {
        if (data.success === true) {
          notify("video updated");
          return navigate("/");
        }
      })
      .catch((e) => notify(e.message, "error"));
  };

  const handleUpdateOrCreateVideo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (action === "update") return updateVideo();
    return createAVideo();
  };

  const fillFieldsForm = () => {
    videoService
      .getAVideo(id)
      .then((response) => response.json())
      .then((data) => {
        setVideo({
          title: data.data.title,
          url: data.data.url,
          description: data.data.description,
        });
      })
      .catch((e) => notify(e.message, "error"));
  };

  useEffect(() => {
    // if url has params update else to create video
    setVideo({ title: "", url: "", description: "" });
    setAction("create");

    if (id) {
      fillFieldsForm();
      setAction("update");
    }
  }, [id]);

  return (
    <Layout>
      <Form handleSubmit={handleUpdateOrCreateVideo}>
        <Input
          required={true}
          text="Title"
          name="title"
          value={video.title}
          handleSubmitData={handleSubmitData}
        />
        <Input
          required={true}
          type="url"
          text="Url"
          name="url"
          value={video.url}
          handleSubmitData={handleSubmitData}
        />
        <TextArea
          required={true}
          text="Description"
          name="description"
          value={video.description}
          handleSubmitData={handleSubmitData}
        />
        <Button text={action === "create" ? "Create" : "Update"} />
      </Form>
    </Layout>
  );
};

export default CreateVideoPage;
