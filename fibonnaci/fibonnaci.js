const fibonacci = (num) =>
    {   
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    module.exports = fibonacci