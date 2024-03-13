import "./DragAndDrop.css";
import { FaFileDownload } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

const DragAndDrop = ({setDragAndDropText}) => {

  const FileUploader = ({ children }) => {
    const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        setDragAndDropText(text)
      };
      reader.readAsText(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {children}
      </div>
    );
  };

  return (
    <>
      <div className="drag-and-drop-container">
        <FileUploader>
          <div className="drag-and-drop-content">
            <FaFileDownload className="drag-and-drop-icon" />
          </div>
        </FileUploader>
      </div>
    </>
  );
};

export default DragAndDrop;
