import * as C from "@chakra-ui/react";
import React, { useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export function DecryptWrapper(props: C.StackProps) {
    const [ data, setData ] = useState('');
    const [ decryptedData, setDecryptedData ] = useState('');
    const [ loading, setLoading ] = useState(false);

    function handleChangeData(e) {
        setData(e.target.value);
    }

    async function handleDecryptData() {
        setLoading(true);

        try {
            const response = await api.get(`/decrypt?data=${data}`);
            const dataDecrypted = response.data.decryptedData
            setDecryptedData(dataDecrypted)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <C.Grid 
            gap="4" 
            templateColumns={["1fr", "1fr", "1fr 0.3fr 1fr"]} 
            justify="center" 
            spacing="4" 
            w="100%" 
            maxW="1120px" 
            px="6" 
            {...props}
        >
            <C.GridItem>
                <Textarea 
                    placeholder="Digite os dados para serem decodificados" 
                    onChange={handleChangeData} 
                    value={data} 
                    title="Digite aqui com os dados:"
                />
            </C.GridItem>

            <C.GridItem display="flex" justifyContent="center" alignItems="center">
                <Button isLoading={loading} onClick={handleDecryptData} />
            </C.GridItem>

            <C.GridItem>
                <Textarea value={decryptedData} isReadOnly title="Dados decodificados:"/>
            </C.GridItem>
        </C.Grid>
    )
}