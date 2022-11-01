"use strict";
{
    let coffee = 0;
    const makeCoffee = (shot) => {
        return (coffee += shot);
    };
    makeCoffee(4);
}
