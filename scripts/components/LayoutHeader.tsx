import { LayoutTitle } from 'js/components/LayoutTitle';

export const LayoutHeader = () => {
  return (
    <div>
      Back
      <LayoutTitle.Consumer />
    </div>
  );
};
