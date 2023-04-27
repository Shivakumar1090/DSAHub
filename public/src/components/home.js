import { Box, Modal } from "@mui/material";
import Problems from "./problems";
import Header from "./Header";
import FloatingWindow from "./auth/floatingwindow";

const Home = () => {
  return (
    <Box>
      <Header />
      <Problems />
      <FloatingWindow />
    </Box>
  );
};

export default Home;
