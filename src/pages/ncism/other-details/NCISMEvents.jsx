import React from 'react'
import Gallery from '../../../shared/Gallery'

  const images = [
    "/ncism-other-details/events/carriculum1.webp",
    "/ncism-other-details/events/carriculum2.webp",
  ];

const NCISMEvents = () => {
  return (
        <Gallery
      title="Events"
      images={images}
    />
  )
}

export default NCISMEvents