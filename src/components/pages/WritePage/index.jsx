import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Textarea from '../../atoms/Textarea';
import data from './data';
import cameraSvg from './cameraSvg';
import selectFile from './selectFile';
import enterSpace from './enterSpace';
import changeTag from './changeTag';
import registPost from './registPost';

const WritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState(['']);
  const [alert, setAlert] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setAlert('제목을 입력해 주세요.');
      return;
    }
    if (category === '') {
      setAlert('카테고리를 선택해 주세요.');
      return;
    }
    if (content.trim() === '') {
      setAlert('내용을 입력해 주세요.');
      return;
    }
    const categoryObj = {
      code: data.option.indexOf(category),
      name: category,
    };
    const postId = await registPost({
      title,
      categoryObj,
      image,
      content,
      tags,
    });
    // 에러 처리
    if (postId === -1) {
      window.alert('서버 연결이 불안정합니다. 잠시 후에 다시 시도해주세요.');
      navigate('/');
      return;
    }
    navigate('/detail', { state: { postId } });
  };

  useEffect(() => {
    const styledTags = document.querySelector('.styled-tags').childNodes;
    // 기존 태그 지워졌을 때 length 처리
    if (styledTags[styledTags.length - 1].value === '')
      styledTags[styledTags.length - 1].style.width = 8 + 'ch';
    // 태그에 변동이 있을 때 가장 마지막 태그에 focus 주기
    styledTags[styledTags.length - 1].focus();
  }, [tags]);

  return (
    <StyledWritePage>
      <FormBox>
        <DiffentInputList>
          <Input
            {...data.title}
            {...commonCustomStyles}
            value={title}
            setValue={setTitle}
          />
          <StyledHr />
          <StyledSelect
            {...data.category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {data.option.map((option, idx) => {
              const value = idx === 0 ? '' : option;
              return (
                <option key={option} value={value}>
                  {option}
                </option>
              );
            })}
          </StyledSelect>
          <StyledHr />
          <ImageContent>
            <StyledLabel>
              <Label target="imgInput" isBtn="true" size="large">
                {cameraSvg}
              </Label>
            </StyledLabel>
            <StyledImage className="image-content"></StyledImage>
          </ImageContent>
          <StyledHr />
          <StyledImageInput
            type="file"
            id="imgInput"
            accept="image/*"
            onChange={(e) => selectFile({ e, setImage })}
          />
          <Textarea {...data.textarea} value={content} setValue={setContent} />
          <StyledHr />
          <StyledTags
            className="styled-tags"
            onChange={(e) => changeTag({ e, tags, setTags })}
            onKeyDown={(e) => enterSpace({ e, tags, setTags })}
          >
            {tags.map((_, idx) => {
              // 마지막 태그 제외하고 readOnly
              return idx === tags.length - 1 ? (
                <Input {...data.tag} {...lastTagCustomStyles} key={idx} />
              ) : (
                <Input
                  {...data.tag}
                  {...commonCustomStyles}
                  readOnly={true}
                  key={idx}
                />
              );
            })}
          </StyledTags>
          <StyledHr />
        </DiffentInputList>
        <Alert>{alert}</Alert>
        <Button color="pink" size="large" clickBtn={handleClick}>
          글 올리기
        </Button>
      </FormBox>
    </StyledWritePage>
  );
};

const commonCustomStyles = {
  customStyles: [
    {
      key: 'padding-right',
      value: '0',
    },
    {
      key: 'height',
      value: '2rem',
    },
  ],
};
const lastTagCustomStyles = {
  customStyles: [
    ...commonCustomStyles['customStyles'],
    {
      key: 'color',
      value: 'grey',
    },
  ],
};

const commonBorderStyle = css`
  border: none;
  &:focus {
    outline: none;
  }
  width: 100%;
  height: 2rem;
  font-size: 1.5rem;
  padding-left: 1rem;
`;

const Alert = styled.div`
  color: red;
`;

const StyledHr = styled.hr`
  color: #757575;
  margin: 1rem 0;
`;

const StyledTags = styled.div`
  display: flex;
  height: 2rem;
  overflow-x: auto;
`;

const StyledImage = styled.div`
  width: 6rem;
  height: 100%;
  margin-left: 1rem;
`;
const StyledLabel = styled.div`
  padding: 0.5rem;
  border: 0.5px solid gray;
`;

const ImageContent = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  margin-left: 1rem;
`;
const StyledSelect = styled.select`
  ${commonBorderStyle}
  padding-left: 0.8rem;
  color: #757575;
  width: 100%;
  cursor: pointer;
`;
const StyledImageInput = styled.input`
  display: none;
`;
// const StyledTextArea = styled.textarea`
//   ${commonBorderStyle}
//   height: 10rem;
//   resize: none;
// `;

const DiffentInputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 1rem;
`;
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;

const StyledWritePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default WritePage;
