// import React from 'react'
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/wrapper";
import { Download } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="download resume"
        >
          {" "}
          <Download className="icon" />{" "}
        </a>
      </div>
      <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {/* <Page pageNumber={1} renderTextLayer renderAnnotationLayer /> */}
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </>
  );
};
const ResumeWrapper = WindowWrapper(Resume, "resume");
export default ResumeWrapper;
