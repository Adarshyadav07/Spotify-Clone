import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



  export const shazamCoreApi = createApi({

    
    reducerPath: 'shazamCoreApi',


     baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      
      headers.set('x-rapidapi-key', '0a5518af37msh679bacecabb8ed4p1ea048jsn6252453fca7d');
        headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (params) => ({
        url: '/charts/world',
        params, 
      }),
    }),
    getSongByGenre: builder.query({query:(genre) => `/charts/genre-world?genre_code=${genre}`}),
    getSongDetails: builder.query({query: ({ songid }) => `/track/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTIST&query=${searchTerm}`})
  }),  
  })

  export const {
    useGetTopChartsQuery,
    useGetSongByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,

  } = shazamCoreApi;