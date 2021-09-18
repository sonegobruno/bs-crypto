import * as C from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { config } from "../configs/toastConfig";
import { DECRYPT_KEY } from "../constants/storageKeys";
import { api } from "../services/api";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export function DecryptWrapper(props: C.StackProps) {
    const toast = C.useToast();

    const [ data, setData ] = useState('');
    const [ decryptedData, setDecryptedData ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const storageData = sessionStorage.getItem(DECRYPT_KEY)
        if(storageData) {
            const parsedStorageData = JSON.parse(storageData)
            setDecryptedData(parsedStorageData.dataDecrypted)
            setData(parsedStorageData.data)
        }
    },[])

    function handleChangeData(e) {
        setData(e.target.value);
    }

    async function handleDecryptData() {
        setLoading(true);

        try {
            const response = await api.get(`/decrypt?data=${data}`);

            const dataDecrypted = response.data.decryptedData

            setDecryptedData(dataDecrypted)
            
            toast(config.success('Parabéns, seus dados foram decodificados com sucesso.'));

            const storageData = {
                data,
                dataDecrypted
            }

            sessionStorage.setItem(DECRYPT_KEY, JSON.stringify(storageData))
        } catch(err) {
            console.error(err)

            sessionStorage.removeItem(DECRYPT_KEY)

            const { message } = err.response.data;
            toast(config.error(message));

            setDecryptedData('')

        } finally {
            setLoading(false);
        }
    }
    
    return (
        <C.Grid 
            gap="4" 
            templateColumns={["1fr", "1fr", "1fr 0.2fr 1fr"]} 
            justify="center" 
            spacing="4" 
            w="100%" 
            maxW="1120px" 
            px="6" 
            {...props}
        >
            <C.GridItem>
                <Textarea 
                    placeholder="Digite a chave para ser decodificada" 
                    onChange={handleChangeData} 
                    value={data} 
                    title="Digite aqui a chave:"
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