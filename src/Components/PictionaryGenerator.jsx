import { useRef, useState } from "react";
import pictionary from "../words.json";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const styles = {
  select: {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
  },
};

const PictionaryGenerator = () => {
  const difficultyLevels = useRef(
    import.meta.env.VITE_DIFFICULTY_LEVELS.split(",")
  );
  const [difficulty, setDifficulty] = useState(difficultyLevels.current[0]);
  const [currentWord, setCurrentWord] = useState("");

  const generateRandomWord = () => {
    const randomIndex = Math.floor(
      Math.random() * pictionary[difficulty].length
    );
    setCurrentWord(pictionary[difficulty][randomIndex]);
  };

  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Pictionary Word Generator
      </Typography>
      <FormControl sx={{ m: 5 }} fullWidth>
        <InputLabel>DIFFICULTY</InputLabel>
        <Select
          value={difficulty}
          label="DIFFICULTY"
          onChange={(e) => setDifficulty(e.target.value)}
          sx={{ ...styles.select, textAlign: "center" }}
        >
          {difficultyLevels.current.map((stage) => (
            <MenuItem
              key={stage}
              value={stage}
              sx={{ justifyContent: "center" }}
            >
              {stage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={generateRandomWord}
        variant="contained"
        size="large"
        sx={{ fontWeight: "bold", padding: "1.5em", marginBottom: "5em" }}
      >
        New Word
      </Button>

      <Box
        sx={{
          borderRadius: "10em",
          p: "5em 20em",
          backgroundColor: "primary.light",
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="black"
          sx={{display: 'inline-block'}}
        >
          {currentWord}
        </Typography>
      </Box>
    </>
  );
};

export default PictionaryGenerator;
