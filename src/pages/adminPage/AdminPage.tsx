import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TypeProduct } from "../../store/types/types";
import { setOrderData } from "../../store/slices/orderSlice";
import { TypeOrder } from "./types/types";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProductImg from "../../shared/cart/ui/ProductImg";
import Fancybox from "../../features/fancybox/Fancybox";

const AdminPage = () => {
  const { orderData } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const orders: TypeOrder[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as TypeOrder;
        data.id = doc.id;
        return data;
      });
      dispatch(setOrderData(orders));
    };
    getData();
  }, []);

  function Row({ order }: { order: TypeOrder }) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TableRow>
          <TableCell sx={additionalHeadFont}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell sx={additionalHeadFont}>{order.displayName}</TableCell>
          <TableCell sx={additionalHeadFont}>{order.uid}</TableCell>
          <TableCell sx={additionalHeadFont}>{order.createdAt}</TableCell>
          <TableCell sx={additionalHeadFont}>{order.totalPrice}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={mainFont}
                >
                  Products info
                </Typography>
                <Table size="medium" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={textFont}>Product іmage</TableCell>
                      <TableCell sx={textFont}>Bouquet name</TableCell>
                      <TableCell sx={textFont}>Chosen flowers</TableCell>
                      <TableCell sx={textFont}>Quantity</TableCell>
                      <TableCell sx={textFont}>Price per product</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.cartData.map((product: TypeProduct) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <Fancybox>
                            <ProductImg
                              img={product.imageUrl}
                              width="165px"
                              height="151px"
                            />
                          </Fancybox>
                        </TableCell>
                        <TableCell sx={textFont}>{product.title}</TableCell>
                        {
                          <TableCell sx={textFont}>
                            {product.flowers && product.flowers.length > 0
                              ? product.flowers.join(", ")
                              : "None"}
                          </TableCell>
                        }
                        <TableCell sx={textFont}>{product.quantity}</TableCell>
                        <TableCell sx={textFont}>{`${
                          "$" + product.price + ".00"
                        }`}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  const mainFont = {
    fontFamily: "Montserrat",
    fontSize: "18px",
    color: "#665f5f",
  };
  const additionalHeadFont = {
    fontFamily: "Montserrat",
    fontSize: "16px",
    color: "#665f5f",
  };
  const textFont = {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: "#665f5f",
  };
  return (
    <DefaultLayout>
      <TableContainer
        sx={{ maxWidth: "1174px", margin: "0 auto", marginBottom: "96px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={mainFont}></TableCell>
              <TableCell sx={mainFont}>User name</TableCell>
              <TableCell sx={mainFont}>Uid</TableCell>
              <TableCell sx={mainFont}>Created at</TableCell>
              <TableCell sx={mainFont}>Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((order: TypeOrder) => (
              <Row key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DefaultLayout>
  );
};

export default AdminPage;
