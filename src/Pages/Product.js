import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";

import {
  useGetProductCommentsQuery,
  useCreateCommentMutation,
} from "../Services/API";

import Header from "../Components/Header";

function ProductDetails() {
  const { id } = useParams();
  const { name } = useParams();
  const dispatch = useDispatch();

  const { data: comments, isLoading } = useGetProductCommentsQuery(id);
  const [createComment] = useCreateCommentMutation();

  const handleCreateComment = async (username, comment) => {
    await createComment({ id, username, comment });
  };

  return (
    <div>
      <h1>{name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateComment(e.target.username.value, e.target.comment.value);
        }}
      >
        <input type="text" name="username" placeholder="Username" required />
        <textarea name="comment" placeholder="Comment" required></textarea>
        <button type="submit">Submit Comment</button>
      </form>

      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <p>
              {comment.username}: {comment.comment}
            </p>
          </div>
        ))}
    </div>
  );
}

export default ProductDetails;
