/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import type { FontAsset, ImageAsset } from "@webstudio-is/sdk";
      import { useResource } from "@webstudio-is/react-sdk";
      import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Box as Box, Image as Image, Heading as Heading, Paragraph as Paragraph, Vimeo as Vimeo, VimeoSpinner as VimeoSpinner, HtmlEmbed as HtmlEmbed, VimeoPlayButton as VimeoPlayButton, Italic as Italic, Text as Text } from "@webstudio-is/sdk-components-react";
import { Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const favIconAsset: ImageAsset | undefined =
        undefined;

      export const socialImageAsset: ImageAsset | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: FontAsset[] =
        [{"id":"eee6afef9be6c51ba4a4cc7cc2ab4f78dbdac6a3b39419633b8d3481e0736182","name":"DMSans-VariableFont_opsz_wght_OEVjbFZNCsBcnjDHxiCS5.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":238984,"type":"font","createdAt":"2024-07-19T09:47:07.584Z","format":"ttf","meta":{"family":"DM Sans","variationAxes":{"opsz":{"name":"Optical size","min":9,"default":9,"max":40},"wght":{"name":"Weight","min":100,"default":400,"max":1000}}}},{"id":"b9bb54388548f9896dca541eb2c236a92d0c6d11e9f206437fda1f6a7d3358b4","name":"DMSans-Italic-VariableFont_opsz_wght_BGIhD0HLLy2axR97Zl4m9.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":283524,"type":"font","createdAt":"2024-07-19T09:47:03.536Z","format":"ttf","meta":{"family":"DM Sans","variationAxes":{"opsz":{"name":"Optical size","min":9,"default":9,"max":40},"wght":{"name":"Weight","min":100,"default":400,"max":1000}}}},{"id":"8130560da30ad6f19994fd410f71985acafca1576592235161ffb75757635594","name":"Lato-ThinItalic_rmtgv6JRQ9RPeb__7bqEf.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":48864,"type":"font","createdAt":"2024-07-19T06:40:00.390Z","format":"ttf","meta":{"family":"Lato","style":"italic","weight":100}},{"id":"fee1bd1daaa5efbcb93c8d074c61378dce155df0d32e00199b6a9457e427bc45","name":"Lato-Thin_BPiltVs98iypXV3s7CgNu.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":69976,"type":"font","createdAt":"2024-07-19T06:39:57.819Z","format":"ttf","meta":{"family":"Lato","style":"normal","weight":100}},{"id":"e82542aed8293f49fc83c4aaea566b1f6b4fc7a9ab5da11e6fb9bc0973b5324b","name":"Lato-Regular_SNUXzXRZs0P3nHXZm6xPh.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":75152,"type":"font","createdAt":"2024-07-19T06:39:55.855Z","format":"ttf","meta":{"family":"Lato","style":"normal","weight":400}},{"id":"6d5176f3babd0ccba79845088f8e9ede5dbb7b408fb40161963daa95a71cef2e","name":"Lato-LightItalic_QcdFAQ0jaedLNjKHwkCdv.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":49080,"type":"font","createdAt":"2024-07-19T06:39:53.885Z","format":"ttf","meta":{"family":"Lato","style":"italic","weight":300}},{"id":"fb5343c4375c38b1c3026336d355335e6a5b8531cbc9c6506eb4b6f6d67c152f","name":"Lato-Light_98ZXR2HIfnWk1iAs0hGxa.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":77208,"type":"font","createdAt":"2024-07-19T06:39:51.156Z","format":"ttf","meta":{"family":"Lato","style":"normal","weight":300}},{"id":"3be26bf6973f49df6a7dfd130041017354342bfbb023e6b9610b42daeba6de34","name":"Lato-Italic_JOJm9pJj4kjju_vp7Yfn-.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":75792,"type":"font","createdAt":"2024-07-19T06:39:48.838Z","format":"ttf","meta":{"family":"Lato","style":"italic","weight":900}},{"id":"e38611f4c0ff3251a58fe751991c39784d8f9be420b004891e0b9277228ec32f","name":"Lato-BoldItalic_kw8Fo9E8TTpBip2vo_79w.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":77732,"type":"font","createdAt":"2024-07-19T06:39:44.867Z","format":"ttf","meta":{"family":"Lato","style":"italic","weight":700}},{"id":"d7f0b7f2570f2f28b504da1181b4d71b1420b10be2c4fd690927f1c8ee3b19c3","name":"Lato-Bold_3lSA-DdNo1Ze7crv1BhBm.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":73332,"type":"font","createdAt":"2024-07-19T06:39:43.072Z","format":"ttf","meta":{"family":"Lato","style":"normal","weight":700}},{"id":"e1eb271de3a571d566e534d3e521cfa46becfc789821257bc347455167d586f3","name":"Lato-BlackItalic_50nnHrFS16RvjvqlHDDVP.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":72000,"type":"font","createdAt":"2024-07-19T06:39:40.803Z","format":"ttf","meta":{"family":"Lato","style":"italic","weight":900}},{"id":"abf64cfa14645043a7c33f76435125f8b3de79c510adb938a1c16085518d4341","name":"Lato-Black_xhhMPRPmy205lrqo3Bn_1.ttf","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":69500,"type":"font","createdAt":"2024-07-19T06:39:38.279Z","format":"ttf","meta":{"family":"Lato","style":"normal","weight":900}}]

      export const pageBackgroundImageAssets: ImageAsset[] =
        [{"id":"c96cb43202e2c1e79a9054d0730db7ae1ab1dac3e30cce783ce148aeaf8f5158","name":"Group_1321314608_5OgZtYfALSEhCmCj1E8_g.png","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":2067483,"type":"image","format":"png","createdAt":"2024-07-19T15:15:01.081Z","meta":{"width":1920,"height":1352}},{"id":"7819a43250730647d1c30badb2322e94d6a5db7fed6f11b0bc49c258f30462ef","name":"Group_1321314605_19kBxuyzgSCx08n5b5Bxi.png","description":null,"projectId":"c0165f10-e497-48ee-a8b9-2036941af185","size":2796871,"type":"image","format":"png","createdAt":"2024-07-19T14:59:26.403Z","meta":{"width":2930,"height":1239}}]

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      

      const Page = ({ }: { system: any; }) => {
return <Body
data-ws-id="esw4QtOqzhJ61vlvdrJty"
data-ws-component="Body"
className="c10tb7jb c1qjnwd c1qgrvx">
<Box
data-ws-id="4-dkLiJWmTFK6gX3IDey0"
data-ws-component="Box"
tag={"nav"}
className="c1twnoba c1vy6a0n c14qbmc6 c4nynq7 c7zvlsj">
<Box
data-ws-id="YkMxnEwm8pkDcw3vGPaYW"
data-ws-component="Box"
className="c1m1w67o c61ovkt">
<Image
data-ws-id="ZTkh-C4BfJ9tTJP__NKpp"
data-ws-component="Image"
src={"/assets/Group_1_(2)_EvgHLk8D-h4c6kGD9R0jG.png"}
width={100}
height={"/assets/Group_1_(2)_EvgHLk8D-h4c6kGD9R0jG.png"} />
</Box>
<Box
data-ws-id="WrdizGi2D8Fz5iRA6c8ZN"
data-ws-component="Box"
className="c1twnoba c13tpewa">
<Link
data-ws-id="DNEbOocnHoJh-HYhVJ-sZ"
data-ws-component="Link"
href={"https://calendly.com/mohitmotwani1999/olive"}
className="cja4d00 cmi5gnt cvfg8e c1uqhfdn c1ksxoi4 c1ss3ro8 c1u0oktp c1mang48 c1p8y3bj c10tb7jb c1tbqsf8 c1tubq6u c1lveiqp cwjywhw c1a3emqs cq0q2o2 cicsfna c332z52 cpenikt c1uqkwyv c10obfo5 c1cfjlc7 cz93543 c18ojo3a c971v69 c1vibfou c1wjpkxs c1xjlmy1 c1kavs50 c1qdz93x c1yknwe c16brilo c8blu03 c1c30yjp cpqu1n2 cacagee cd2ve3n ciotgsx c1dip7do ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1yesl7s cgyzrxo c1u9ong8 c1x3u2y c1l3fu6x">
{"Get in Touch"}
</Link>
</Box>
</Box>
<Box
data-ws-id="ULzLPY4qnuPc8wuj_G08m"
data-ws-component="Box"
className="c1twnoba c1jv6fwq c1vy6a0n c1j59bld cz0kds6 cb5ijcy cee2zhg c1coyq83 ceiuk84 cmyvz9y cwrmgdo c1cjt24l c1pow8ya c1iuog3m cwpdw4d">
<Box
data-ws-id="OKPbQwuxEuQoJFYTHSqhg"
data-ws-component="Box"
className="c1twnoba c1nlyjgt c1ltlv9x c1jnytir c1vy6a0n c1j59bld c1m7yiqq clufe4j">
<Heading
data-ws-id="BWnKYfBnjkI6AtBg8Nip0"
data-ws-component="Heading"
className="c1tbqsf8 crh4xym c14kkg6c c1dip7do c7jjez7 cd6vijc c1l3fu6x c1iy0pkd c1ks9sys cq0q2o2">
{"Automate Call Campaigns With Human-Like Voice AI"}
</Heading>
<Paragraph
data-ws-id="cto0JroAPyX5V-1AwCDKU"
data-ws-component="Paragraph"
className="c1tbqsf8 coo8ii0 c14kkg6c cin2jg1 c1dip7do c1x3u2y cb38pdg crkea01 coc9b6b c16arnsj c1881jp0 c16lb3dy c13e6u49 chkh63y cmqv1hl">
{"Seamlessly Launch, Manage, and Track AI-Powered Call Campaigns with Olive AI"}
</Paragraph>
<Box
data-ws-id="qH2NEgIvQVbJJNAlmp-13"
data-ws-component="Box"
className="c1twnoba c1cp5uwz c1vy6a0n c1j59bld c1p8y3bj c1y76a64 ca0gl3f c15mje2o">
<Link
data-ws-id="PbUph0R55TTB-7ZAr8B9n"
data-ws-component="Link"
href={"https://calendly.com/mohitmotwani1999/olive"}
className="chs43hq c14kkg6c cmi5gnt cvfg8e c1uqhfdn c1ksxoi4 c1mlz7eb cihupgk cv5orsw cqciqil c1m1w67o c1r16s9c c1h43rey c1x3u2y c1l3fu6x czx4ung c1b1ht1h cja4d00 c332z52 c19yvr79 c1k9d2dn cf4etin c1qcvcv0 cyy6gjx cviaych c1l3faaj c1qdz93x c1yknwe c16brilo c8blu03 c1c30yjp cyqya42 cacagee c1if0l5b c1uxmloe cvvbs3v cd2ve3n ciotgsx c1dip7do c84sq19 c16obloc c1fzn2gy c1417cfe c1r3o45q c1jqq980 c1nsjwms c1ravk58 chlw4iq c3we96t c1ao5iu5 cfho87c ctipp42 c17s0v09 cy1wof3 c1wjjhri c1qhiez9">
{"Get in Touch"}
</Link>
</Box>
</Box>
</Box>
<Box
data-ws-id="ECjwsK7oOmIl7T879NA_N"
data-ws-component="Box"
className="c1twnoba c1nlyjgt c1vy6a0n c1j59bld czl9ntb c1wo8qos c1irdt8j">
<Heading
data-ws-id="2xMV3xkv71xXiIYEMZiAw"
data-ws-component="Heading"
className="c1tbqsf8 c1jnytir c14kkg6c c1dip7do c7jjez7 coa8t4d cqu608j c1iy0pkd c1i5c3am c1es9bwp coc9b6b">
{"Central Hub For All Campaigns"}
</Heading>
<Vimeo
data-ws-id="4hWzRSxBtdTRtH-CCvIWt"
data-ws-component="Vimeo"
url={"https://vimeo.com/986990065?share=copy"}
autoplay={true}
showControls={false}
loop={true}
muted={true}
loading={"eager"}
className="c1h9da1m c1gfoolc czl9ntb c1mlz7eb cihupgk c1afl6mn cg1rbpn c140a3bg cqd5oqr c13gm9tm ccbhru4 cy09awe c1k8j4z ciodhc6 c1a4l24q cq0q2o2 cdk9pl3 cng73mk cy0usq9">
<VimeoSpinner
data-ws-id="l5fW4gI66G683XT9I27yo"
data-ws-component="VimeoSpinner"
className="c1o89gsj c1htljek c1sesslo cbiv32m chnodzp cbmxx16 cdq19ot">
<HtmlEmbed
data-ws-id="MECNfIR3Sfiz1C6rTc8k1"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"e2CRglijn891\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" viewBox=\"0 0 128 128\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id=\"e2CRglijn892_tr\" transform=\"translate(64,64) rotate(90)\"><circle id=\"e2CRglijn892\" r=\"42\" fill=\"none\" stroke=\"#39fbbb\" stroke-dasharray=\"263.89\" stroke-dashoffset=\"251.89\" stroke-linecap=\"round\" stroke-width=\"16\" transform=\"scale(-1,1) translate(0,0)\"/></g></svg>"} />
</VimeoSpinner>
<VimeoPlayButton
data-ws-id="umsHrjzxrCCC23mKNjH99"
data-ws-component="VimeoPlayButton"
aria-label={"Play button"}
className="c1o89gsj cfl8i57 c1b17xox c1htljek c1sesslo cfjoe9t cke1vd0 c1twnoba c1vy6a0n c1j59bld c13gm9tm ccbhru4 c1k8j4z cy09awe cp2qp5y cgwubrl c1x0vcxw c1ftzs5g czbk6r8 c1kab7xs c1tbqsf8 c4uv3km">
<Box
data-ws-id="uN3farno7R4EjqCHpZqWR"
data-ws-component="Box"
aria-hidden={"true"}
className="cdbulug c8dwfvz">
<HtmlEmbed
data-ws-id="nTbgknH567L217atmz56U"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z\"/></svg>"} />
</Box>
</VimeoPlayButton>
</Vimeo>
</Box>
<Box
data-ws-id="38XKk7YsDf2Eo_sHhAKoS"
data-ws-component="Box"
className="c1twnoba c1vy6a0n c1j59bld c1nlyjgt c65rmgt cl9ro3z">
<Heading
data-ws-id="ZCAgEZ2O2CPz8Ebq4G8Ce"
data-ws-component="Heading"
className="c1tbqsf8 crh4xym c14kkg6c c1dip7do c7jjez7 coa8t4d c1l3fu6x c1iy0pkd c1i5c3am c1es9bwp coaeim3">
{"Call Campaigns Reimagined"}
</Heading>
<Box
data-ws-id="TWCa0A86w1UIueEsAkJCr"
data-ws-component="Box"
className="c1twnoba c1jv6fwq ci7i0uv c13yft5o c1q4pe54 crlh4q9 c1bwl1d1 c151rvho c1vpll4j c1a4uqbb cn8d5n4 c1m2izj5 c1ndc58l cf5opyu c1wistfq">
<Box
data-ws-id="8eZwo-e_7Z484Sp-vQRQl"
data-ws-component="Box"
className="c1twnoba c1nlyjgt c14qbmc6 c1vy6a0n c1gauiy5 c1iwhlrr cqrhjgt">
<Box
data-ws-id="iyshNv90oCnvyb7XxTwFi"
data-ws-component="Box"
className="c125txkx cou797o cp2qp5y cgwubrl c1x0vcxw c1ftzs5g c1afl6mn cg1rbpn c140a3bg cqd5oqr ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1pydy8f c1iocr3e c7udofx c591mum c6es43g c1gf2543 ct2snzp c1c1zivi cs73unb c12ged47 cy87jdr">
<Heading
data-ws-id="WqdmOswmuBTYlEvk0mbKa"
data-ws-component="Heading"
className="c7jjez7 c19c7pm3 c1dip7do cqfbd4z c1jznqq4 c1mwfccn c1kb4mx7">
{"40%"}
</Heading>
<Paragraph
data-ws-id="qcf1Lwq48iRxsHK3NB9Es"
data-ws-component="Paragraph"
className="c1x3u2y c1tbqsf8 c1dip7do cdymj7r c1intses c123bkg1 c7p21o8 cuoraao c9pmauc cj4124w">
{"lesser on talk-time costs while "}
{""}
<br />
{""}
{"boosting your revenue"}
</Paragraph>
</Box>
<Box
data-ws-id="MDoUAvMxFLAH9hsn_l7BO"
data-ws-component="Box"
className="c125txkx cou797o cp2qp5y cgwubrl c1x0vcxw c1ftzs5g c1afl6mn cg1rbpn c140a3bg cqd5oqr ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1pydy8f c1iocr3e c7udofx c1twnoba c1nlyjgt c1vy6a0n c1j59bld c591mum c6es43g c1gf2543 ct2snzp c1c1zivi cs73unb c12ged47 cy87jdr">
<Image
data-ws-id="bCQChngmQkljV81Bv427c"
data-ws-component="Image"
src={"/assets/Brain_sYUeB0Kj3erS6HxwgQDk4.png"}
width={"/assets/Brain_sYUeB0Kj3erS6HxwgQDk4.png"}
height={"/assets/Brain_sYUeB0Kj3erS6HxwgQDk4.png"}
className="c1tkghtv cwdy2z5 c1lvg9rg c1eewfy" />
<Paragraph
data-ws-id="SUjVawoNXWdcfVFgqnnHp"
data-ws-component="Paragraph"
className="c1x3u2y c1tbqsf8 c1dip7do cdymj7r c1intses c123bkg1 c1gg2d4d cuoraao c9pmauc cegtynl">
{"Call your customers in their "}
{""}
<br />
{""}
{"highest recall window "}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="lOkma9Yuv4bBCVhMcZnCP"
data-ws-component="Box"
className="c45bw9a c1gauiy5 cs1ykzv c1iwhlrr cqrhjgt">
<Box
data-ws-id="EzxsUPtPDaZH-fV7L9udr"
data-ws-component="Box"
className="c125txkx cou797o cp2qp5y cgwubrl c1x0vcxw c1ftzs5g c1afl6mn cg1rbpn c140a3bg cqd5oqr ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1pydy8f c1iocr3e c7udofx c591mum c6es43g c1gf2543 ct2snzp c1c1zivi cs73unb c12ged47 cy87jdr">
<Box
data-ws-id="31fYSff8FiyMD4YgYHb1K"
data-ws-component="Box"
className="c1twnoba c1vy6a0n ci7i0uv chmoynh c1jjm3d c1b6nm3m">
<Box
data-ws-id="otUFmm0zZ6XqSwmj4mpez"
data-ws-component="Box">
<Image
data-ws-id="h-yLCYkcfhsctXfqwJiRz"
data-ws-component="Image"
src={"/assets/app_LnfgAucgRlo0xoAQ8QUWs.png"}
width={"/assets/app_LnfgAucgRlo0xoAQ8QUWs.png"}
height={"/assets/app_LnfgAucgRlo0xoAQ8QUWs.png"}
className="c1tkghtv cwdy2z5 c1lvg9rg c1eewfy" />
</Box>
<Box
data-ws-id="TaZlNpQ11t_t_3SqhDnX2"
data-ws-component="Box">
<Image
data-ws-id="5u_lIKCBwFUEnldN2va4T"
data-ws-component="Image"
src={"/assets/app_jFbLrs3hzanl-fnAYUo4R.png"}
width={"/assets/app_jFbLrs3hzanl-fnAYUo4R.png"}
height={"/assets/app_jFbLrs3hzanl-fnAYUo4R.png"}
className="c1tkghtv cwdy2z5 c1lvg9rg c1eewfy" />
</Box>
<Box
data-ws-id="giUDK061h8Io_PYlWTh0F"
data-ws-component="Box">
<Image
data-ws-id="PcNZB-FROsIIKlUJnIfyr"
data-ws-component="Image"
src={"/assets/app_tDdcZbQbF3YkYnVtzdRui.png"}
width={"/assets/app_tDdcZbQbF3YkYnVtzdRui.png"}
height={"/assets/app_tDdcZbQbF3YkYnVtzdRui.png"}
className="c1tkghtv cwdy2z5 c1lvg9rg c1eewfy" />
</Box>
</Box>
<Paragraph
data-ws-id="4-_33S67M8LKbeyqme147"
data-ws-component="Paragraph"
className="c1x3u2y c1tbqsf8 c1dip7do c1dq9qn c1gl4ce2 c123bkg1 c7p21o8 c9pmauc cf73zey">
{"Seamlessly integrate with existing systems to provide an enriching customer experience"}
</Paragraph>
</Box>
<Box
data-ws-id="deHxWr60TPb7zXCXX0OCE"
data-ws-component="Box"
className="c125txkx cou797o cp2qp5y cgwubrl c1x0vcxw c1ftzs5g c1afl6mn cg1rbpn c140a3bg cqd5oqr ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1pydy8f c1iocr3e c7udofx c591mum c6es43g c1gf2543 ct2snzp c1c1zivi cs73unb c12ged47 cy87jdr">
<Heading
data-ws-id="YtlRB6qC9MYYmgigLElS6"
data-ws-component="Heading"
className="c7jjez7 c19c7pm3 c1dip7do cqfbd4z c1jznqq4 cov2qju c1i5c3am">
<Italic
data-ws-id="VBI7y-4-yfZydUYEIlHlP"
data-ws-component="Italic"
className="cdqm74o">
{"0 set-up time"}
</Italic>
</Heading>
<Paragraph
data-ws-id="2GLvQExxZUWAh9b1uP5mZ"
data-ws-component="Paragraph"
className="c1x3u2y c1tbqsf8 c1dip7do cdymj7r c1046ruz c123bkg1 cij030q cuoraao c9pmauc ca8r7et">
{"Sign up and start customer interactions instantly "}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="HF_RYeeGNzTXOe1RCopbZ"
data-ws-component="Box"
className="c45bw9a c1gauiy5 cs1ykzv c1iwhlrr cqrhjgt">
<Box
data-ws-id="DYgFjYWHhLjaT6JwVOEUg"
data-ws-component="Box"
className="c125txkx cou797o cp2qp5y cgwubrl c1x0vcxw c1ftzs5g c1afl6mn cg1rbpn c140a3bg cqd5oqr ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1pydy8f c1iocr3e c7udofx c591mum c6es43g c1gf2543 ct2snzp c1c1zivi cs73unb c12ged47 cy87jdr">
<Heading
data-ws-id="SN2bMIn1lBYMbJbdK2hrB"
data-ws-component="Heading"
className="c7jjez7 c19c7pm3 c1dip7do cqfbd4z c1mwfccn c1spkgfs c1jznqq4 cv3fwy2 c1kb4mx7">
{"अ A"}
</Heading>
<Paragraph
data-ws-id="xHWGIsSpFNfJV26jHkKxS"
data-ws-component="Paragraph"
className="c1x3u2y c1tbqsf8 c1dip7do c295bde ct02zqd c123bkg1 c7p21o8 cuoraao c9pmauc cziuacq">
{"Interacts with customers in the language they are most comfortable in"}
</Paragraph>
</Box>
<Box
data-ws-id="DsmoB8jtEgNSppNjlUGWo"
data-ws-component="Box"
className="c125txkx cou797o cp2qp5y cgwubrl c1x0vcxw c1ftzs5g c1afl6mn cg1rbpn c140a3bg cqd5oqr ch3e1s9 c15eo6hu ctq4o5e c1274y9c c1pydy8f c1iocr3e c7udofx c1twnoba c1nlyjgt c1vy6a0n c1j59bld c591mum c6es43g c1gf2543 ct2snzp c1c1zivi cs73unb c12ged47 cy87jdr">
<Image
data-ws-id="dhh5EASKgXg_L45wICInd"
data-ws-component="Image"
src={"/assets/Group_1321314607_WQ6LIb7iBXgMfwE_iF1vz.png"}
width={"/assets/Group_1321314607_WQ6LIb7iBXgMfwE_iF1vz.png"}
height={"/assets/Group_1321314607_WQ6LIb7iBXgMfwE_iF1vz.png"}
className="c1tkghtv cwdy2z5 c1lvg9rg c1eewfy" />
<Paragraph
data-ws-id="Fv8WbAQch9gPVBlEL1ePo"
data-ws-component="Paragraph"
className="c1x3u2y c1tbqsf8 c1dip7do cdymj7r c1intses c123bkg1 c1fb749m cuoraao c9pmauc ca8r7et">
{"Round-the-clock availability even on high-traffic days like holidays  "}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="0PKopu7K1Vx9-M_LqvGP8"
data-ws-component="Box"
className="c1twnoba c1nlyjgt c1j59bld c1vy6a0n cz0kds6 cb5ijcy cee2zhg cmf3743 ceiuk84 cmyvz9y cwrmgdo c1cjt24l c1pow8ya cknz58g cw8i48d cbv1kf c7p21o8 czx4ung">
<Heading
data-ws-id="2IfOCgOst7msO5cTEkKVz"
data-ws-component="Heading"
className="c1tbqsf8 crh4xym c14kkg6c c1dip7do c7jjez7 coa8t4d c1l3fu6x c1iy0pkd c1es9bwp cv3fwy2">
{"FAQs"}
</Heading>
<Box
data-ws-id="jSX93GCDiu7jAfNA87D4q"
data-ws-component="Box"
className="cx40k43 c1wnp7jt c13yft5o c1twnoba c1nlyjgt c1vy6a0n c1j59bld czx4ung">
<Accordion
data-ws-id="RGreldu4qCqEJceFZ9g4W"
data-ws-component="@webstudio-is/sdk-components-react-radix:Accordion"
collapsible={true}
defaultValue={"0"}
className="crh4xym c1h1znlu c1tbqsf8 c13gm9tm ccbhru4 cy09awe c1k8j4z c14hyq9r c1n553oo c153r9r1 clh82p0 czx58rh c1uwi132 c1cpho3m cn1gsam cvbo4h6 c1x3u2y cq0q2o2">
<AccordionItem
data-ws-id="hKNQyE75C0C3txaI21h2m"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="0"
className="c1lrmhsw c1274y9c c1vlhhuo c1p8y3bj cqbyyv8 c1p3bon9 cs73unb c1qq9qf0 cy87jdr">
<AccordionHeader
data-ws-id="apYwMczqUPQS5e0rZ9pq9"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader"
className="c1twnoba cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionTrigger
data-ws-id="vbVjfTVb6lXGyHRpL8j6c"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger"
className="c1twnoba c1tqwum3 ckj3vic cwr5w85 c1vy6a0n c14qbmc6 c1v098ve c6yvut1 c9vhakk c8jxrvj c12fje91 c1gry2e3 c1tbqsf8 cqbyyv8 c1p3bon9 c1qq9qf0">
<Text
data-ws-id="yqpcQcHqwsryGKUGcpP6r"
data-ws-component="Text"
className="c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9 c1bycw4e">
{"What is Olive's Pricing?"}
</Text>
<Box
data-ws-id="m520rNFG74BwhXnnTw_j6"
data-ws-component="Box"
className="cxepy9k c1anph0v cg3kjyq ct2pmim cqbyyv8 c1p3bon9 c1qq9qf0">
<HtmlEmbed
data-ws-id="F6bzVP14Ip0NDtsseKSdK"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="QUYsHxJSTCAEtGmMRAjJq"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent"
className="cbdd4es cc8vwx2 clchyxc c4wrwq2 c6yvut1 c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9">
{"Calls made through Olive are charged on the basis of minutes of connected talk-time. Pricing starts at Rs. 8 per minute. Calls are billed to the second."}
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-id="vP2ffx1RJCtgbssuq7ono"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="1"
className="c1lrmhsw c1274y9c c1vlhhuo c1p8y3bj cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionHeader
data-ws-id="MFaxTq1rcC-ja8_ImgDV7"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader"
className="c1twnoba cqbyyv8 c1p3bon9 c1qq9qf0 c2a4vn6">
<AccordionTrigger
data-ws-id="4bs1MPQnQmHTKbDh9pF7H"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger"
className="c1twnoba c1tqwum3 ckj3vic cwr5w85 c1vy6a0n c14qbmc6 c1v098ve c6yvut1 c9vhakk c8jxrvj c12fje91 c1gry2e3 c1tbqsf8 cqbyyv8 c1p3bon9 c1qq9qf0">
<Text
data-ws-id="SbxhmTy5JVPs_1Wl69YPr"
data-ws-component="Text"
className="c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9 c1bycw4e">
{"What languages does Olive support?"}
</Text>
<Box
data-ws-id="4b3LhZOwHF5Q4PwoKDXGX"
data-ws-component="Box"
className="cxepy9k c1anph0v cg3kjyq ct2pmim cqbyyv8 c1p3bon9 c1qq9qf0">
<HtmlEmbed
data-ws-id="xIRt5dacg75mAk54U_ejh"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="XNewsdAm8OhwMwXslQBTY"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent"
className="cbdd4es cc8vwx2 clchyxc c4wrwq2 c6yvut1 c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9">
{"Olive currently supports English, Hindi and can also converse in Hinglish. Support for other regional languages like Tamil, Telugu, Kannada over the coming weeks"}
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-id="LSq2Els8efkty_UoZ0TIn"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="2"
className="c1lrmhsw c1274y9c c1vlhhuo c1p8y3bj cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionHeader
data-ws-id="fQoJa99faR0wUgVpqZkLR"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader"
className="c1twnoba cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionTrigger
data-ws-id="nxJSx1NsBPGlMQ9W9BIND"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger"
className="c1twnoba c1tqwum3 ckj3vic cwr5w85 c1vy6a0n c14qbmc6 c1v098ve c6yvut1 c9vhakk c8jxrvj c12fje91 c1gry2e3 c1tbqsf8 cqbyyv8 c1p3bon9 c1qq9qf0">
<Text
data-ws-id="5H4YvTHtVspqjM1NIX1fW"
data-ws-component="Text"
className="c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9 c1bycw4e">
{"Does Olive work outside of India?"}
</Text>
<Box
data-ws-id="TFHYMc1GulnlXlHnF-Vtw"
data-ws-component="Box"
className="cxepy9k c1anph0v cg3kjyq ct2pmim cqbyyv8 c1p3bon9 c1qq9qf0">
<HtmlEmbed
data-ws-id="IXRjrqArooYVY4sB-aG7T"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="pILZiddhm2W4A2TWsQ6zm"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent"
className="cbdd4es cc8vwx2 clchyxc c4wrwq2 c6yvut1 c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9">
{"We are currently only present in India but will be expanding our platform to cover other countries soon!"}
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-id="2u5ppHgmmIZDbVcO3crT9"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="3"
className="c1lrmhsw c1274y9c c1vlhhuo c1p8y3bj">
<AccordionHeader
data-ws-id="N511m7bIpbgq-CUQTxvZ9"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader"
className="c1twnoba cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionTrigger
data-ws-id="NW-JHadABuoNbozKRDDVN"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger"
className="c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9 c1bycw4e c1twnoba c1tqwum3 ckj3vic cwr5w85 c1vy6a0n c14qbmc6 c1v098ve c6yvut1 c9vhakk c8jxrvj c12fje91 c1gry2e3 c1tbqsf8">
<Text
data-ws-id="SDgo0nNAwZsg_7tg_uf-5"
data-ws-component="Text"
className="c3bda5v cy0usq9 cuvi9wm cvvbs3v">
{"Are inbound and outbound calls supported?"}
</Text>
<Box
data-ws-id="wJzHZMeNu7JQGS6xjIWFr"
data-ws-component="Box"
className="cxepy9k c1anph0v cg3kjyq ct2pmim cqbyyv8 c1p3bon9 c1qq9qf0">
<HtmlEmbed
data-ws-id="wvKru_yYycTmtH6NCNHlG"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="bNQjbybPDFQqERjWip27A"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent"
className="cbdd4es cc8vwx2 clchyxc c4wrwq2 c6yvut1 c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9">
{"Yes, Olive can support both inbound and outbound calls. You will be able to create campaigns which are specific to inbound and outbound calls. "}
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-id="j23m09xFXTawT5uC2aYru"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="4"
className="c1uxtuuf c1274y9c c1vlhhuo c1x7guje c1y5pdf9 c1v8kha8 c1p8y3bj cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionHeader
data-ws-id="x2Y8XM068rjueOUbWW2vS"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader"
className="c1twnoba cqbyyv8 c1p3bon9 c1qq9qf0">
<AccordionTrigger
data-ws-id="yjLEqfgIg4B2QewlQKWU1"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger"
className="c1twnoba c1tqwum3 ckj3vic cwr5w85 c1vy6a0n c14qbmc6 c1v098ve c6yvut1 c9vhakk c8jxrvj c12fje91 c1gry2e3 c1tbqsf8 cqbyyv8 c1p3bon9 c1qq9qf0">
<Text
data-ws-id="bg4ph1aamGQq_ZHz6IFU7"
data-ws-component="Text"
className="c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0 cy0usq9 c1bycw4e cvvbs3v">
{"Can Olive use my company's knowledge?"}
</Text>
<Box
data-ws-id="kB6vkClIi0Tdhuke15qEC"
data-ws-component="Box"
className="cxepy9k c1anph0v cg3kjyq ct2pmim cqbyyv8 c1p3bon9 c1qq9qf0">
<HtmlEmbed
data-ws-id="DUqz3muyQEe58s0C9pwgq"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="JptYkBzUiE-AP7qzuw2Zu"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent"
className="cbdd4es cc8vwx2 clchyxc c4wrwq2 c6yvut1 c1ra5clk cqbyyv8 c1p3bon9 c1qq9qf0">
{"When you configure a campaign, you will be able to feed Olive materials about your company and to that campaign which will help Olive reference material to help it accomplish the objective of the call."}
</AccordionContent>
</AccordionItem>
</Accordion>
</Box>
</Box>
</Body>
}


      export { Page }
    