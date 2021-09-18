import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import * as C from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends C.ButtonProps {
    isLoading?: boolean;
}

export function Button({isLoading = false, ...rest }: Props) {
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
            {!isLoading && (
                isWideVersion 
                    ? <ArrowRightIcon />
                    : < ArrowDownIcon />
                
            )}

            {isLoading && 
                <C.Spinner 
                    color="light" 
                    size="sm"
                    speed="0.5s"
                    emptyColor="blue.200"
                />
            }
        </C.Button>
    )
}