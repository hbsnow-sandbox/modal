import { useRef, useState } from "react";

import styles from "./app.module.css";

export const App = (): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null);

  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <div className={styles.action}>
        <button onClick={() => ref.current?.showModal()}>Open Modal 1</button>

        <button
          onClick={() => {
            document.body.classList.add("open");
            setHidden(false);
          }}
        >
          Open Modal 2
        </button>
      </div>

      {[...Array(100)].map((_, i) => (
        <p key={i}>{i}</p>
      ))}

      <dialog className={styles.dialog} ref={ref}>
        <p>Hello, world!</p>

        <button onClick={() => ref.current?.close()}>Close Modal</button>
      </dialog>

      <div
        className={styles.divDialog}
        hidden={hidden}
        role="dialog"
        aria-modal="true"
      >
        <p>Hello, world!</p>

        <button
          onClick={() => {
            document.body.classList.remove("open");
            setHidden(true);
          }}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};
