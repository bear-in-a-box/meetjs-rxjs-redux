import { useEffect, useState } from "react";

export default function useSubscribe(observable$, initialValue = null) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const sub = observable$.subscribe(setValue);
    return () => sub.unsubscribe();
  }, [observable$]);

  return value;
}
