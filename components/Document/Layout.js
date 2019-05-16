/* eslint-disable no-unused-vars */
import Head from 'next/head';
import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import stylesheet from '../../styles/main.scss';

import Header from './Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Mini Block Explorer</title>
          <meta name="description" content="Mini Block Explorer" />
          <link href="/static/css/skel.css" rel="stylesheet" />
          <link href="/static/css/simplebar.min.css" rel="stylesheet" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div id="wrapper">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
