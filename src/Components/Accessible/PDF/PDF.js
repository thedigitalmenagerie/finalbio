import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import PDF from '../../../Assets/Resume.pdf';

export default function Resume() {
  return (
    <Document file={PDF}>
      <Page pageNumber={1} />
    </Document>
  );
}
