import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumMutation } from '../store'
import Button from './Button'
import { GoTrash } from 'react-icons/go'
import PhotosList from './PhotosList'

const AlbumListItem = ({album}) => {
  
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum =()=>{
    removeAlbum(album);
  }

  const header = <>
     <Button className='mr-2' loading={results.isLoading} onClick={handleRemoveAlbum}>
      <GoTrash/>
     </Button>
     {album.title}
    </>
    
  return (
    <ExpandablePanel header={header} key={album.id}>
        <PhotosList album={album} />
      </ExpandablePanel>
  )
}

export default AlbumListItem;