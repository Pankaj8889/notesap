import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";

// Ensure Amplify is configured properly
Amplify.configure(outputs);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        // Log the user object to inspect its structure
        console.log("User object:", user.signInDetails.loginId);
        return (
          <main>
            <h1>Hello {user?.username}</h1>
            <h1>Email: {user.signInDetails.loginId || "Not available"}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
}

export default App;
