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
    const newQuestions = allQuestions.filter(
      (q) =>
        !q?.optionOne?.votes.includes(AuthUser?.loggedInUser?.username) &&
        !q?.optionTwo?.votes.includes(AuthUser?.loggedInUser?.username)
    );
    const completed = allQuestions.filter(
      (q) =>
        q?.optionOne?.votes.includes(AuthUser?.loggedInUser?.username) ||
        q?.optionTwo?.votes.includes(AuthUser?.loggedInUser?.username)
    );
    return {
        new:newQuestions,
        complete: completed
    }
  }

