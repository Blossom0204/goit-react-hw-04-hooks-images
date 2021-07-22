import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Loader from './components/Loader/Loader'
import Searchedbar from './components/Searchbar/Searchbar'
import Api from './services/api'
import ImageGalleryList from './components/ImageGallery/ImageGallery'
import Button from './components/Button/Button'
import ModalWindow from './components/Modal/Modal'
import PropTypes from 'prop-types'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [error, setError] = useState(null)
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (searchQuery === '') return

    setIsLoading(true)

    Api.fetchImages({ searchQuery, page })
      .then((responseImages) => {
        setImages((prevImages) => [...prevImages, ...responseImages])
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [searchQuery, page])

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  })

  const loadLargeImageURL = (largeImageURL) => {
    setSelectedImage(largeImageURL)
    toggleModal()
  }

  const handleSubmit = (value) => {
    setError(null)
    setImages([])
    setPage(1)
    setSearchQuery(value)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      {error && toast.error('No image found!')}
      <Searchedbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGalleryList images={images} onSelect={loadLargeImageURL} />
      {images.length > 11 && <Button onClick={onLoadMore} />}
      {showModal && (
        <ModalWindow onClose={toggleModal} largeImageURL={selectedImage} />
      )}
      {<ToastContainer position="top-right" autoClose={3000} />}
    </>
  )
}

App.propTypes = {
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  selectedImage: PropTypes.string,
  page: PropTypes.number,
  searchQuery: PropTypes.string,
  showModal: PropTypes.bool,
}
