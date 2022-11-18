import './globals.css';
import Navigation from './navigation';
import QueryWrapper from './queryWrapper';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dracula">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div className="w-full prone">
                    <QueryWrapper>
                        <Navigation />
                        {children}
                    </QueryWrapper>
                </div>
            </body>
        </html>
    );
}
