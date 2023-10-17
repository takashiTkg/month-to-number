import { useEffect } from 'react'
import { messageActions } from '@/libs/values'

function App() {
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', 'corporate')
  }, [])

  const handleClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    const res = await chrome.tabs.sendMessage(tab.id!, { action: messageActions.replace })
    console.log(res)
  }

  return (
    <div className='container mx-auto px-4 py-4'>
      <h1 className='text-3xl'>Month name to Number</h1>
      <div className='mt-4'>
        <button className='btn btn-primary' onClick={handleClick}>
          replace
        </button>
      </div>
    </div>
  )
}

export default App
