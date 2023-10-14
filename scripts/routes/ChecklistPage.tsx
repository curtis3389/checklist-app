import { Fragment } from 'preact';
import { RoutableProps } from 'preact-router';
import { useChecklist } from 'js/hooks/useChecklist';
import { ChecklistDisplay } from 'js/components/ChecklistDisplay';
import { Layout } from 'js/components/Layout';

export interface ChecklistPageProps extends RoutableProps {
  id?: string;
}

export const ChecklistPage = (props: ChecklistPageProps) => {
  const { id } = props;
  const checklist = useChecklist(Number(id));

  return (
    <Fragment>
      <Layout.Title>{checklist?.title}</Layout.Title>
      <ChecklistDisplay checklist={checklist} />
    </Fragment>
  );
};
