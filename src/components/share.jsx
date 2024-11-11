  
  import React, { useState } from 'react';

const PDFViewer = () => {
  
  const s3PDFUrl = 'https://kyra-dating-coach.s3.ap-southeast-2.amazonaws.com/Devansh_Aryan.pdf';
  
 
  const [showPDF, setShowPDF] = useState(false);

  const togglePDFView = () => {
    setShowPDF(!showPDF); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!showPDF ? (
        <>
          <button
            onClick={togglePDFView}
            className="px-6 py-3 mt-4 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            View PDF
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Click the button to view the PDF inline.
          </p>
        </>
      ) : (
        <div className="relative w-full h-screen">
         
          <button
            onClick={togglePDFView}
            className="absolute top-20 right-5 text-white bg-transparent rounded-full p-2 hover:bg-transparent focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            &#10005;
          </button>
          
          <iframe
            src={s3PDFUrl}
            title="PDF Viewer"
            className="w-full h-full border-0"
          />
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
