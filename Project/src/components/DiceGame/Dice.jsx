import {Flex , Stack , Heading, Box, Text} from "@chakra-ui/layout" ;
import {Image} from "@chakra-ui/image"  ;
// import {Text} from "@chakra-ui/text"  ;
import {Button} from "@chakra-ui/button"  ;
import { useState } from "react";

export const Dice = () => {
    const [gameStarted, setGameStarted]  =  useState(false) ;

    const numbers = [1,2,3,4,5,6] ;

const startGameHandler = () =>{
    setGameStarted(true) ;
} ;


    return (
        <>
        {gameStarted ? (
            <><Stack>
            <Heading>Select Number</Heading>
            <Flex>
            {numbers.map((value) => (
                <Flex 
                justify="center" 
                align="center" 
                h="50px" 
                w="50px" 
                bg="black" 
                color="white" 
                fontSize="2xl" 
                key={value}
                margin={4}
                borderRadius="md">
                    {value}
                </Flex>
            ))}
            </Flex>
    
            <Box> <Image src="/dice/dice1.png" /> </Box>
            <Text as="p">Click on Dice to Roll</Text>
            <Text>0</Text>
            <Text>Total Score</Text>
            <Button>Reset Score</Button>
        </Stack>
    </>

    
    ):(

            <Flex justify="center"  align="center">

            <Image  width="50%"  src= "/dices.png" />
                
            {/* Stack is like Flex , in Flex direction is Row-Wise  and In stack  direction is Column-Wise*/}
            <Stack>
                <Heading fontSize="9x1" as="h1"> {" "} The Dice Game</Heading>
                
                <Button alignSelf="flex-end" bg="black" color="white" _hover={{ bg: "grey"}} onClick={startGameHandler}> 
                Start Game </Button>
            </Stack>
                
                
            </Flex>
    )}
        </>


    )
}