import React, { FunctionComponent } from "react";

import { usePropsThatChanged } from "./usePropsThatChanged";

interface ExampleComponentMinimumProps {
  annotation?: string;
}

interface ExampleComponentProps extends ExampleComponentMinimumProps {}

export const ExampleComponent: FunctionComponent<
  ExampleComponentProps
> = props => {
  const propsThatChanged = usePropsThatChanged(props);
  return (
    <div>
      <strong>{props.annotation}</strong>
      <p>These props changed before last render: {propsThatChanged}</p>
    </div>
  );
};
