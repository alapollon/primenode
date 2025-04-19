import React from 'react';
import { Head} from '@react-ssr/nestjs-express';


interface IndexProps {
    welcome_message: string; 
}

export function WelcomeIndex (props: IndexProps) {

    return (
      <React.Fragment>
        <Head>
          <title> welcome </title>
        </Head>
        <div> 
        <p>{props.welcome_message}</p>
        </div> 
        <a href="/about">Go to the about page</a>
      </React.Fragment>
    )
  };