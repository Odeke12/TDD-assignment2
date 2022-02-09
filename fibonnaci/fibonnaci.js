const fibonacci = (num) =>
    {   
        if(typeof(num) != "number")
            return undefined
        if(num < 0)
            return undefined;
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

module.exports = fibonacci