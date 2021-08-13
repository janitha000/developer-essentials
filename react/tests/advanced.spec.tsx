import React from 'react'
import { MemoryRouter } from "react-router"
import App from "../../App"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import Count from "../Count/Count"
import { QueryClient, QueryClientProvider } from 'react-query'
import GBrand from './GBrand'
import GraphQLVehicles, { Brand } from "./GraphQLVehicles"
import { useGraphQLQuery } from '../../Hooks/useGraphQLQuery'
import * as queryHooks from '../../Hooks/useGraphQLQuery'
// jest.mock('../../Hooks/useGraphQLQuery', () => ({
//     useGraphQLQuery: () => ({ data: 'test data' })
// }));

const mockedData = { getAllBrands: [{ name: "BMW", founded: 1990, vehicles: [{ name: "320i", price: 28000 }] }] }
const mockedBrandData: Brand = { name: "BMW", founded: 1990, vehicles: [{ name: "320i", price: 28000 }] }

const mockRefetch = jest.fn()

describe('GraphQL Vehicle Component', () => {
    beforeEach(() => {

    })

    afterAll(() => {
        jest.clearAllMocks()
    })



    it('Should render with the title', () => {
        jest.spyOn(queryHooks, 'useGraphQLQuery').mockImplementation(() => ({ data: '', isError: false, isLoading: false, refetch: mockRefetch }));
        const queryClient = new QueryClient();
        render(<QueryClientProvider client={queryClient}>
            <GraphQLVehicles />
        </QueryClientProvider>)
        expect(screen.getByText('Vehicle Brands')).toBeInTheDocument()
    })

    it('Should render with the loading', () => {
        jest.spyOn(queryHooks, 'useGraphQLQuery').mockImplementation(() => ({ data: '', isError: false, isLoading: true, refetch: mockRefetch }));
        const queryClient = new QueryClient();
        render(<QueryClientProvider client={queryClient}>
            <GraphQLVehicles />
        </QueryClientProvider>)
        expect(screen.getByText('Loading data...')).toBeInTheDocument()
    })

    it('Should render with the error', () => {
        jest.spyOn(queryHooks, 'useGraphQLQuery').mockImplementation(() => ({ data: '', isError: true, isLoading: false, refetch: mockRefetch }));
        const queryClient = new QueryClient();
        render(<QueryClientProvider client={queryClient}>
            <GraphQLVehicles />
        </QueryClientProvider>)
        expect(screen.getByText('Something is wrong.')).toBeInTheDocument()
    })

    it('Should render with the correct data', () => {
        jest.spyOn(queryHooks, 'useGraphQLQuery').mockImplementation(() => ({ data: mockedData, isError: true, isLoading: false, refetch: mockRefetch }));
        const queryClient = new QueryClient();
        render(<QueryClientProvider client={queryClient}>
            <GraphQLVehicles />
        </QueryClientProvider>)
        expect(screen.getByText(mockedData.getAllBrands[0].name)).toBeInTheDocument()
    })





    // it('should navigate using the url', () => {
    //     jest.mock('./GraphQLVehicles')
    //     const { getByText } = render(<MemoryRouter initialEntries={['/gvehicles']}><App /></MemoryRouter>)
    //     expect(getByText('Vehicle Brands')).toBeInTheDocument()
    // })

    // beforeAll(() => {
    //     const queryClient = new QueryClient();
    //     const wrapper = ({ children } : any) => (
    //       <QueryClientProvider client={queryClient}>
    //         {children}
    //       </QueryClientProvider>
    //     );
    // })



})

const refreshMock = jest.fn()

describe('GraphQL Vehicle Brand', () => {
    afterEach(cleanup)

    it('should render with static text', () => {
        const { } = render(<GBrand brand={mockedBrandData} onRefresh={refreshMock} />)
        expect(screen.getByText(mockedBrandData.name)).toBeInTheDocument()
        expect(screen.getByText(mockedBrandData.founded)).toBeInTheDocument()
    })
    it('should render with vehicles text', () => {
        const { } = render(<GBrand brand={mockedBrandData} onRefresh={refreshMock} />)
        expect(screen.getByText('Vehicles')).toBeInTheDocument()
        expect(screen.getByText(mockedBrandData.vehicles[0].name)).toBeInTheDocument()
        expect(screen.getByText(mockedBrandData.vehicles[0].price)).toBeInTheDocument()
    })

    it('should call refresh', async () => {
        const { } = render(<GBrand brand={mockedBrandData} onRefresh={refreshMock} />)
        fireEvent.click(await screen.getByText("Refresh"));
        expect(refreshMock).toHaveBeenCalledTimes(1);
    })
})
