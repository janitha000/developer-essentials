import useInput from "./useInput";
import { renderHook, act } from '@testing-library/react-hooks'

describe('useInput Hook', () => {
    //let results: any;
    // const renderHook = () => {
    //     const HookWrapper: React.FC = () => {
    //         results = useInput('test')
    //         return null;
    //     }

    //     mount(<HookWrapper />)
    //     return results;
    // }

    it('should have default value with shared function', () => {
        const { result } = renderHook(() => useInput('test'))
        expect(result.current.value).toEqual('test')
    })


    // it('should have default value', () => {
    //     let globalVal;
    //     const HookWrapper: React.FC = () => {
    //         let { value } = useInput('test')
    //         globalVal = value
    //         return null
    //     }

    //     mount(<HookWrapper />)
    //     expect(globalVal).toEqual('test')
    // })

    it('should set the value', () => {
        const { result } = renderHook(() => useInput('test'))
        act(() => {
            result.current.setValue('test2')
        })
        expect(result.current.value).toEqual('test2')
    })

    it('should reset the value', () => {
        const { result } = renderHook(() => useInput('test'))
        act(() => {
            result.current.reset()
        })
        expect(result.current.value).toEqual('')
    })


})