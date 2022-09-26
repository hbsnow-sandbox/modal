import { Button } from "../../components/Button";
import { useCount } from "../../hooks/useCount";

export const HomePage = (): JSX.Element => {
  const [count, { countUp, countDown }] = useCount();

  return (
    <div>
      <p>count is: {count}</p>
      <p>
        <Button onClick={() => countUp()}>count up</Button>
      </p>
      <p>
        <Button onClick={() => countDown()}>count down</Button>
      </p>
    </div>
  );
};
