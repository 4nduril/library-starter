import React from "react";

import { usePropsThatChanged } from "./usePropsThatChanged";

export const ExampleComponent = props => {
	const propsThatChanged = usePropsThatChanged(props);
	return (
		<div>
			<strong>{props.annotation}</strong>
			<p>These props changed before last render: {propsThatChanged}</p>
		</div>
	);
};
