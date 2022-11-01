{
  let coffee = 0;

  const makeCoffee = (shot: number): number => {
    return (coffee += shot);
  };

  makeCoffee(4);
}
