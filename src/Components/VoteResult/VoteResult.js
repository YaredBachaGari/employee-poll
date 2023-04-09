import "./VoteResult.css";
const VoteResult = ({ result }) => {
  const UserChoice = result?.loggedInUserChoice;
  return (
    <div>
      <div
        className={`summaryContainer ${
          UserChoice === "optionOne" && "yourvote"
        }`}
      >
        <p>{result?.textOptions?.one}</p>
        <p>
          No of people voted this option:{" "}
          <span>{result?.votersNo?.optionOne}</span>{" "}
        </p>
        <p>
          % of people who voted this option out of total voters so far:{" "}
          <span>{`${result?.percentageSofar?.optionOne} %`}</span>
        </p>
        <p>
          % of people who voted this option out of all users:{" "}
          <span>{`${result?.percentageTotal?.optionOne} %`}</span>
        </p>
      </div>
      <div
        className={`summaryContainer ${
          UserChoice === "optionTwo" && "yourvote"
        }`}
      >
        <p>{result?.textOptions?.two}</p>
        <p>
          No of people voted this option:{" "}
          <span>{result?.votersNo?.optionTwo}</span>{" "}
        </p>
        <p>
          % of people who voted this option out of total voters so far:{" "}
          <span>{`${result?.percentageSofar?.optionTwo} %`}</span>
        </p>
        <p>
          % of people who voted this option out of all users:{" "}
          <span>{`${result?.percentageTotal?.optionTwo} %`}</span>
        </p>
      </div>
    </div>
  );
};

export default VoteResult;
