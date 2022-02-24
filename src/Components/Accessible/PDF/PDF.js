import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import PDF from '../../../Assets/Resume.pdf';

export default function Resume() {
  const style = {
    display: 'flex',
    height: '100%',
  };
  return (
    <Document file={PDF} style={style}>
      <Page pageNumber={1} style={style}/>
    </Document>
  );
}
