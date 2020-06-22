import React from "react";
import { Item } from "../model";

type Props = {
  //should receieve a todo item object
  item: Item;

  // and a function that we don't havt to give
  // anything, and doesnot return aything either
  // (it "just does" something (void))

  toggleDone: () => void;

  //..maybe we'll add some more stuff later,
  // this is enough to function for now
};

export default function TodoItem(props: Props) {
  return (
    <div>
      <p>some text</p>
    </div>
  );
}
