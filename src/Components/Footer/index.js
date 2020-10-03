import React, { Component } from 'react'

import Facebook from '../../Assets/icons/social/facebook.svg'
import Instagram from '../../Assets/icons/social/instagram.svg'
import Linkedin from '../../Assets/icons/social/linkedin.svg'
import Twitter from '../../Assets/icons/social/twitter.svg'

import './footer.scss'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'

export default class Footer extends Component {
    _isActive = (url) => this.props.url === url

    _getLink = (name, url) => (
        <li className={this._isActive(url) ? 'active' : ''}>
            <a href={this._isActive(url) ? '#' : url} target='_blank'>
                {name}
            </a>
        </li>
    )

    _getSocialLink = (name, img, url) => (
        <a href={url} target='_blan k'>
            <img src={img} alt={name} />
        </a>
    )

    _getYear = () => new Date().getFullYear().toString()

    render() {
        return (
            <footer>
                <Container fluid>
                    <Row>
                        <Col xl={{ span: 3, offset: 0 }} col={11}>
                            <Row>
                                <Col>
                                    <p className='logo'>Tp.Connects</p>
                                    <p className='copyright'>
                                        ©{this._getYear()}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>Resources</p>
                            <ul>
                                {this._getLink('Learn', '#')}
                                {this._getLink('Docs', '#')}
                                {this._getLink('Github', '#')}
                            </ul>
                        </Col>
                        <Col>
                            <p>Contact</p>
                            <ul>
                                {this._getLink(
                                    'Reach out',
                                    '/contact/reach-out'
                                )}
                                {this._getLink('Support', '/contact/support')}
                            </ul>
                        </Col>
                        <Col className='community'>
                            <p>Community</p>
                            {this._getSocialLink('Facebook', Facebook, '#')}
                            {this._getSocialLink('Instagram', Instagram, '#')}
                            {this._getSocialLink('Linkedin', Linkedin, '#')}
                            {this._getSocialLink('Twitter', Twitter, '#')}
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
