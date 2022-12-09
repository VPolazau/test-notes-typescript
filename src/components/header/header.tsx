import React from 'react'

import {btnEvent} from '../../events/event'
import { useAppDispatch } from '../../hooks/redux'
import { newNote } from '../../store/redusers/notesSlice'

import './header.scss'

const Header = () => {
  const dispatch = useAppDispatch()

  const onFiltered: React.ChangeEventHandler<HTMLInputElement> = event => {
    btnEvent.emit('onFilterChange', event.target.value)
  }

  const newItem = () => {
    dispatch(newNote())
    btnEvent.emit('onAddNewItem')
  }

  return (
    <div className='Header'>
      <h1 className='Header__title'>Test Notes</h1>
      <input
        className='Header__input'
        type='text'
        placeholder='enter tag'
        onChange={onFiltered}
      />
      <button className='btn Header__btn-new' onClick={newItem}>New</button>
    </div>
  )
}

export default Header