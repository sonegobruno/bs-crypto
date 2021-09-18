
import * as C from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends C.ButtonProps {
    children: ReactNode,
    option: string;
    optionSegment: string;
}

export function SegmentButton({ 
    option, 
    children,
    optionSegment,
    ...rest
 }: Props) {
    return (
        <C.Button 
            variant={option === optionSegment ? 'solid' : 'outline'} 
            size="md" 
            colorScheme="blue" 
            {...rest}
        >
            {children}
        </C.Button>
    )
}