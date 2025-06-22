import  { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


  export const  shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery:  fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0a5518af37msh679bacecabb8ed4p1ea048jsn6252453fca7d')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts : builder.query({query: ()  => '/charts/world' })
    })
  })

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;