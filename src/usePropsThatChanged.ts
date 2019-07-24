import { useState, useRef, useEffect } from "react";

export const usePropsThatChanged = <P, K extends keyof P>(
  props: P
): Set<string> => {
  const [propsThatChanged, setPropsThatChanged] = useState(new Set<string>());
  const prevProps = useRef<P>();
  useEffect(() => {
    if (prevProps.current) {
      const allKeys = Object.keys({
        ...prevProps.current,
        ...props
      }) as Extract<K, string>[];
      const changed = allKeys.reduce((changed, key: Extract<K, string>) => {
        return prevProps.current && prevProps.current[key] !== props[key]
          ? changed.add(key)
          : changed;
      }, new Set<string>());
      setPropsThatChanged(changed);
    }
    prevProps.current = props;
  }, [setPropsThatChanged, props]);
  return propsThatChanged;
};
