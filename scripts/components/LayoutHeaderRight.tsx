import {withProvidedProps} from "js/components/withProvidedProps";
import {Fragment} from "preact";

/**
 * The right slot of the layout header.
 * This sets the state of the right slot to the given children.
 */
export const LayoutHeaderRight = withProvidedProps((props) => {
  const {children} = props;
  return (
    <Fragment>{children}</Fragment>
  );
});
