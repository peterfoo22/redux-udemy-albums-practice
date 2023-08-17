import React from 'react'
import { GoTrash } from 'react-icons/go'
import Button from './Button'
import { removeUser } from '../store'
import { useThunk } from '../hooks/use-thunk'

const UsersListItem = ({user}) => {

  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick =() =>{
    doRemoveUser(user);
  };

  return (
     <div className='mb-2 border rounded' >
        <div className='flex p-2 justify-between items-center cursor-pointer'>
          <div className='flex flex-row items-center justify-between items-center cursor-pointer'>
            <div className='flex flex-row items-center justify-between'>
              <Button className='mr-3' onClick={handleClick} loading={isLoading} > <GoTrash/></Button>
              {error && <div> Error Deleting Item</div>}
              {user.name}
            </div>
          </div>
        </div>
     </div>
  )
}

export default UsersListItem