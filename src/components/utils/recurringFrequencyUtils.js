export const subscriptionFreqOptions = [
  {shortName: '1 time', longName: '1 time', value: 'SINGLE'},
  {shortName: 'Weekly', longName: 'Weekly', value: 'WEEKLY'},
  {shortName: '2 Weeks', longName: 'Every 2 Weeks', value: '2_WEEKS'},
  {shortName: '3 Weeks', longName: 'Every 3 Weeks', value: '3_WEEKS'},
  {shortName: '4 Weeks', longName: 'Every 4 Weeks', value: '4_WEEKS'},
]

const subscriptionFreqMap = new Map(subscriptionFreqOptions.map((opt) => [opt.value, opt]))

export const getLongName = (frequency) => {
  const opt = subscriptionFreqMap.get(frequency)
  return opt? opt.longName : ''
}

export const getShortName = (frequency) => {
  const opt = subscriptionFreqMap.get(frequency)
  return opt? opt.shortName : ''
}