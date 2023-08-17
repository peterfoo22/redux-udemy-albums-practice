import {createApi, fetchBaseQuery} from '@reduxjs/tookit/query/react'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery:fetchBaseQuery({
    baseUrl:'http://localhost:3000'
  }),
  endpoints(builder){
    return{

    };
  }
})

export default albumsApi;