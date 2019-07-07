import { useState, useRef, useEffect } from "react";

export const useWhichPropsChanged = props => {
	const [propsThatChanged, setPropsThatChanged] = useState(new Set());
	const prevProps = useRef();
	useEffect(() => {
		if (prevProps.current) {
			const allKeys = Object.keys({ ...prevProps.current, ...props });
			const changed = allKeys.reduce((changed, key) => {
				return prevProps.current[key] !== props[key]
					? changed.add(key)
					: changed;
			}, new Set());
			setPropsThatChanged(changed);
		}
		prevProps.current = props;
	}, [setPropsThatChanged, props]);
	return propsThatChanged;
};
