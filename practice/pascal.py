#!/usr/bin/env python3
# import math

def factorial(number):
    if (number == 1):
        return number;
    else:
        return number * factorial(number-1);

def nCr(num, re):
    factN = factorial(num);
    factRe = factorial(re);
    factN_re = factorial(num - re);
    deno = factN_re * factRe;
    result = (factN)/(deno);
    return result;

def pascal_triangle(num):
    triangle = [];
    if (num == 0):
        list = []
        list.append(1)
        triangle.append(list);
        return triangle;
    else:
        for x in range(num):
            num = x;
            r = 0;
            list = [];
            while(r <= num):
                R = int(nCr(num, r));
                list.append(R);
                r += 1;
            triangle.append(list);
        return triangle;
    
print(factorial(5));