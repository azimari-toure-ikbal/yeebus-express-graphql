export const resolvers = {
  Query: {
    helloWorld: () => "Hello World!",
    test: () => "Test",
    bus: () => [
      {
        id: "1",
        name: "Bus 1",
        number: "1",
      },
      {
        id: "2",
        name: "Bus 2",
        number: "2",
      },
    ],
  },
};
