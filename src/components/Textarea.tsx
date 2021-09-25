import * as C from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { config } from "../configs/toastConfig";
interface Props extends C.TextareaProps {
    title: string;
    canCopy?: boolean;
}

export function Textarea({ title, canCopy = false, ...rest }: Props) {
    const toast = C.useToast();

    function handleCopyToClipboard() {
        if(!canCopy) {
            return
        }
        
        var copyText:any = document.getElementById("textarea");
      
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        navigator.clipboard.writeText(copyText.value);
        
        toast(config.info('Dados copiados com sucesso.'));
      }

    return (
        <C.Box w="100%">
            <C.FormLabel 
                color="light" 
                fontSize="lg" 
                fontWeight="bold"
            >
                {title}
            </C.FormLabel>
            <C.Textarea 
                borderColor="card"
                bg="card" 
                color="light" 
                minH="240px" 
                fontSize="sm"
                onClick={handleCopyToClipboard}
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