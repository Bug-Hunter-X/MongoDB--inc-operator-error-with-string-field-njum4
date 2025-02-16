```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({ _id: 1 }, { $inc: { numericField: 1 } });

// Alternative for string fields using $set
db.collection.updateOne({ _id: 1 }, { $set: { stringField: "newValue" } });
```