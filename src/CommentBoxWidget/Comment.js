import React, { useState } from "react";
import styled from "styled-components";
import { ProfilePic } from "../utils/styledComponents";
import { getTimeFromNow } from "../utils/timeUtils";
import CommentInputBox from "./CommentInputBox";

const CommentContainer = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const CommentDetailsConatiner = styled.div`

`;

const CommentDetails = styled.div`
  padding: 10px 15px;
  border-radius: 15px;
  background: #f0f2f5;
`

const CommentTitle = styled.div`
  color: #0f0f0f;
  font-weight: bold;
`;

const CommentMessage = styled.div`
  color: #595a5b;
`;

const CommentReactions = styled.div`
  color: #66686c;
`;

const CommentReaction = styled.span`
  margin-left: 5px;
  font-size: 12px;
  cursor: pointer;
`;
const ReplayConatiner = styled.div`
  margin-left: 50px;
`;

export default function Comment({ user, comment, addComment }) {

  const [isReplyOpen, setReplayOpen] = useState(false);
  const [isReplayCollapsed, setReplayCollapsed] = useState(true);

  return (<React.Fragment>
    <CommentContainer>
      <ProfilePic src={comment.profilePic} />
      <CommentDetailsConatiner>
        <CommentDetails>
          <CommentTitle>{comment.name}</CommentTitle>
          <CommentMessage>{comment.message}</CommentMessage>
        </CommentDetails>
        <CommentReactions>
          <CommentReaction>Like</CommentReaction> .
          <CommentReaction onClick={() => setReplayOpen(!isReplyOpen)}>Reply</CommentReaction> .
          <CommentReaction>{getTimeFromNow(comment.time)}</CommentReaction>
        </CommentReactions>
      </CommentDetailsConatiner>
    </CommentContainer>
    {isReplyOpen && <ReplayConatiner>
      <CommentInputBox user={user} addComment={addComment} commentId={comment.id}/>
    </ReplayConatiner>}
    {comment.reply && comment.reply.length > 0 && (isReplayCollapsed ? <ReplayConatiner onClick={() => { setReplayCollapsed(!isReplayCollapsed) }}>
      &#8627;	{comment.reply.length} replies
    </ReplayConatiner> :
      <ReplayConatiner>
        {comment.reply.map((reply, i) => {
          return <Comment user={user} key={`reply-${i}`} addComment={addComment} comment={reply} />
        })}
      </ReplayConatiner>)}
  </React.Fragment>
  );
}
