import "./DragAndDrop.css";
import { FaFileDownload } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const DragAndDrop = () => {
  const handleFileUpload = (text) => {
    // Faça o que precisar com o texto do arquivo aqui
    console.log("Texto do arquivo:", text);
  };
  const FileUploader = ({ onFileUploaded }) => {
    const onDrop = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];

        // Ler o conteúdo do arquivo como texto
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result;
          onFileUploaded(text);
        };
        reader.readAsText(file);
      },
      [onFileUploaded]
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <FaFileDownload className="drag-and-drop-icon" />
      </div>
    );
  };

  return (
    <div className="drag-and-drop-container">
      <div className="drag-and-drop-content">
        <div>
          <FileUploader onFileUploaded={handleFileUpload} />
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
