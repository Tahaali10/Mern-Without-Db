import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Product from "../components/Product";

const DemoPaper = styled(Paper)(() => ({
  width: "100%",
  height: 110,
}));

const Products = () => {
  return (
    <>
      <Grid spacing={5}>
        <Stack direction="row" spacing={5}>
          <DemoPaper variant="elevation">
            <Product />
          </DemoPaper>
        </Stack>
      </Grid>
    </>
  );
};
export default Products;
