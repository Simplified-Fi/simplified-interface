import { Currency, ETHER, Token } from 'swap-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import list from './zeroTokenList'

const getTokenLogoURL = (symbol: string) => {
  if (symbol == 'WETH') {
    return `https://ipfs.io/ipfs/QmR9mxnVcTJLWf2RPA2PCso3f3jxxoBqVVVDUmUxMa7kiE`
  }
  else if(symbol == 'DAI') {
    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
  }
  else if(symbol == 'USDC'){
    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png";
  }
  else if (symbol == 'USDT'){
    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  }
}

const EthereumLogo = 'https://ipfs.io/ipfs/QmR9mxnVcTJLWf2RPA2PCso3f3jxxoBqVVVDUmUxMa7kiE';
const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
  logUrl
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
  logUrl?: string | undefined
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []
    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.symbol)]
      }

      return [getTokenLogoURL(currency.symbol)]
    }
    return []
  }, [currency, uriLocations])
  if (currency === ETHER) {
    return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
  }
  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
