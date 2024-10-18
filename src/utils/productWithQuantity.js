const productWithQuantity = (food) => {
  return {
    ...food,
    isChecked: false,
    quantity: 1,
  };
};

export default productWithQuantity;
