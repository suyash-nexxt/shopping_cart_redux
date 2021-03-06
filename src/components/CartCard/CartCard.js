import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Button, Box, Image, Text } from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import { NumberInput } from '../NumberInput/NumberInput';
import { removeFromCart } from '../../state/actions/cartActions';

export const CartCard = ({ product, isSmallerThan920 }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        direction={isSmallerThan920 ? 'column' : 'row'}
        alignItems="center"
        minH="120px"
        mt="2"
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
      >
        <Flex alignItems="center">
          <Button
            size="xs"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            <MdDeleteForever
              size={isSmallerThan920 ? '.8em' : '1.5em'}
              color="#E53E3E"
            />
          </Button>
          <Image
            borderRadius="md"
            src={product.image}
            boxSize="70px"
            fit="contain"
            ml="10px"
          />
          <Box w={[null, '300px', '500px']} ml="20px">
            <Text>{product.title}</Text>
          </Box>
        </Flex>
        <Flex alignItems="center" mt="3em">
          <Box mr="10" ml="10">
            <NumberInput quantity={product.quantity} id={product.id} />
          </Box>
          <Box w="100px">
            <Text fontSize="l" color="teal" fontWeight="bold">
              ${(product.quantity * product.price).toFixed(2)}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
