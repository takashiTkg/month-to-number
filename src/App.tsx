import { messageActions } from '@/libs/values'

function App() {
  const handleClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    const res = await chrome.tabs.sendMessage(tab.id!, { action: messageActions.replace })
  }

  return (
    <div className='container mx-auto px-4 py-4'>
      <h1 className='text-3xl'>Month name to Number</h1>
      <div className='mt-4'>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={handleClick}
        >
          replace
        </button>
      </div>
    </div>
  )
}

export default App
