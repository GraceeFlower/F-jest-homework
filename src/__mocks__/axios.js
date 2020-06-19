export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        name: "Min",
      },
    })
  ),
  post: jest.fn(() => Promise.resolve({ data: {} }).catch((err) => err)),
};
