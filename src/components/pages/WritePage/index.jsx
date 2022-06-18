import React from 'react';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import styled, { css } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Textarea from '../../atoms/Textarea';
import data from './data';
import cameraSvg from './cameraSvg';
import selectFile from './selectFile';

const WritePage = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/detail');
  // };
  return (
    <StyledWritePage>
      <FormBox action="" method="POST">
        <DiffentInputList>
          <Input {...data.input} />
          <StyledHr />
          <StyledSelect {...data.category}>
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
// const StyledTextArea = styled.textarea`
//   ${commonBorderStyle}
//   height: 10rem;
//   resize: none;
// `;

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

export default WritePage;
