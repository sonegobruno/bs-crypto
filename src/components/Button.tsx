import { ArrowRightIcon } from "@chakra-ui/icons";
import * as C from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends C.ButtonProps {
    children: ReactNode;
}

export function Button({ children, ...rest }: Props) {
    return (
        <C.Button 
            colorScheme="blue" 
            rightIcon={<ArrowRightIcon />}
            w="100%"
            maxW="140px"
            alignSelf="center"
            {...rest}
        >
            {children}
        </C.Button>
    )
}