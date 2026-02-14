import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id, lang } = await params;

  console.log("Photo ID:", id);
  console.log("Lang:", lang);

  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoDetailsPage;
