import Counter from "../Counter/Counter";

const WorkerCard = (props: any) => {
  const { name, position } = props;

  return (
    <>
      <h2 className="worker-name">{name}</h2>
      <h2 className="worker-position">{position}</h2>
      <Counter />
    </>
  );
};

export default WorkerCard;
