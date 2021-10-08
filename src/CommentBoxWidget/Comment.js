export default function Comment({ comment }) {
  return (
    <div>
      <div>{comment.name}</div>
      <div>{comment.message}</div>
    </div>
  );
}
