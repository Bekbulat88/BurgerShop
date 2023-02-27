export const calcTotal = (orderGoods) =>
  orderGoods.reduce(
    ([totalCount, totalPrice], item) => {
      const sumCount = totalCount + item.count;
      const sumPrice = totalPrice + item.price * totalCount;
      return [sumCount, sumPrice];
    },
    [0, 0],
  );
