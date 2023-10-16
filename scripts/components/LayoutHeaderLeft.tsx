import {Fragment} from "preact";
import {withProvidedProps} from "js/components/withProvidedProps";

/**
 * The left slot of the layout header.
 * This sets the state of the left slot to the given children.
 */
export const LayoutHeaderLeft = withProvidedProps((props) => {
  const {children} = props;
  return (
    <Fragment>{children}</Fragment>
  );
});
