import * as C from "@chakra-ui/react";
interface Props extends C.TextareaProps {
    title: string;
}

export function Textarea({ title, ...rest }: Props) {
    return (
        <C.Box w="100%">
            <C.FormLabel color="light" fontSize="lg" fontWeight="bold">{title}</C.FormLabel>
            <C.Textarea 
                borderColor="card"
                bg="card" 
                color="light" 
                minH="240px" 
                fontSize="sm"
                {...rest}
                _hover= {{
                    borderColor: 'blue.500'
                }}
                _placeholder={{
                    fontFamily: 'Roboto',
                    color: 'text',
                    fontSize: 'md'
                }}
             />
        </C.Box>
    )
}