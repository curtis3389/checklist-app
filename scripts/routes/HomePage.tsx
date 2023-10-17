// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { RoutableProps } from 'preact-router';
import { Layout } from 'js/components/Layout';

/**
 * The home page. This is where they learn about the app.
 */
export const HomePage = (_: RoutableProps) => {
  return (
    <div class="row">
      <Layout.Header.Left>&nbsp;</Layout.Header.Left>
      <Layout.Header.Title documentTitle="chcklst!">
        <h1>chcklst!</h1>
      </Layout.Header.Title>
      <Layout.Header.Right></Layout.Header.Right>
      <h2>Reusable checklists! Oh my!</h2>
      <p>
        chcklst is here to solve all your checklist needs!
      </p>
      <p>
        Make a checklist! Use it! Reuse it! Share it!
      </p>
      <p>
        Use it some more! Read your usage history!
      </p>
      <p>
        Weep tears of joy as all you checklist problems are solved!
      </p>
      <label>
        <a class="button button-primary" href="/checklists">Get Started Now! Hurry!</a>
      </label>
      <h3>Business Solutions</h3>
      <p>
        Are you a business? Do you want to do even more business using checklists?
      </p>
      <p>
        We can help you create, manage, and track checklists your employees will love being required to use!
      </p>
      <p>
        Send an email to b2b@chcklst.org to discuss amazing details like whitelisting, localization, integrations, pricing, and much much more!
        Serious inquiries only, please.
      </p>
    </div>
  );
};
