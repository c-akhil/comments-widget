import styled from "styled-components";
import { ProfilePic } from "../utils/styledComponents";

const CommentInputContainer = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const CommentInput = styled.input`
  display: inline-block;
  width: calc(100% - 60px);
  height: 40px;
  border-radius: 15px;
  padding-left: 15px;
  background: #f0f2f5;
  border: none;
`;


export default function CommentInputBox({ user }) {
  return (
    <CommentInputContainer>
      <ProfilePic src={user.profilePic} />
      <CommentInput placeholder="Write a comment" />
    </CommentInputContainer>
  );
}
