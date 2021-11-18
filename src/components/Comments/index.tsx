import React, { useState } from 'react'
import {
  CommentHorizontalRule,
  CommentCard,
  CommentWrapper,
  CommentLeftWrap,
  UserProfileImge,
  CommentText,
  CommentDate,
  CommentTopRightWrap,
  ExpandIcon,
} from "./comment.styles";
import Dropdown from "../Dropdown";
import { PostEditor } from 'components/Editor';
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useForm } from 'react-hook-form';

type FormInput = {
  body: string;
};

export const Comment = ({ showComments, ...props }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>("");

  const {
    // register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = async ({ body }: any) => {
    console.log(body);
  };

  return (
    <>
      {showComments ? (
        <div showComments={showComments} {...props}>
          <CommentHorizontalRule />
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.body && <span>text is required</span>}
            <PostEditor
              editorState={editorState}
              onEditorStateChange={(newState: EditorState) => {
                setEditorState(newState);
                setContent(
                  draftToHtml(convertToRaw(newState.getCurrentContent()))
                );
                setValue("body", content);
              }}
            />
          </form>
          <CommentCard>
            <CommentWrapper>
              <CommentLeftWrap>
                <UserProfileImge alt="sender profile image" src="/Aleah.jpg" />
                <CommentText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry...............................................
                </CommentText>
                <CommentDate> 2 hours ago</CommentDate>
              </CommentLeftWrap>
              <CommentTopRightWrap>
                <ExpandIcon onClick={() => setShowDropdown(!showDropdown)} />
              </CommentTopRightWrap>
            </CommentWrapper>
            <Dropdown showDropdown={showDropdown} />
            <CommentWrapper>
              <CommentLeftWrap>
                <UserProfileImge alt="sender profile image" src="/Aleah.jpg" />
                <CommentText>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry...............................................
                </CommentText>
                <CommentDate> 2 hours ago</CommentDate>
              </CommentLeftWrap>
              <CommentTopRightWrap>
                <ExpandIcon />
              </CommentTopRightWrap>
            </CommentWrapper>
          </CommentCard>
        </div>
      ) : null}
    </>
  );
};
