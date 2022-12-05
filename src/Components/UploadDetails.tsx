import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { uploadDocs } from "../api";

function UploadDetails() {
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [navigate, setNavigate] = useState<string | undefined>();

  const [name, setName] = useState("");
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const selectFile = target.files?.item(0);
    if (!selectFile) return;
    setSelectedFile(selectFile);
  };
  if (navigate) return <Navigate to={navigate}></Navigate>;
  const handleSubmission: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("No file");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("username", name);
    console.log(formData);
    uploadDocs(formData)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
    setNavigate("/admin");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <form
        className="bg-gray-800 p-10 rounded space-y-8 "
        onSubmit={handleSubmission}
      >
        <div className="space-x-2">
          <label className="text-gray-300 font-semibold " htmlFor="name">
            Enter your Name
          </label>
          <input
            className="rounded px-2 hover:ring ring-gray-500 outline-none bg-gray-400"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
            required
          ></input>
        </div>
        <div className=" space-y-2 items-center">
          <p className="text-gray-300 font-semibold text-sm">Upload Document</p>
          <input
            className="text-gray-300 rounded border-b-2 text-sm"
            type={"file"}
            accept="image/png, image/jpeg"
            onChange={changeHandler}
          ></input>
        </div>
        <div className=" flex justify-end">
          <button
            type={"submit"}
            className="bg-gray-300 font-semibold rounded px-3 py-1 hover:bg-gray-400 hover:border-b text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadDetails;
