import { Box, Container } from "@mui/material";
import "./App.css";
import PictionaryGenerator from "./Components/PictionaryGenerator";
import { Wrapper } from "./Layout/Wrapper";

function App() {
  return (
    <Wrapper>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PictionaryGenerator />
        </Box>
      </Container>
    </Wrapper>
  );
}

export default App;
