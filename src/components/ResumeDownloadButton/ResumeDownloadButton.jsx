import React from "react";
import resume from "../../assets/File/VishalResume.pdf";
import download from "../../assets/images/download.png";

const ResumeDownloadButton = () => {
  const handleDownloadClick = (e) => {
    e.preventDefault(); // Prevent default behavior of the anchor element
    const resumeFile = resume;
    const link = document.createElement("a");
    link.href = resumeFile;
    link.setAttribute("download", "YourResume.pdf");

    // Add an event listener to remove the link after download
    link.addEventListener("click", () => {
      document.body.removeChild(link);
    });

    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <a href={resume} onClick={handleDownloadClick}>
        <img src={download} alt="download" />
      </a>
    </div>
  );
};

export default ResumeDownloadButton;
