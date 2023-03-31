import React from "react";
import Avatar from "../Avatar/Avatar";
import "./SummaryTable.css";

const SummaryTable = () => {
  return (
    <table className="tablecontainer">
      <colgroup>
        <col style={{ width: "50%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "25%" }} />
      </colgroup>
      <tr className="table-heading">
        <th>Users</th>
        <th>Answered</th>
        <th>Created</th>
      </tr>
      <tr className="tables-rows">
        <td className="tableAvatar-username">
          <Avatar />
          <div className="user-descr">
            <p className="userInfo">FirstName LastName</p>
            <p className="userInfo-user">username</p>
          </div>
        </td>
        <td className="info">4</td>
        <td className="info">3</td>
      </tr>
      <tr className="tables-rows">
        <td className="tableAvatar-username">
          <Avatar />
          <div className="user-descr">
            <p className="userInfo">FirstName LastName</p>
            <p className="userInfo-user">username</p>
          </div>
        </td>
        <td className="info">4</td>
        <td className="info">3</td>
      </tr>

    </table>
  );
};

export default SummaryTable;
