import React from 'react'
import Spinner from 'react-loader-spinner'
import { LoaderContainer } from './Loader.styles'

function Loader() {
  return (
    <LoaderContainer>
      <Spinner
        type="Hearts"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </LoaderContainer>
  )
}

export default Loader
