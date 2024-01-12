import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";

import {
  useGetProductCommentsQuery,
  useCreateCommentMutation,
} from "../Services/API";

import Header from "../Components/Header";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px;
`;

const StyledTitle = styled.h1`
  margin-top: 20px;
  font-size: 2em;
  color: #ee7f01;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
`;

const StyledTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1em;
  resize: none;
  font-family: "Roboto", sans-serif;
  height: 100px;
`;

const StyledButton = styled.button`
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  background-color: #ee7f01;
  color: white;
  border: none;
`;

const StyledComments = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const StyledComment = styled.div`
  width: 100%;
`;

const StyledCommentContent = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// Utilisez ces composants styled dans votre composant ProductDetails

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
    <StyledContainer>
      <StyledTitle>{name}</StyledTitle>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateComment(e.target.username.value, e.target.comment.value);
        }}
      >
        <StyledInput
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <StyledTextarea
          name="comment"
          placeholder="Comment"
          required
        ></StyledTextarea>
        <StyledButton type="submit">Submit Comment</StyledButton>
      </StyledForm>

      <StyledComments>
        {comments &&
          comments.map((comment) => (
            <StyledComment key={comment.id}>
              <StyledCommentContent key={comment.id}>
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  {comment.username}
                </p>
                <p>{comment.comment}</p>
              </StyledCommentContent>
            </StyledComment>
          ))}
      </StyledComments>
    </StyledContainer>
  );
}

export default ProductDetails;
