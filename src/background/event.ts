import { messageActions } from '@/libs/values'

chrome.contextMenus.create({
  id: 'monthToNumber',
  title: 'Month name to Number',
})

chrome.contextMenus.onClicked.addListener(async (item, tab) => {
  if (item.menuItemId === 'monthToNumber') {
    const res = await chrome.tabs.sendMessage(tab?.id!, {
      action: messageActions.replace,
    })
  }
})
