import CommentBoxWidget from "./CommentBoxWidget/CommentBoxLayout";
import styled from "styled-components";
const Layout = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export default function App() {
  const user = {
    name: "Sundar Pichai",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png"
  };

  return (
    <Layout>
      <CommentBoxWidget user={user} />
    </Layout>
  );
}
