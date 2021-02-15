import Document_, {Main, NextScript, Head, Html} from 'next/document';

export default class Document extends Document_ {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Champeg</title>
                    <link rel="icon" href="/icon-favicon.ico" type="image/x-icon" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>{' '}
                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}
