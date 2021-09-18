import * as C from "@chakra-ui/react";

export function Banner(props: C.FlexProps) {
    return (
        <C.Flex align="center" {...props}>
            <C.Image w="80px" src="/assets/logo-btrsi.png"/>
            <C.Box ml="1">
                <C.Text lineHeight="12px" color="light" fontWeight="bold">BTR.</C.Text>
                <C.Text color="light">Soluções Inovadoras</C.Text>
            </C.Box>
        </C.Flex>
    )
}