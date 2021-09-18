import * as C from "@chakra-ui/react";
import { useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export function EncryptWrapper(props: C.StackProps) {
    const [ data, setData ] = useState('');
    const [ encryptedData, setEncryptedData ] = useState('');
    const [ loading, setLoading ] = useState(false);

    function handleChangeData(e) {
        setData(e.target.value);
    }

    async function handleEncryptData() {
        setLoading(true);
        
        try {
            const response = await api.get(`/encrypt?data=${data}`);
            const dataEncrypted = response.data.encryptedData
            setEncryptedData(dataEncrypted)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <C.Grid gap="4" templateColumns={["1fr", "1fr", "1fr 0.2fr 1fr"]} justify="center" spacing="4" w="100%" maxW="1120px" px="6" {...props}>
            <C.GridItem>
                <Textarea 
                    placeholder="Digite os dados para serem codificados" 
                    onChange={handleChangeData} 
                    value={data} 
                    title="Digite aqui com os dados:"
                />
            </C.GridItem>
            <C.GridItem display="flex" justifyContent="center" alignItems="center">
                <Button isLoading={loading} onClick={handleEncryptData} />
            </C.GridItem>
            <C.GridItem>
                <Textarea value={encryptedData} isReadOnly title="Dados codificados:"/>
            </C.GridItem>
        </C.Grid>
    )
}