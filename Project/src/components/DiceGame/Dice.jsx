import {Flex , Stack , Heading, Box, List,ListItem} from "@chakra-ui/layout" ;
import {Image} from "@chakra-ui/image"  ;
// import {Text} from "@chakra-ui/text"  ;
import {Button} from "@chakra-ui/button"  ;
import { useState } from "react";

export const Dice = () => {
    const [gameStarted, setGameStarted]  =  useState(false) ;
    const [selectedNumber, setSelectedNumber]  =  useState( ) ;
    const [dice, setDice]  =  useState(1) ;
    const [error, setError]  =  useState(null) ;

    const numbers = [1,2,3,4,5,6] ;

const startGameHandler = () =>{
    setGameStarted(true) ;
} ;

// console.log(selectedNumber);
const onNumberClicked = (value) => {
    setSelectedNumber(value) ;
    setError(null)
} ;

const genRandomNo = () => {
    if(selectedNumber){
    const generatedNo = Math.ceil(Math.random() * 6) ;
    setDice(generatedNo) ;
    // console.log(generatedNo);
    }else{
        setError("Please Select a Number")
    }
} ;



    return (
        <>
        {gameStarted ? (
            <>
            <Stack justify="center" align="center"  maxW="1300px" mx="auto" h="100vh">

            <Heading as="h1" fontSize="6xl" mb="8"  color={ error ?  "red" : "green" }> 
            { error ?  error : "Select Number" } 
            </Heading>

            <Flex pb="10">
            {numbers.map((value) => (
                <Flex 
                justify="center" 
                align="center" 
                h="50px" 
                w="50px" 
                // bg="black" 
                bg={selectedNumber === value ? "hotpink" : "black"}
                color="white" 
                fontSize="2xl" 
                key={value}
                margin={4}
                borderRadius="md"
                onClick={() => onNumberClicked(value)}
                >
                    {value}
                </Flex>
            ))}
            </Flex>
    
            <Box h="150px" width="150px" onClick={genRandomNo}> 
                {/* <Image src="/dice/dice1.png" />  */}
                <Image src= { `/dice/dice${dice}.png` }/> 
            </Box>

            <Heading as="h6">Click on Dice to Roll</Heading>
            <Heading as="h2" fontSize="8xl">0</Heading>
            <Heading as="h5">Total Score</Heading>
            <Button>Reset Score</Button>

        </Stack>

        <Stack maxW="900px" mx="auto">
            <Heading as="h2">Game Rules :-</Heading>
            <List>
                <ListItem>Select Number any Number</ListItem>
                <ListItem>Click On Dice Image to roll it</ListItem>
                <ListItem>Select number is equal to obtained dice result then you will get same point of Dice.</ListItem>
                <ListItem>Select number is equal to obtained dice result then you will get same point of Dice.</ListItem>
            </List>
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