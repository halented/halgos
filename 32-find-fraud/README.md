# Find Fraud

Given an array of transactions, return an array of potentially fraudulent transactions.

A series of transactions is determined to be "fraudulent" if there are three transactions in a row from the same location, of the same amount. 

## Examples

```javascript
    findFraud(["1, loc1, 200", "2, loc1, 200", "3, loc1, 200", "4, loc2, 200"])
        => ["1, loc1, 200", "2, loc1, 200", "3, loc1, 200"]
    findFraud(["1, loc2, 400", "2, loc1, 200", "3, loc2, 400", "4, loc2, 200"])
        => "No fraudulent transactions found"
```

## Constraints
- Array will be ordered by timestamps (not shown)
- Each string in an array will contain an ID, a location, and an amount

## Source
Word of Mouth