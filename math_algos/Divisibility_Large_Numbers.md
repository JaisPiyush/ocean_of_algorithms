# Divisibility & Large Numbers


## By 3
```
Input  : n = 769452
Output : Yes

Input  : n = 123456758933312
Output : No

Input  : n = 3635883959606670431112222
Output : Yes
```

#### A number is divisible by 3 if sum of its digits is divisible by 3.
```
n = 1332
Sum of digits = 1 + 3 + 3 + 2 = 9
Output: Yes
```
#### Theory
The proof is based on an observation that remained of 10<sup>i</sup> divided by 3 will be 1. For example, 10/3 = 1, 100/3 = 1, etc.

##### Good for large and very large numbers

Remainder of `(1*1000 + 3*100 + 3*100 + 2)/3` will be `1*1 + 3*1 + 3*1 + 2 = 9`. Only when remainder is divisible by 3, the entire number will be divisible by 3.

## By 4
```
Input : n = 1124
Output : Yes

Input  : n = 1234567589333862
Output : No

Input  : n = 363588395960667043875487
Output : No
```

#### A number is divisible by 4 if the last two digits are divisible by 4