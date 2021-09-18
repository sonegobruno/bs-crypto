import * as C from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export function EncryptWrapper(props: C.StackProps) {
    const [ data, setData ] = useState('');
    const [ encryptedData, setEncryptedData ] = useState('');

    function handleChangeData(e) {
        setData(e.target.value);
    }

    async function handleEncryptData() {
        try {
            const response = await api.get(`/encrypt?data=${data}`);
            const dataEncrypted = response.data.encryptedData
            setEncryptedData(dataEncrypted)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <C.Grid gap="4" templateColumns={["1fr", "1fr", "1fr 0.3fr 1fr"]} justify="center" spacing="4" w="100%" maxW="1120px" px="6" {...props}>
            <C.GridItem>
                <Textarea 
                    placeholder="Digite os dados para serem encriptados" 
                    onChange={handleChangeData} 
                    value={data} 
                    title="Dados:"
                />
            </C.GridItem>
            <C.GridItem display="flex" justifyContent="center" alignItems="center">
                <Button onClick={handleEncryptData}>Encriptar</Button>
            </C.GridItem>
            <C.GridItem>
                <Textarea value={encryptedData} isReadOnly title="Resultado:"/>
            </C.GridItem>
        </C.Grid>
    )
}