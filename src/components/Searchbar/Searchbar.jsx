import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styles'
import PropTypes from 'prop-types'
import 'react-toastify/dist/ReactToastify.css'

export default function Searchedbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchQuery.trim() === '') {
      toast('⚠️Please enter search query name', {
        position: 'top-right',
        autoClose: 3000,
      })
      return
    }
    onSubmit(searchQuery)
    setSearchQuery('')
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          autocomplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search images and photos"
          type="text"
          value={searchQuery}
        />
      </SearchForm>
    </Searchbar>
  )
}

Searchedbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
