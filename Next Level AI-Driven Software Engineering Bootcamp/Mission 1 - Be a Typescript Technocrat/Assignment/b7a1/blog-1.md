# Question-1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

- Answer-1: When we label something as 'any' we can access any type of property. We can call it as a function or assign it any other type without an 'error' until it crashes at the runtime. And the 'unknown' is the type-safe sibling of 'any' type. It won't allow to use before defining the type. This process of checking is called Type Narrowing.
