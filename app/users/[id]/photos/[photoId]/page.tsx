import React from "react";
interface Props {
  params: { photoId: number; id: number };
}
function PhotoDetails({ params: { photoId, id } }: Props) {
  return (
    <div>
      PhotoDetails {photoId} {id}
    </div>
  );
}

export default PhotoDetails;
