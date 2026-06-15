 import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/clerk-react'
import React from 'react'
import './App.css'

 
 const App = () => {
   return (
      <>
        <h1>Welcome to the Interview Platform</h1>
        
        <SignedOut>
          <SignInButton  mode='modal'>
            <button>Login</button>
          </SignInButton>
        </SignedOut>

         <SignedIn>
          <SignOutButton />
         </SignedIn>

        <UserButton />
      </>
   )
 }
 
 export default App
 