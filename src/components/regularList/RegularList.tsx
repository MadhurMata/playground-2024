import { EventItem, Hero } from 'src/types/heroe';

interface RegularListProps {
  items: EventItem[] | Hero[];
  resourceName: string;
  styles: string;
  itemComponent: React.ComponentType;
  emptyItemsMessage?: string;
}

const RegularList = ({
  items,
  resourceName,
  styles,
  itemComponent: ItemComponent,
  emptyItemsMessage
}: RegularListProps): JSX.Element => {
  if (items.length === 0)
    return (
      <>
        <h5>{emptyItemsMessage}</h5>
      </>
    );
  return (
    <div className={styles}>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RegularList;
