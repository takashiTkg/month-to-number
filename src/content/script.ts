import { messageActions, months } from '@/libs/values'

chrome.runtime.onMessage.addListener(function (requset, sender, sendResponse) {
  switch (requset.action) {
    case messageActions.replace: {
      let beforeInnerHTML = document.body.innerHTML
      months.map((month) => {
        beforeInnerHTML = beforeInnerHTML.replace(
          new RegExp(month.name, 'g'),
          month.value,
        )
        beforeInnerHTML = beforeInnerHTML.replace(
          new RegExp(capitalizeFirstLetter(month.name), 'g'),
          month.value,
        )
      })
      document.body.innerHTML = beforeInnerHTML
      sendResponse(beforeInnerHTML)
      break
    }
    default: {
      console.error('no response type')
    }
  }
  return true
})

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}
