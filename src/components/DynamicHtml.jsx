import React from "react";

function DynamicHTML({ htmlContent }) {
  console.log(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default DynamicHTML;
