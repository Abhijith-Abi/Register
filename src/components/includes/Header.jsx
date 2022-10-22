import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header({ list }) {
    return (
        <SectionContainer>
            <HeaderSection>
                <SectionRegister>
                    <Register to="/create">Register</Register>
                </SectionRegister>
                <SectionLists>
                    <Lists onClick={list}>All Register List</Lists>
                </SectionLists>
            </HeaderSection>
        </SectionContainer>
    );
}

export default Header;

const SectionContainer = styled.section`
    height: 100px;
    background-color: #ff7e05;
`;
const HeaderSection = styled.header`
    padding: 15px;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const SectionRegister = styled.div``;
const SectionLists = styled.div``;
const Register = styled(Link)`
    cursor: pointer;
`;
const Lists = styled.h1`
    cursor: pointer;
`;
