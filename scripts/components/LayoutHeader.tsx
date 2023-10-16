// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { LayoutTitle } from 'js/components/LayoutTitle';
import {LayoutHeaderLeft} from "js/components/LayoutHeaderLeft";
import {LayoutHeaderRight} from "js/components/LayoutHeaderRight";

export const LayoutHeaderComponent = () => {
  return (
    <div class="row">
      <div class="three columns">
        <LayoutHeaderLeft.Consumer />
      </div>
      <div class="six columns">
        <LayoutTitle.Consumer />
      </div>
      <div class="three columns">
        <LayoutHeaderRight.Consumer />
      </div>
    </div>
  );
};

/**
 * The header of the app's layout.
 */
export const LayoutHeader = Object.assign(LayoutHeaderComponent, {
  Left: LayoutHeaderLeft,
  Right: LayoutHeaderRight,
  Title: LayoutTitle,
});
