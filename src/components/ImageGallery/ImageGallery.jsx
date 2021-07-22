import React from 'react'
import ImageGalleryItemList from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGallery } from './ImageGallery.styles'
import PropTypes from 'prop-types'

export default function ImageGalleryList({ images, onSelect }) {
  return (
    <ImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItemList
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          alt={tags}
          loadLargeImageURL={onSelect}
        />
      ))}
    </ImageGallery>
  )
}

ImageGalleryList.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}
