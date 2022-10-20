import React, { useState } from "react";
import Axios from "axios";
import Header from "../includes/Header";
import styled from "styled-components";

function Register() {
    const [item, setItem] = useState([]);

    const list = () => {
        Axios.get("http://localhost:8000/api/v1/register/").then((response) => {
            console.log(response.data.data);
            setItem(response.data.data);
        });
    };
    console.log(item);

    const RenderItem = () => {
        return item.map((items) => (
            <NameContainer>
                <List>
                    <Item>
                        <Headings>
                            Name:{items.first_name} {""} {items.last_name}
                        </Headings>
                        <Headings>Phone:{items.phone}</Headings>
                        <Headings>Email:{items.email}</Headings>
                        <Headings>Education:{items.email}</Headings>
                        <Headings>Occupation:{items.address}</Headings>
                        <Headings>Company Name:{items.company_name}</Headings>
                        <Headings>Date:{items.date}</Headings>
                    </Item>
                </List>
            </NameContainer>
        ));
    };
    return (
        <>
            <Header list={list} />
            <SectionContainer>{RenderItem()}</SectionContainer>
        </>
    );
}

export default Register;
const SectionContainer = styled.section``;
const NameContainer = styled.div``;
const List = styled.ul``;
const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Img = styled.img``;
const Headings = styled.h2`
    color: blue;
`;
