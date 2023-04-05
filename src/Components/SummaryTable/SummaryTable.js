import React from "react";
import Avatar from "../Avatar/Avatar";
import "./SummaryTable.css";

const SummaryTable = ({ allUsers }) => {
  const { data } = allUsers;
  let usersArray = [];
  for (let key in data) {
    const { id, name, avatarURL, answers, questions } = data[key];
    const answered = Object.keys(answers).length;
    const created = questions.length;
    const totalPoll = answered + created;
    usersArray.push({
      id,
      name,
      avatarURL,
      answered,
      created,
      totalPoll,
    });
  }
  return (
    <table className="tablecontainer">
      <colgroup>
        <col style={{ width: "50%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "25%" }} />
      </colgroup>
      <thead>
        <tr className="table-heading">
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {usersArray
          ?.sort((a, b) => b.totalPoll - a.totalPoll)
          ?.map((user) => {
            return (
              <tr className="tables-rows" key={user?.id}>
                <td className="tableAvatar-username">
                  <Avatar AvatarUrl={user?.avatarURL} />
                  <div className="user-descr">
                    <p className="userInfo">{user?.name}</p>
                    <p className="userInfo-user">{user?.id}</p>
                  </div>
                </td>
                <td className="info">{user.answered}</td>
                <td className="info">{user.created}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SummaryTable;
