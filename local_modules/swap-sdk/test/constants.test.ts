import { INIT_CODE_HASH } from '../src/constants'
import { SimplifiedSwapPairAbi } from '../src/abis/SimplifiedSwapAbi'

import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${SimplifiedSwapPairAbi.bytecode}`])
console.log("Generate HasH==>", COMPUTED_INIT_CODE_HASH);

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
