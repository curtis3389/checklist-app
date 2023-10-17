// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { RoutableProps } from 'preact-router';
import {Layout} from "js/components/Layout";
import {BackButton} from "js/components/BackButton";
import {Fragment} from "preact";

/**
 * The error page.
 * TODO: implement this
 */
export const ErrorPage = (_: RoutableProps) => {
  return (
    <Fragment>
      <Layout.Header.Left><BackButton /></Layout.Header.Left>
      <Layout.Header.Title documentTitle="chcklst! - Error">
        <h1>Error</h1>
      </Layout.Header.Title>
      <Layout.Header.Right></Layout.Header.Right>
    </Fragment>
  );
}
