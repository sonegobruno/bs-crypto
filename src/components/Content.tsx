
import * as C from "@chakra-ui/react";
import { useState } from "react";
import { DecryptWrapper } from "./DecryptWrapper ";
import { EncryptWrapper } from "./EncryptWrapper";
import { SegmentButton } from "./Segment";
import { SegmentWrapper } from "./SegmentWrapper";

export function Content() {
    const [ option, setOption ] = useState('encrypt');

    function handleChangeOption(newOption: string) {
        setOption(newOption);
    }

    return (
        <C.Flex mt="8" w="100%" justify="center">
            <C.Box w="100%">
                <SegmentWrapper>
                    <SegmentButton 
                        onClick={() => handleChangeOption('encrypt')} 
                        option={option}
                        optionSegment="encrypt"
                    >
                        Codificar
                    </SegmentButton>
                    <SegmentButton 
                        onClick={() => handleChangeOption('decrypt')} 
                        option={option}
                        optionSegment="decrypt"
                    >
                        Decodificar
                    </SegmentButton>
                </SegmentWrapper>

                <C.Flex justify="center"  w="100%" mt="6">
                    {option === 'encrypt' && <EncryptWrapper />}
                    {option === 'decrypt' && <DecryptWrapper />}
                </C.Flex>
            </C.Box>
        </C.Flex>
    )
}