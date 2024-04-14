'use client'

import {useEffect} from 'react'

const Error = ({error, reset} : {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    useEffect (() => {
        console.error(error)
    }, [error])
  return (
    <div>
        <h1 className='text-4xl font-semibold text-black'>Error</h1>
        {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Error