import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker'

const addUser = createAsyncThunk('users/add', async ()=>{

  const fakeName = faker.person.fullName();

  const response = await axios.post('http://localhost:3000/users',{
    name: fakeName
  })

  return response.data;

})

export {addUser};