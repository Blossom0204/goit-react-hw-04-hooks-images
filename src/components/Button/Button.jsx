import React from 'react'
import { LoadMoreBtn } from './Button.styles'
import PropTypes from 'prop-types'

export default function Button({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
