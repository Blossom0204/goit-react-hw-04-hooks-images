import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, Modal } from './Modal.styles'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')

export default function ModalWindow({ onClose, largeImageURL }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  })

  const handleKeydown = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <img src={largeImageURL} alt="" />
      </Modal>
    </Overlay>,
    modalRoot,
  )
}

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}
