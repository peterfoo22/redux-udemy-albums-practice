import React from 'react'
import { GoTrash } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

const PhotosListItem = ({photo}) => {

  const [removePhoto] = useRemovePhotoMutation()

  const handlePhotoDelete =()=>{
    removePhoto(photo);
  }

  return (
    <div className='relative m-2'>
      <img className='h-20 w-20' src={photo.user} alt="randompic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash onClick={handlePhotoDelete} className='text-3xl'></GoTrash>
      </div>
    </div>
  )
}

export default PhotosListItem;