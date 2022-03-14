import React from 'react';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Textarea from '../../atoms/Textarea';

const commonTextAttribue = {
  size: 'medium',
  color: '',
  onlyBottomline: 'true',
};
const commonBorderStyle = css`
  border: none;
  &:focus {
    outline: none;
  }
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  padding-left: 1rem;
`;
const data = {
  input: {
    size: 'large',
    onlyBottomline: 'true',
    placeholder: '제목을 입력하세요',
    name: 'title',
  },
  category: {
    placeholder: '카테고리',
    name: 'categoryId',
  },
  image: {
    ...commonTextAttribue,
    name: 'image',
    type: 'file',
    accept: 'image/*',
  },
  textarea: {
    placeholder: '내용을 입력하세요',
    size: 'medium',
    name: 'content',
  },
  option: ['카테고리', '옵션1', '옵션2', '옵션3', '옵션4', '옵션5'],
};

const StyledHr = styled.hr`
  color: #757575;
  margin: 1rem 0;
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
const StyledTextArea = styled.textarea`
  ${commonBorderStyle}
  height: 10rem;
  resize: none;
`;

const DiffentInputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 2rem;
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

const WritePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detail');
  };
  const selectFile = (e) => {
    const imageContent = document.querySelector('.image-content');
    const url = URL.createObjectURL(e.target.files[0]);
    if (imageContent.hasChildNodes()) {
      imageContent.childNodes[0].src = url;
      return;
    }
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('alt', 'default');
    img.setAttribute('width', '100%');
    img.setAttribute('height', '100%');
    imageContent.appendChild(img);
  };
  return (
    <StyledWritePage>
      <FormBox action="" method="POST">
        <DiffentInputList>
          <Input {...data.input} />
          <StyledHr />
          <StyledSelect {...data.category}>
            {data.option.map((option, idx) => {
              const value = idx == 0 ? '' : option;
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  className="bi bi-camera"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
              </Label>
            </StyledLabel>
            <StyledImage className="image-content"></StyledImage>
          </ImageContent>
          <StyledHr />
          <StyledImageInput
            type="file"
            id="imgInput"
            accept="image/*"
            onChange={selectFile}
          />
          <Textarea {...data.textarea} />
          <StyledHr />
        </DiffentInputList>
        <Button color="pink" size="large">
          글 올리기
        </Button>
      </FormBox>
    </StyledWritePage>
  );
};

export default WritePage;
