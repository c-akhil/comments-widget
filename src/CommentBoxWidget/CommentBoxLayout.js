import { useState } from "react";
import styled from "styled-components";
import { INITIAL_COMMENTS } from "../comments";
import Comment from "./Comment";
import CommentInputBox from "./CommentInputBox";

const CommentWidgetLayout = styled.div`
  margin: auto;
  width: 80%;
`;

export default function CommentBoxWidget({ user }) {
  const [comments, setComments] = useState(INITIAL_COMMENTS);

  const addComment = (comment) => {
    // api call
    setComments([...comments, comment]);
  };

  // const removeComment = (comment) => {
  //   // api call
  //   setComments([...comments, comment]);
  // };

  return (
    <CommentWidgetLayout>
      <CommentInputBox user={user} addComment={addComment} />
      {comments?.map((comment,i) => {
        return <Comment user={user} comment={comment} key={`comment-${i}`} />;
      })}
    </CommentWidgetLayout>
  );
}
