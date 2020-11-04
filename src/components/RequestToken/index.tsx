import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import AppBody from '../../pages/AppBody'
import { ButtonPrimary } from '../Button'
import { AutoColumn } from '../Column'
import { Wrapper } from '../swap/styleds'
import { Text } from 'rebass'
import './RequestToken.css';
import fire from '../../state/fb.config'

class RequestToken extends Component {

    constructor(props: Readonly<{}>) {
        super(props);
    }

    submittoken(e:any){
        alert('here')
        
    }

    render() {

        console.log(fire);

        return (
            <AppBody>
                <Wrapper>
                    <AutoColumn gap="lg" justify="center">
                    <Text fontSize={22} fontWeight={700}>
                            Submit Your Token
                        </Text>
                        <div className="form-group">
                            <label className="form-label" >Token Name</label>
                            <input type="text" name="tokenname" className="form-control" placeholder="Enter your Token name here"/>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Token address</label>
                            <input type="text" name="address" className="form-control" placeholder="Enter your Token address here"/>
                        </div>


                        <div className="form-group">
                            <label className="form-label">Token symbol</label>
                            <input type="text" name="symbol" className="form-control" placeholder="Enter your Token Symbol here" />
                        </div>

                        <div className="form-group">
                            <label className="form-label"  >Token Decimals</label>
                            <input type="text" name="decimals" className="form-control" placeholder="Enter your Token Decimals here"/>
                        </div>

                        <div className="form-group">
                            <label className="form-label" >Token Logo URI</label>
                            <input type="text" name="logoURI" className="form-control" placeholder="Enter your Token Logo URI here"/>
                        </div>
                        <ButtonPrimary id="join-pool-button"  onClick={this.submittoken} >
                            <Text fontWeight={500} fontSize={20}>
                                Submit
                            </Text>
                        </ButtonPrimary>
                    </AutoColumn>
                </Wrapper>
            </AppBody>

        )
    }

}
export default RequestToken;