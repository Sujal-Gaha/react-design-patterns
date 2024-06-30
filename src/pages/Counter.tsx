import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, incrementCount, resetCount, decrementCount } = useCounter();
  return (
    <main className="h-screen w-screen bg-[#1c1c1c] flex items-center justify-center">
      <div className="h-1/2 w-1/2 bg-white rounded-md flex items-center justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-9xl text-center">{count}</h1>
          <div className="flex gap-4">
            <Button btnText="Increment" onClick={incrementCount} />
            <Button btnText="Reset" onClick={resetCount} />
            <Button btnText="Decrement" onClick={decrementCount} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Counter;
