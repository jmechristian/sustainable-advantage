import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Sustainable Advantage',
  description:
    'A new program providing free P2 technical assistance and guidance to businesses with the goal of improving human and environmental health in disadvantaged communities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/jzy7rqb.css' />
      </head>
      <body>
        <div className='w-full max-w-7xl mx-auto px-4 xl:px-0'>{children}</div>
      </body>
    </html>
  );
}
