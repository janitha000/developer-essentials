import { fireEvent, render, screen } from "@testing-library/react"
import { mount, shallow } from "enzyme"
import React from 'react'

import Count from "./Count"
import CountIncrement from "./CountIncrement"

describe('Count component', () => {
    it('it should render ', () => {
        const { getByText } = render(<Count />)
        expect(getByText('Current value of the counter is 0')).toBeInTheDocument()
        expect(getByText('Increment')).toBeInTheDocument()
        expect(getByText('Decrement')).toBeInTheDocument()
    })

    it('should increase the count', () => {
        const { getByText } = render(<Count />)
        const incrementBtn = getByText('Increment')

        fireEvent.click(incrementBtn)
        expect(getByText('Current value of the counter is 1')).toBeInTheDocument()

    })

    it('should decrease the count', () => {
        const { getByText } = render(<Count />)
        const decrementBtn = getByText('Decrement')

        fireEvent.click(decrementBtn)
        expect(getByText('Current value of the counter is -1')).toBeInTheDocument()
    })

    it('should render two buttons', () => {
        let wrapper = mount(<Count />)
        expect(wrapper.find('button').length).toEqual(2)
    })

    it('should click only once', () => {
        const setCount = jest.fn()
        const { getByText } = render(<CountIncrement />)

        fireEvent.click(getByText('Increment'))

    })




})