import React from "react";
import { Text } from "react-native";

type CatProps = {
    name: string;
}

const Cat = (props: CatProps) => {
    return (
        <Text>Ini adalah kucing {props.name}.</Text>
    );
};

export default Cat;