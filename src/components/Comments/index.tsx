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
import { PostDropdown, UserName } from 'components/Dashboard/Forum/forum.styles';
import { SubmitButton } from 'components/ShareForm/modal.styles';

type FormInput = {
  body: string;
};

export const Comment = ({ showComments, ...props }: any) => {
  const [showDropdown, setShowDropdown] = useState(0);
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
  const toggleDropdown = (id) => {
    if(id === showDropdown){
      setShowDropdown(null)
    } else{
      setShowDropdown(id)
    }
  }

  return (
    <>
      {showComments ? (
        <div showComments={showComments} {...props}>
          <CommentHorizontalRule />
          <CommentCard>
            <CommentWrapper>
              <CommentLeftWrap>
                <UserProfileImge alt="sender profile image" src="/Aleah.jpg" />
                  
                <CommentText>
                  <UserName>
                    maguyva
                  </UserName>
                  <CommentDate> 2 hours ago</CommentDate>
                  
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </CommentText>
                
              </CommentLeftWrap>
              <CommentTopRightWrap>
                <PostDropdown>
                  <ExpandIcon onClick={() => toggleDropdown(1)} />
                  <Dropdown onClick={() => toggleDropdown(1)} showDropdown={showDropdown === 1} />
                </PostDropdown>
              </CommentTopRightWrap>
            </CommentWrapper>
            <CommentWrapper>
              <CommentLeftWrap>
                <UserProfileImge alt="sender profile image" src="/Aleah.jpg" />
                <CommentText>
                  <UserName>
                    maguyva
                  </UserName>
                  <CommentDate> 2 hours ago</CommentDate>
                  
                  Lorem 
                </CommentText>
                
              </CommentLeftWrap>
              <CommentTopRightWrap>
                <PostDropdown>
                  <ExpandIcon onClick={() => toggleDropdown(2)} />
                  <Dropdown onClick={() => toggleDropdown(2)} showDropdown={showDropdown === 2} />
                </PostDropdown>
              </CommentTopRightWrap>
            </CommentWrapper>
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
              <br />
              <SubmitButton>Submit</SubmitButton>
            </form>
          </CommentCard>
        </div>
      ) : null}
    </>
  );
};
