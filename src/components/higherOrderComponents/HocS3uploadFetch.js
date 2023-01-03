import React from 'react';
import {FILE_UPLOAD_API_URL} from '../../utils/apiCaller';
export default WrappedComponent => {
  const HocComponent = ({...props}) => {
    const uploadImageFromLocalDevice = async (file, callback) => {
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await fetch(`${FILE_UPLOAD_API_URL}`, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        callback(data);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <WrappedComponent
        {...props}
        uploadImageFromLocalDevice={uploadImageFromLocalDevice}
      />
    );
  };

  return HocComponent;
};
