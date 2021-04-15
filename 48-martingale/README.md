You have a friend that works for an online gambling startup.

The found has just leanred about a betting strat called Mirtingale and is very excited about it. In fact, she wants to add it as a feature for high-end customers.

Read the FIRST paragraph of this article to learn more about the Martingale betting strategy:
https://en.wikipedia.org/wiki/Martingale_(betting_system)

There are 2 main components of the strategy:

1. After every loss, set the current bet to twice the previous bet.
2. After every win set the current bet to the initial bet. 

Your friend's engineering manager has come to them with the following requirements document:

Create a function that:

1. Takes in this input

    a. Initial wallet amount

    b. Target wallet amount (how much the user wants to have before stopping)

    c. Initial bet amount

    d. Probability of winning (e.g. .45, .39)

2. Executes the martingale betting strategy until the wallet amount is exhausted OR the target wallet amount is achieved. 

3. Returns a data structure that contains these values:

    a. # of rounds played
    
    b. # of rounds won
    
    c. # of rounds lost
    
    d. final wallet amount
    
    e. number of times each amount was bet

4. Passes at least 3 test cases (made manually) that prove the function works correctly. 