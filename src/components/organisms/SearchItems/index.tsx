import {
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import {
  ButtonName,
  Response,
  ecommerce,
  placeholder,
} from "../../../utils/Constants";
import { InputField } from "../../atoms/Inputfiled";
import { useState } from "react";
import { Search, ShoppingCart } from "@mui/icons-material";
import { ResponsePropType } from "../../../utils/Interfaces/interfaces";

const List = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  borderBottom: "1px solid grey",
  marginBottom: "24px",
  paddingBottom: "24px",
});

const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "24px",
});

const ModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "white",
  border: "2px solid #000",
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});


export const SearchItems = () => {
  const [searchElement, setSearchElement] = useState<string>("");
  const [filterSearch, setFilterSearch] = useState<ResponsePropType[]>([]);
  const [cartItems, setCartItems] = useState<ResponsePropType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlesearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchItem = event.target.value.toLowerCase();
    setSearchElement(searchItem);
    const filterGadget = Response.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
    setFilterSearch(filterGadget);
  };

  const addToCart = (product: ResponsePropType) => {
    setCartItems([...cartItems, product]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCartItems([]);
  };
  const payModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Wrapper>
        <Box>
          <Typography children={ecommerce.ecommerce} />
        </Box>
        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          <InputField
            placeholder={placeholder.placeholder}
            onChange={handlesearch}
            value={searchElement}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>{<Search />}</IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCart color="action" />
          </Badge>
        </Stack>
        <Box>
          {filterSearch.length > 0
            ? filterSearch.map((product) => (
                <List key={product.id}>
                  <Typography>{product.name} </Typography>
                  <Typography>{product.manufacturer}</Typography>
                  <Typography>{product.price}</Typography>
                  <Button
                    children={ButtonName.BuyNow}
                    variant="contained"
                    onClick={() => {
                      addToCart(product);
                    }}
                  />
                </List>
              ))
            : Response.map((product) => (
                <List key={product.id}>
                  <Stack direction={"column"}>
                    <Typography>{product.name} </Typography>
                    <Typography>{product.manufacturer}</Typography>
                  </Stack>
                  <Typography>{product.price}</Typography>
                  <Button
                    children={ButtonName.BuyNow}
                    variant="contained"
                    onClick={() => {
                      addToCart(product);
                    }}
                  />
                </List>
              ))}
        </Box>
        <Button
          children={ButtonName.ButtonName}
          variant="contained"
          onClick={() => {
            openModal();
          }}
        />
      </Wrapper>

      <Modal open={isModalOpen} onClose={closeModal}>
        <ModalContent
          sx={{
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h4">Cart Items:</Typography>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <Stack direction={"row"} spacing={4}>
                <Typography>{cartItem.name}</Typography>
                <Typography>{cartItem.price}</Typography>
              </Stack>
            </div>
          ))}
          <Stack direction={"row"} spacing={4}>
            <Button variant="contained" color="primary" onClick={payModal}>
              Pay
            </Button>
            <Button variant="contained" color="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};
