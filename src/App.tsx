import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './App.css';

import splashScreen from './assets/splashScreen.png';
import githubIcon from './assets/githubIcon.png';
import discordIcon from './assets/discordIcon.png';
import pawnIcon from './assets/pawnIcon.png';

class App extends Component {
  render() {
    return (
      <Row center={'xs'} between={'xs'} className={'center-v'}>
        <Col xs={12}>
          <Row>
            <Col xs>
              <img src={splashScreen} alt={'SA-MP Development'} />
            </Col>
          </Row>
          <Row around={'xs'}>
            <Col xs={6} className={'link-icons around-xs row'}>
              <a href={'https://github.com/samp-dev'}>
                <img src={githubIcon} />
              </a>
              <a href={'https://discord.sa-mp.dev'}>
                <img src={discordIcon} />
              </a>
              <a href={'https://fiddle.sa-mp.dev'}>
                <img src={pawnIcon} />
              </a>
            </Col>
          </Row>
          <Row className={'footer'}>
            <Col xs={12} className={'center-v'}>
              This website and all sub-services are not endorsed or associated with sa-mp.com.
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default App;
