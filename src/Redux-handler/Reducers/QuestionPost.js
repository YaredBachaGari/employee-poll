// import {
//     QuestionPost_request,
//     QuestionPost_Success,
//     QuestionPost_Failed,
//   } from "../Actions/Questions";

  
//   const initialState = {
//     loading: false,
//     data: {},
//     error: "",
//   };
  
//   const questionsPostReduer = (state = initialState, action) => {
//     switch (action.type) {
//       case QuestionPost_request:
//         return {
//           ...state,
//           loading: true,
//         };
//       case QuestionPost_Success:
//         return {
//           ...state,
//           loading: false,
//           data: action.questions,
//         };
//       case QuestionPost_Failed:
//         return {
//           ...state,
//           loading: false,
//           error: action.error,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default questionsPostReduer;
  