import React from 'react';
import {FILE_UPLOAD_API_URL} from '../../utils/apiCaller';
import axios from 'axios';
export default WrappedComponent => {
  const HocComponent = ({...props}) => {
    async function uploadImageFromLocalDevice(imagePath) {
      let formData = new FormData();
      formData.append('file', {
        uri: imagePath,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      let img = await axios.post(
        `${FILE_UPLOAD_API_URL}/s3/upload-compressed`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return img.data.link;
    }

    return (
      <WrappedComponent {...props} uploadImageFromLocalDevice={uploadImageFromLocalDevice} />
    );
  };

  return HocComponent;
};
