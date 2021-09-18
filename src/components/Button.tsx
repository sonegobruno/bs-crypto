import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import * as C from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends C.ButtonProps {
}

export function Button({...rest }: Props) {
    const isWideVersion = C.useBreakpointValue({
        base: false,
        md: true,
    });

    return (
        <C.Button 
            colorScheme="blue" 
            w="100%"
            maxW="60px"
            alignSelf="center"
            {...rest}
        >
            {isWideVersion 
                ? <ArrowRightIcon />
                : < ArrowDownIcon />
            }
        </C.Button>
    )
}