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
  const [comments, setCommentsState] = useState(INITIAL_COMMENTS);

  const [focusCommentId , setFocusCommentId] = useState('main')

  const setComments = (data) => {
    localStorage.setItem('INITIAL_COMMENTS', JSON.stringify(data));
    setCommentsState(data);
  }

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

  const setCommentLike = (likeStatus, likeToCommentId) => {
    const likeReplyComment = (replay) => {
      for (let i = 0; i < replay.length; i++) {
        if (replay[i].id === likeToCommentId) {
          replay[i].liked = likeStatus;
          setComments([...comments]);
          return
        } else {
          if (replay[i].reply && replay[i].reply.length) {
            likeReplyComment(replay[i].reply)
          }
        }
      }
    }
    likeReplyComment(comments);
  }

  const removeComment = (commentId) => {
    const deleteComment = (replay) => {
      for (let i = 0; i < replay.length; i++) {
        if (replay[i].id === commentId) {
          replay.splice(i, 1);
          setComments([...comments]);
          return
        } else {
          if (replay[i].reply && replay[i].reply.length) {
            deleteComment(replay[i].reply)
          }
        }
      }
    }
    deleteComment(comments)
  }


  return (
    <CommentWidgetLayout>
      <CommentInputBox commentInputId={'main'} focusCommentId={focusCommentId} setFocusCommentId={setFocusCommentId} user={user} addComment={addComment} />
      {comments?.map((comment, i) => {
        return <Comment commentInputId={comment.id} focusCommentId={focusCommentId} setFocusCommentId={setFocusCommentId} user={user} comment={comment} removeComment={removeComment} setCommentLike={setCommentLike} addComment={addComment} key={`comment-${comment.id}`} />;
      })}
    </CommentWidgetLayout>
  );
}
