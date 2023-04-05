import "./VoteResult.css"
const VoteResult = ({ result }) => {
  return (
    <div className="summaryContainer">
      <p>{result.text}</p>
      <p>
        No of people voted this option: <span>{result.votersNo}</span>{" "}
      </p>
      <p>
        % of people who voted this option out of total voters so far:{" "}
        <span>{`${result.percentageSofar} %`}</span>
      </p>
      <p>
        % of people who voted this option out of all users:{" "}
        <span>{`${result.percentageTotal} %`}</span>
      </p>
    </div>
  );
};

export default VoteResult;
