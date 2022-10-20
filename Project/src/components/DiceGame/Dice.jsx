import {Flex , Stack , Heading} from "@chakra-ui/layout" ;
import {Image} from "@chakra-ui/image"  ;

export const Dice = () => {
    return <Flex>
<Image src= "/dices.png" />

{/* Stack is like Flex , in Flex direction is Row-Wise  and In stack  direction is Column-Wise*/}
<Stack>
    <Heading as="h1">The Dice Game</Heading>
    <button>Start Game</button>
</Stack>


</Flex>
}