import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


const crypApiHeaders= {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3abfa642fdmsh04a985b3e519befp15ae53jsn2b118ce80fc9'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins',

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("./coins")


        })


    })


})

export const {
    useGetCryptosQuery,
} = cryptoApi; 
