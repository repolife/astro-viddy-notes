import React, { useState } from 'react'
import { Platform } from '../../constants/platform'
import { useVideoActions, useVideos } from '../../store/videoStore'

export const Search = () => {
  const { addPlatform, addVideoId } = useVideoActions()
  const [inputValue, setInputValue] = useState<string>('')
  const platforms = Object.values(Platform)
  const { platform } = useVideos()
  return (
    <div className='grid grid-rows-3 sm:grid-rows-1 px-5'>
      {/* <Select data={[...platforms]} onChange={addPlatform}></Select> */}
      <div className='sm:col-span-3'>
        <label
          htmlFor='country'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Select Platform
        </label>
        <div className='mt-2 '>
          <select
            id='country'
            name='country'
            autoComplete='country-name'
            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
          >
            {platforms.map((p) => (
              <option>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='sm:col-span-3'>
        <div className='sm:col-span-2'>
          <label
            htmlFor='search'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Enter video Id
          </label>
          <div className='mt-2.5'>
            <input
              placeholder='Enter video id'
              onChange={(e) => setInputValue(e.target.value)}
              type='search'
              name='search'
              id='search'
              autoComplete='search'
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>{' '}
      </div>
      <div className='sm:col-span-3 mt-3'>
        <button
          onClick={() => addVideoId(inputValue)}
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Set Video
        </button>
      </div>
    </div>
  )
}

export default Search
