import React, { useState } from "react";
import Axios from "axios";
import Header from "../includes/Header";
import styled from "styled-components";

function Create() {
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
                            Name:{items.first_name}
                            {items.last_name}
                        </Headings>
                    </Item>
                </List>
            </NameContainer>
        ));
    };
    return (
        <>
            <Header list={list} />
            <div>{RenderItem()}</div>
        </>
    );
}

export default Create;

const NameContainer = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
const Headings = styled.h2``;
