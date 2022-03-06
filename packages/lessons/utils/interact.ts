import { delay } from './base'

export enum CONNECTED_STATUS {
  'NOT_INSTALL' = 'NOT_INSTALL',
  'NOT_CONNECTED' = 'NOT_CONNECTED',
  'CONNECTED' = 'CONNECTED',
  'CONNECTED_FAILED' = 'CONNECTED_FAILED',
  'CONNECTING' = 'CONNECTING',
}

export type ConnectResult = {
  status: CONNECTED_STATUS
  address: string
  error?: any
}

export const connectWallet = async (): Promise<ConnectResult> => {
  if (window.ethereum) {
    try {
      const addressArray = (await window.ethereum.request({
        method: 'eth_requestAccounts',
      })) as any[]

      await delay(0.5)

      const obj = {
        status: CONNECTED_STATUS.CONNECTED,
        address: addressArray[0],
      }

      return obj
    } catch (error) {
      return {
        address: '',
        status: CONNECTED_STATUS.CONNECTED_FAILED,
        error,
      }
    }
  } else {
    return {
      address: '',
      status: CONNECTED_STATUS.NOT_INSTALL,
    }
  }
}

export const getCurrentWalletConnected = async (): Promise<ConnectResult> => {
  if (window.ethereum) {
    try {
      const addressArray = (await window.ethereum.request({
        method: 'eth_accounts',
      })) as any[]

      await delay(0.5)

      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: CONNECTED_STATUS.CONNECTED,
        }
      } else {
        return {
          address: '',
          status: CONNECTED_STATUS.NOT_CONNECTED,
        }
      }
    } catch (error) {
      return {
        address: '',
        status: CONNECTED_STATUS.CONNECTED_FAILED,
        error,
      }
    }
  } else {
    return {
      address: '',
      status: CONNECTED_STATUS.NOT_INSTALL,
    }
  }
}
