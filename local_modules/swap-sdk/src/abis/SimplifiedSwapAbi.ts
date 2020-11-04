import SimplifiedSwapPair from './SimplifiedSwapPair.json'
import SimplifiedSwapFactory from './SimplifiedSwapFactory.json'
import SimplifiedSwapERC20 from './SimplifiedSwapERC20.json'
import ISimplifiedSwapPair from './ISimplifiedSwapPair.json'

import MainnetSimplifiedSwapPair from './mainnet/SimplifiedSwapPair.json'
import MainnetSimplifiedSwapFactory from './mainnet/SimplifiedSwapFactory.json'
import MainnetSimplifiedSwapERC20 from './mainnet/SimplifiedSwapERC20.json'
import MainnetISimplifiedSwapPair from './mainnet/ISimplifiedSwapPair.json'

export const ERC20 = process.env.REACT_APP_CHAIN_ID === '1' ? MainnetSimplifiedSwapERC20 : SimplifiedSwapERC20
export const SimplifiedSwapPairAbi = process.env.REACT_APP_CHAIN_ID === '1' ? MainnetSimplifiedSwapPair : SimplifiedSwapPair
export const SimplifiedSwapFactoryAbi = process.env.REACT_APP_CHAIN_ID === '1' ? MainnetSimplifiedSwapFactory : SimplifiedSwapFactory
export const ISimplifiedSwapPairInterface = process.env.REACT_APP_CHAIN_ID === '1' ? MainnetISimplifiedSwapPair : ISimplifiedSwapPair
