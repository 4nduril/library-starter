import { useState, useRef, useEffect } from "react";

export const usePropsThatChanged = <P extends {}>(props: P) => {
  const [propsThatChanged, setPropsThatChanged] = useState(new Set<string>());
  const prevProps = useRef<P>();
  useEffect(() => {
    if (prevProps.current) {
      const allKeys = Object.keys({ ...prevProps.current, ...props });
      const changed = allKeys.reduce((changed, key) => {
        return prevProps.current[key] !== props[key]
          ? changed.add(key)
          : changed;
      }, new Set<string>());
      setPropsThatChanged(changed);
    }
    prevProps.current = props;
  }, [setPropsThatChanged, props]);
  return propsThatChanged;
};
