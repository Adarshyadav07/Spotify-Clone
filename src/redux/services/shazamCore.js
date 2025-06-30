import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



  export const shazamCoreApi = createApi({

    
    reducerPath: 'shazamCoreApi',


     baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      
      headers.set('x-rapidapi-key', '91266df001msh7fe225c39a4a2d0p1bbb16jsn0be908f892f8');
        headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (params) => ({
        url: '/v1/charts/world?country_code=DZ',
        params, 
      }),
    }),
    getSongByGenre: builder.query({query:(genre) => `/v1/charts/genre-world?country_code=DZ&genre_code=${genre}`}),
    getSongDetails: builder.query({query: ({ songid }) => `/v1/track/details?track_id=${songid}&country_code=DZ` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/v1/tracks/related?track_id=${songid}&country_code=DZ`}),
    getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}&country_code=DZ`}),
    getSongsByCountry: builder.query({ query: (countryCode) => `/v1/charts/country?country_code=${countryCode}`}),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTIST&query=${searchTerm}`})
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