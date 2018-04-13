# Largest prime factor

[Problem 3](https://projecteuler.net/problem=3)

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?

Answer: `6857`

## Notes

1. Divide by 2 until the remaining `value` modulo 2 is not equal to zero.
1. Divide remaining `value` by three and all odd numbers less than the square root 
   of the remaining `value`, saving the modulo zero numbers as largest prime.
1. Return the saved prime.




