// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { RoutableProps, route } from 'preact-router';
import { Layout } from 'js/components/Layout';
import { useChecklistRepository } from 'js/hooks/useChecklistRepository';
import {BackButton} from "js/components/BackButton";

/**
 * The checklist page. This is where the user uses a checklist.
 */
export const NewChecklistPage = (_: RoutableProps) => {
  const [name, setName] = useState('');
  const checklistRepository = useChecklistRepository();

  const onInput: JSX.GenericEventHandler<HTMLInputElement> = (event) => {
    setName((event.target as HTMLInputElement).value);
  };
  const onSubmit: JSX.GenericEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // TODO: create new checklist
    checklistRepository
      .createChecklistAsync(name)
      .then(checklist => route(`/checklists/${checklist.id}`, true));
    // TODO: redirect to new checklist
  };

  return (
    <form onSubmit={onSubmit}>
      <Layout.Header.Left><BackButton /></Layout.Header.Left>
      <Layout.Header.Title documentTitle="New Checklist!">New Checklist!</Layout.Header.Title>
      <Layout.Header.Right></Layout.Header.Right>
      <label>
        Checklist Name:
        <input type="text" value={name} onInput={onInput} />
      </label>
      <button class="button-primary" type="submit">Create!</button>
    </form>
  );
};
