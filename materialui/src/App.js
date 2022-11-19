import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import {Sidebar} from "./components/Sidebar";
import {Box, Stack} from "@mui/material" ;
import {Navbar} from "./components/Navbar";


 function App()  {
  return (
    <div>
      <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
        </Stack>
          
      </Box>
    </div>
  );
}

export default App ;


