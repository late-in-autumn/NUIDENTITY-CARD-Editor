import Document, {
   Html, Head, Main, NextScript,
} from "next/document";

class PlushyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel="icon" href="/favicon.ico" />
               <meta name="theme-color" content="#000000" />
               <meta
                  name="description"
                  content="ぬいハチ/ぬいれいな用の身分証(NUIDENTITY CARD)に文字入れする作業を支援するツール; 快速生成铁路人偶身份卡; Easy generation of raillord plushy ID card"
               />
               <link rel="apple-touch-icon" href="/logo192.png" />
               <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default PlushyDocument;
