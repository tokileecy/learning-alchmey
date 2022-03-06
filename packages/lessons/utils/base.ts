import getConfig from 'next/config'
import { createAlchemyWeb3 } from '@alch/alchemy-web3'

export const delay = (n: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000)
  })
}

export const getLatestBlock = async (): Promise<number> => {
  const { ALCHEMYAPI_API_URL } = getConfig().publicRuntimeConfig
  const web3 = createAlchemyWeb3(ALCHEMYAPI_API_URL)
  const blockNumber = await web3.eth.getBlockNumber()

  await delay(0.5)

  return blockNumber
}
