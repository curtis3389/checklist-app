import {JSX} from "preact";
import {ChecklistItem} from "js/models/ChecklistItem";
import {useState} from "preact/hooks";
import {CheckboxInput} from 'js/components/CheckboxInput';

export interface ChecklistItemEditorProps {
  item: ChecklistItem;
  deleteItem: (item: ChecklistItem) => void;
  updateItem: (newItem: ChecklistItem) => void;
}

export function ChecklistItemEditor(props: ChecklistItemEditorProps): JSX.Element {
  const { item, deleteItem, updateItem } = props;
  const [text, setText] = useState(item.text);
  const onDelete = () => {
    deleteItem(item);
  };
  const onInput: JSX.GenericEventHandler<HTMLInputElement> = (event) => {
    const newText = (event.target as HTMLInputElement).value;
    updateItem({
      ...item,
      text: newText,
    });
    setText(newText);
  };

  return (
    <li>
      <CheckboxInput>
        <input type="text" value={text} onInput={onInput} />
        <button onClick={onDelete}>Delete</button>
      </CheckboxInput>
    </li>
  );
}
