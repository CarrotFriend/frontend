import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Image from '../../atoms/Image';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../../images/defaultImg.png';

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
    name: 'content',
    accept: '',
  },
  option: ['카테고리', '옵션1', '옵션2', '옵션3', '옵션4', '옵션5'],
};

const StyledHr = styled.hr`
  color: #757575;
  margin: 1rem 0;
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
          <Label target="imgInput" isBtn="true" size="large">
            <Image src={defaultImg} alt="default" size="large" />
          </Label>
          <StyledHr />
          <StyledImageInput type="file" id="imgInput" accept="image/*" />
          <StyledTextArea {...data.textarea} />
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
