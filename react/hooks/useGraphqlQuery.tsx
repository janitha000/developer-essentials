//uses react-query function and wraps around it

import React from 'react'
import { useQuery } from 'react-query'
import { request } from 'graphql-request'


export const useGraphQLQuery = (key: string, query: any, variables?: any, config: any = {}) => {
    const endpont = 'http://localhost:5000/graphql'

    const fetchData = async () => await request(endpont, query, variables)

    const { data, isLoading, isError, refetch } = useQuery(key, fetchData, { staleTime: 10000 })

    return { data, isLoading, isError, refetch }

    // return useQuery(key, fetchData, config)
}

// const GET_BRANDS = gql`
//     query{
//         getAllBrands{
//         name
//         founded
//         vehicles{
//             name
//             price
//         }
//         }
//     } 
// `

// const { data, isError, isLoading, refetch } = useGraphQLQuery('brands', GET_BRANDS)