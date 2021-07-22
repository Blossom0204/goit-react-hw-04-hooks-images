import React from 'react'
import {
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styles'
import PropTypes from 'prop-types'

export default function ImageGalleryItemList({
  alt = '',
  webformatURL,
  largeImageURL,
  loadLargeImageURL,
}) {
  return (
    <ImageGalleryItem>
      <ImageGalleryItemImage
        alt={alt}
        src={webformatURL}
        onClick={() => loadLargeImageURL(largeImageURL)}
      />
    </ImageGalleryItem>
  )
}

ImageGalleryItemList.propTypes = {
  alt: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  loadLargeImageURL: PropTypes.func.isRequired,
}
