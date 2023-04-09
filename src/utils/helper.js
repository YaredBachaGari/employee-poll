export const  formatDate = (timestamp)=> {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  export const formatTime=(timestamp)=> {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes}${period}`;
  }

  export const  filterData =( Questions,AuthUser)=>{
    const { data } = Questions;
    const allQuestions = Object.values(data).sort((a,b)=>b.timestamp-a.timestamp);
    const newQuestions = allQuestions?.filter(
      (q) =>
        !q?.optionOne?.votes.includes(AuthUser?.loggedInUser?.username) &&
        !q?.optionTwo?.votes.includes(AuthUser?.loggedInUser?.username)
    );
    const completed = allQuestions?.filter(
      (q) =>
        q?.optionOne?.votes.includes(AuthUser?.loggedInUser?.username) ||
        q?.optionTwo?.votes.includes(AuthUser?.loggedInUser?.username)
    );
    return {
        new:newQuestions,
        complete: completed
    }
  }

export const styleButtons =(answered,optionA,optionB, ButtonA, ButtonB  )=>{
  if (answered === "optionOne") {
    optionA.current.style.border = "1px solid green";
    ButtonA.current.style.backgroundColor = "green";
    ButtonB.current.setAttribute("disabled", true);
    ButtonB.current.style.backgroundColor = "#cccccc";
    ButtonB.current.style.color = "#666666";
  }
  if (answered === "optionTwo") {
    optionB.current.style.border = "1px solid green";
    ButtonB.current.style.backgroundColor = "green";
    ButtonA.current.setAttribute("disabled", true);
    ButtonA.current.style.backgroundColor = "#cccccc";
    ButtonA.current.style.color = "#666666";
  }
}

export const selectedInfo = (qid, Questions, allUsers, AuthUser)=>{
  const Questiondata = Questions?.data[qid];
  const UsersData = allUsers?.data;
  const author = Questiondata?.author;
  const optionOne = Questiondata?.optionOne;
  const optionTwo = Questiondata?.optionTwo;
  const avatar = UsersData[author]?.avatarURL;
  const authuser = AuthUser?.loggedInUser?.username;
  const NoOfallUsers = Object.keys(UsersData).length;
const id= UsersData[authuser]?.answers[qid]
  return {
    id,
    author,
    optionOne,
    optionTwo,
    avatar,
    authuser,
    NoOfallUsers,
    pollData : {
      qid,
      author,
      avatar,
      authedUser: authuser,
      optionOne,
      optionTwo,
    }
  }
}