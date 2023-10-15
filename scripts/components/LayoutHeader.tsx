// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { BackButton } from 'js/components/BackButton';
import { LayoutTitle } from 'js/components/LayoutTitle';

/**
 * The header of the app's layout.
 */
export const LayoutHeader = () => {
  return (
    <div class="row">
      <div class="three columns">
        <BackButton />
      </div>
      <div class="six columns">
        <LayoutTitle.Consumer />
      </div>
      <div class="three columns">
        Menu
      </div>
    </div>
  );
};

export
