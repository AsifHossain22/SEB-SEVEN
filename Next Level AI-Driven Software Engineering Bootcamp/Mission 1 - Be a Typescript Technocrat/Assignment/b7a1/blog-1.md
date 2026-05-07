# Question-1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

- Answer-1: 'any' type ব্যবহার করলে টাইপস্ক্রিপ্ট কোনো 'error' ধরে না, ফলে অ্যাপ রান করার সময় ক্র্যাশ হতে পারে। কিন্তু 'unknown' type ব্যবহার করলে টাইপস্ক্রিপ্ট বাধ্য করবে আগে চেক করতে (Type Narrowing) যে ডেটাটি আসলে কী। এতে কোড অনেক বেশি নিরাপদ থাকে।
