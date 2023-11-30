import React from 'react';
import ReactLoading from 'react-loading';

export function Loading() {
  return (
    <div className="d-flex justify-content-center w-full">
      <ReactLoading color="#3EB282" type="bars" />
    </div>
  );
}
