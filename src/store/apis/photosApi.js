import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath:'photos',
  baseQuery:fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints(builder){
    return {
      fetchPhotos: builder.query({
        query:(album)=>{
          return {
            url:'photos',
            params: {
              albumId:album.id
            },
            method:'GET'
          }
        }
      }),
      addPhoto: builder.mutation({
        query:(album)=>{
          return {
            method: 'POST',
            url:'photos',
            body:{
              albumId:album.id,
              user:faker.image.url()
            }
          }
        }
      }),
      removePhoto: builder.mutation({
        query:(photo)=>{
          return {
            method:'DELETE',
            url: `/photos/${photo.id}`
          } 
        }
      })
    }
  }
})