import Document, {
  Html,
  Head,
  NextScript,
  Main,
} from '../node_modules/next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-Ca">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
