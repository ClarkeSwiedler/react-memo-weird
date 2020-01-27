import React, { FC, useState, memo } from "react";

const testStrings: string[] = ["One", "Two", "Three", "Four", "Five"];

interface ListItemProps {
  selected: boolean;
  item: string;
  onSelected: (item: string) => void;
}

const ListItem: FC<ListItemProps> = memo(
  props => {
    return (
      <div
        onClick={() => props.onSelected(props.item)}
        style={{
          backgroundColor: `${props.selected ? "darkred" : "darkblue"}`,
          width: "100px",
          height: "65px",
          color: "white"
        }}
      >
        {props.item}
      </div>
    );
  },
  propsAreEqual
);

function propsAreEqual(prev: ListItemProps, next: ListItemProps) {
  return prev.selected === next.selected;
  // return false;
}

const SelectableList = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      // setSelectedItems(selectedItems.filter(name => name !== item));
      setSelectedItems(selectedItems => selectedItems.filter(name => name !== item));
    } else {
      // setSelectedItems([...selectedItems, item]);
      setSelectedItems(selectedItems => [...selectedItems, item]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {testStrings.map(item => (
        <ListItem
          onSelected={handleItemSelection}
          selected={selectedItems.includes(item)}
          item={item}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <SelectableList />
    </div>
  );
};

export default App;
