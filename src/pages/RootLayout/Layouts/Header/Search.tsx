import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IForm {
  keyword: string;
}

export default function Search() {
  const { register, handleSubmit, setFocus, watch } = useForm<IForm>();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const openSearchInput = () => {
    setIsSearchOpen(true);
  };

  const onValid = (data: IForm) => {
    console.log(data);
    navigate(`/search?keyword=${data.keyword}`);
  };

  useEffect(() => {
    if (isSearchOpen) {
      setFocus("keyword");
    }
  }, [isSearchOpen]);

  return (
    <Container onSubmit={handleSubmit(onValid)}>
      <SearchIcon
        animate={{ x: isSearchOpen ? -245 : 0 }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={openSearchInput}
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </SearchIcon>
      <SearchInput
        {...register("keyword", {
          required: true,
          onBlur: () => {
            setIsSearchOpen(false);
          },
          minLength: 2,
        })}
        initial={{ scaleX: 0 }}
        placeholder="제목을 검색해주세요."
        animate={{ scaleX: isSearchOpen ? 1 : 0 }}
      />
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  align-items: center;
  color: white;
  svg {
    height: 25px;
  }
  position: relative;
`;

const SearchInput = styled(motion.input)`
  width: 275px;
  height: 35px;
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
  font-size: 18px;
  z-index: 1;
`;

const SearchIcon = styled(motion.svg)`
  cursor: pointer;
`;
