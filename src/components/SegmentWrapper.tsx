import * as C from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends C.StackProps {
    children: ReactNode
}

export function SegmentWrapper({ children, ...rest }: Props) {
    return (
        <C.HStack 
            spacing="5" 
            align="center" 
            justify="center"
            {...rest}
        >
            {children}
        </C.HStack>
    )
}