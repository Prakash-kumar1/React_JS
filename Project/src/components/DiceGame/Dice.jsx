import {Flex , Stack , Heading} from "@chakra-ui/layout" ;
import {Image} from "@chakra-ui/image"  ;
import {Button} from "@chakra-ui/button"  ;
import { useState } from "react";

export const Dice = () => {
    const [gameStarted, setGameStarted]  =  useState(false) ;


    return (
        <>
        {gameStarted && (
                <Flex justify="center"  align="center">

                <Image  width="50%"  src= "/dices.png" />
                
                {/* Stack is like Flex , in Flex direction is Row-Wise  and In stack  direction is Column-Wise*/}
                <Stack>
                    <Heading fontSize="9x1" as="h1"> {" "} The Dice Game</Heading>
                
                    <Button alignSelf="flex-end" bg="black" color="white" _hover={{ bg: "grey"}} > Start Game </Button>
                </Stack>
                
                
                </Flex>
        )}
        </>


    )
}