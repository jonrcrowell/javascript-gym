// initial component used a promise in componentDidMount like so

componentDidMount = () => {
  const posts = firestore
    .collections("posts")
    .get()
    .then(snapshot => {
      console.log({ snapshot });
    });
};

// refactored to async/await (showing 2 steps to complete the refactoring)
// 1. add the async keyword before the function
componentDidMount = async () => {
  const posts = firestore
    .collections("posts")
    .get()
    .then(snapshot => {
      console.log({ snapshot });
    });
};

// 2. we no longer need to resolve the promise as async/await does this for us
componentDidMount = async () => {
  const snapshot = await firestore.collections("posts").get();
  console.log({ snapshot });
};
