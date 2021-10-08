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

  const addComment = (comment, replyToCommentId = undefined) => {
    // api call
    if (replyToCommentId) {
      const addReplyComment = (replay) => {
        for (let i = 0; i < replay.length; i++) {
          if (replay[i].id === replyToCommentId) {
            if (!replay[i].reply) {
              replay[i].reply = [];
            }
            replay[i].reply.unshift(comment);
            setComments([...comments]);
            return
          } else {
            if (replay[i].reply && replay[i].reply.length) {
              addReplyComment(replay[i].reply)
            }
          }
        }
      }
      addReplyComment(comments);
    } else {
      setComments([comment, ...comments]);
    }
  };

  // const removeComment = (comment) => {
  //   // api call
  //   setComments([...comments, comment]);
  // };

  return (
    <CommentWidgetLayout>
      <CommentInputBox user={user} addComment={addComment} />
      {comments?.map((comment, i) => {
        return <Comment user={user} comment={comment} addComment={addComment} key={`comment-${i}`} />;
      })}
    </CommentWidgetLayout>
  );
}
