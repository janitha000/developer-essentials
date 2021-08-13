import React, { useState } from 'react'

const useInput = (initialValue: string | number) => {
    const [value, setValue] = useState<string | number>(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value)
            }
        }
    }
}


export default useInput