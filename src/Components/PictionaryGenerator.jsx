import { useRef, useState } from "react";
import pictionary from "../words.json";
import {
  Box,
  Button,
  FormControl,
  Grid,
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

      <Grid
        alignItems="center"
        justify="center"
        sx={{
          borderRadius: "10em",
          backgroundColor: "primary.light",
          width: "50em",
          height: "20em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h2" align="center" color="black">
          {currentWord}
        </Typography>
      </Grid>
    </>
  );
};

export default PictionaryGenerator;
