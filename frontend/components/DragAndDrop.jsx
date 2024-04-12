import "./DragAndDrop.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";

const DragAndDrop = ({ setDragAndDropText }) => {
  const FileUploader = ({ children }) => {
    const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        setDragAndDropText(text);
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
            <MdOutlineFileUpload className="drag-and-drop-icon" />
            <div className="drag-and-drop-text">
              <p>Click here or drag and drop your file.</p>
            </div>
          </div>
        </FileUploader>
      </div>
    </>
  );
};

export default DragAndDrop;
