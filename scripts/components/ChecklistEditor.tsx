import {RoutableProps} from 'preact-router';
import {Checklist} from 'js/models/Checklist';
import {JSX} from 'preact';
import {ChecklistItemEditor} from 'js/components/ChecklistItemEditor';
import {ChecklistItem} from 'js/models/ChecklistItem';

export interface ChecklistEditorProps extends RoutableProps {
  checklist: Checklist;
  updateChecklist: (newChecklist: Checklist) => void;
}

function nextItemIndex(checklist: Checklist): number {
  return (checklist.items
    .map(item => item.index)
    .reduce((previous, current) => {
      return current > previous
        ? current
        : previous;
    }, 0) + 1);
}

export function ChecklistEditor(props: ChecklistEditorProps): JSX.Element {
  const { checklist, updateChecklist} = props;
  const addItem = () => {
    const newItems = [...checklist.items];
    newItems.push({
      index: nextItemIndex(checklist),
      text: undefined,
    });
    updateChecklist({
      ...checklist,
      items: newItems,
    });
  };
  const deleteItem = (item: ChecklistItem) => {
    updateChecklist({
      ...checklist,
      items: checklist.items.filter(i => i.index !== item.index),
    })
  };
  const updateItem = (newItem: ChecklistItem) => {
    updateChecklist({
      ...checklist,
      items: checklist.items.map(item => item.index === newItem.index
        ? newItem
        : item),
    });
  };

  return (
    <ul class="list">
      { checklist?.items.map(item => <ChecklistItemEditor key={item.index} item={item} deleteItem={deleteItem} updateItem={updateItem} />) }
      <li>
        <button onClick={addItem}>+ Add Item</button>
      </li>
    </ul>
  );
}
