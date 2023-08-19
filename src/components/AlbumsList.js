import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store/apis/albumsApi';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumListItem from './AlbumListItem';

const AlbumsList = ({user}) => {

  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum =()=>{
    addAlbum(user);
  }

  let content;
  
  if (isFetching){
    content = <Skeleton times={3}/>
  }else if (error)
  {
    content = <div>Error loading albums.</div>
  }else {
    content = data.map(album=>{
     return <AlbumListItem album={album} key={album.id} />
    })
  }

  return (<div>
     <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">
        Albums for {user.name}
      </h3>
      <Button loading={results.isLoading} onClick={handleAddAlbum}>
        +Add Album
      </Button>
    </div>
    <div>{content}</div>
  </div>
  )
}

export default AlbumsList;