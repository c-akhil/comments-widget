import styled from "styled-components";

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
`;
const ProfilePic = styled.img`
  display: inline-block;
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

export default function CommentInputBox({ user }) {
  return (
    <CommentInputContainer>
      <ProfilePic src={user.profilePic} />
      <CommentInput placeholder="Write a comment" />
    </CommentInputContainer>
  );
}
