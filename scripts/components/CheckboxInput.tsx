import {JSX, RenderableProps} from 'preact';
import {AppIcon} from 'js/components/AppIcon';

export function CheckboxInput(props: RenderableProps<{}>): JSX.Element {
  const {children, ...rest} = props;
  return (
    <label class="checkbox">
      <input type="checkbox" class="checkbox__input" {...rest} />
      <AppIcon />
      {children}
    </label>
  );
}
