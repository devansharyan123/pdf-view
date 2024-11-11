import React, { useState } from 'react';

const PDFViewer = () => {
  // URL of the PDF in your S3 bucket
  const s3PDFUrl = 'https://drive.google.com/file/d/1AWZBaii3J8Gz2c4NHMgTzB1WcN-CPRoj/view';

  const [showPDF, setShowPDF] = useState(false);

  const togglePDFView = () => {
    setShowPDF(!showPDF);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {!showPDF ? (
        <>
          <button
            onClick={togglePDFView}
            className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            View PDF
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Click the button to view the PDF inline.
          </p>
        </>
      ) : (
        <div className="relative w-full max-w-4xl h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[95vh]">
          {/* Close Button */}
          <button
            onClick={togglePDFView}
            className="absolute top-4 right-4 text-white bg-transparent rounded-full p-2 hover:bg-transparent focus:outline-none focus:ring-4 focus:ring-red-300 text-xl sm:text-2xl md:text-3xl"
          >
            &#10005; {/* Unicode for "X" symbol */}
          </button>

          {/* PDF Viewer */}
          <iframe
            src={s3PDFUrl}
            title="PDF Viewer"
            className="w-full h-full border-0 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
