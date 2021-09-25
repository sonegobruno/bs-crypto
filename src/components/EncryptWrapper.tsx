import * as C from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { config } from "../configs/toastConfig";
import { ENCRYPT_KEY } from "../constants/storageKeys";
import { api } from "../services/api";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

export function EncryptWrapper(props: C.StackProps) {
    const toast = C.useToast();

    const [ data, setData ] = useState('');
    const [ encryptedData, setEncryptedData ] = useState('');
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const storageData = sessionStorage.getItem(ENCRYPT_KEY)
        if(storageData) {
            const parsedStorageData = JSON.parse(storageData)
            setEncryptedData(parsedStorageData.dataEncrypted)
            setData(parsedStorageData.data)
        }
    },[])

    function handleChangeData(e) {
        setData(e.target.value);
    }

    async function handleEncryptData() {
        setLoading(true);
        
        try {
            const response = await api.get(`/encrypt?data=${data}`);

            const dataEncrypted = response.data.encryptedData;
            
            setEncryptedData(dataEncrypted)

            toast(config.success('Parabéns, seus dados foram codificados com sucesso.'));
            
            const storageData = {
                data,
                dataEncrypted
            }

            sessionStorage.setItem(ENCRYPT_KEY, JSON.stringify(storageData))

        } catch(err) {
            console.log(err)

            sessionStorage.removeItem(ENCRYPT_KEY)

            const { message } = err.response.data;
            toast(config.error(message));

            setEncryptedData('');
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
                <Textarea 
                    canCopy 
                    value={encryptedData} 
                    id="textarea" 
                    isReadOnly 
                    title="Dados codificados:"
                />
            </C.GridItem>
        </C.Grid>
    )
}