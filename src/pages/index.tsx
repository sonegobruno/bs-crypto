
import * as C from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Content } from "../components/Content";


export default function Home() {
  return (
    <C.Flex direction="column" p="4">
      <Banner ml="auto" mr="auto"/>
      <Content />
    </C.Flex>
  )
}
