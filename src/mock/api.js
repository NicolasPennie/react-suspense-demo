// Note: This example was provided by the React docs
// For more information please go to https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly

export function fetchUserData() {
  let userPromise = fetchUser();
  let postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise)
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

function fetchUser() {
  console.log("fetch user...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("fetched user");
      resolve({
        name: "Nicolas Pennie"
      });
    }, 1000);
  });
}

function fetchPosts() {
  console.log("fetch posts...");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("fetched posts");
      resolve([
        {
          id: 0,
          date: '2020-01-14',
          text:
            "I wish I could render components while fetching data..."
        },
        {
          id: 1,
          date: '2020-02-01',
          text:
            "How can I address race conditions between my parent and child components?"
        },
        {
          id: 2,
          date: '2020-02-17',
          text:
            "Huh, turns out Concurrent React fixes all of that! 😍"
        }
      ]);
    }, 2000);
  });
}
