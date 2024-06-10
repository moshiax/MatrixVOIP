"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[6202],{"./node_modules/matrix-react-sdk/src/async-components/views/dialogs/security/ImportE2eKeysDialog.tsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=r("./node_modules/react/index.js"),o=r("./node_modules/matrix-js-sdk/src/logger.ts"),i=r("./node_modules/matrix-react-sdk/src/utils/MegolmExportEncryption.ts"),a=r("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),l=r("./node_modules/matrix-react-sdk/src/components/views/dialogs/BaseDialog.tsx"),c=r("./node_modules/matrix-react-sdk/src/components/views/elements/Field.tsx");var d=function(e){return e.Edit="edit",e.Importing="importing",e}(d||{});class m extends s.Component{constructor(e){super(e),(0,n.A)(this,"unmounted",!1),(0,n.A)(this,"file",(0,s.createRef)()),(0,n.A)(this,"onFormChange",(()=>{var e;const t=null===(e=this.file.current)||void 0===e?void 0:e.files;this.setState({enableSubmit:""!==this.state.passphrase&&!(null==t||!t.length)})})),(0,n.A)(this,"onPassphraseChange",(e=>{this.setState({passphrase:e.target.value},this.onFormChange)})),(0,n.A)(this,"onFormSubmit",(e=>{var t,r;e.preventDefault();const n=null===(t=this.file.current)||void 0===t||null===(r=t.files)||void 0===r?void 0:r[0];return n&&this.startImport(n,this.state.passphrase),!1})),(0,n.A)(this,"onCancelClick",(e=>(e.preventDefault(),this.props.onFinished(!1),!1))),this.state={enableSubmit:!1,phase:d.Edit,errStr:null,passphrase:""}}componentWillUnmount(){this.unmounted=!0}startImport(e,t){return this.setState({errStr:null,phase:d.Importing}),function(e){return new Promise(((t,r)=>{const n=new FileReader;n.onload=e=>{var n;null!==(n=e.target)&&void 0!==n&&n.result?t(e.target.result):r(new Error("Failed to read file due to unknown error"))},n.onerror=r,n.readAsArrayBuffer(e)}))}(e).then((e=>i.c(e,t))).then((e=>this.props.matrixClient.getCrypto().importRoomKeysAsJson(e))).then((()=>{this.props.onFinished(!0)})).catch((e=>{if(o.v.error("Error importing e2e keys:",e),this.unmounted)return;const t=e.friendlyText||(0,a._t)("error|unknown");this.setState({errStr:t,phase:d.Edit})}))}render(){const e=this.state.phase!==d.Edit;return s.createElement(l.A,{className:"mx_importE2eKeysDialog",onFinished:this.props.onFinished,title:(0,a._t)("settings|key_export_import|import_title")},s.createElement("form",{onSubmit:this.onFormSubmit},s.createElement("div",{className:"mx_Dialog_content"},s.createElement("p",null,(0,a._t)("settings|key_export_import|import_description_1")),s.createElement("p",null,(0,a._t)("settings|key_export_import|import_description_2")),s.createElement("div",{className:"error"},this.state.errStr),s.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},s.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},s.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},s.createElement("label",{htmlFor:"importFile"},(0,a._t)("settings|key_export_import|file_to_import"))),s.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},s.createElement("input",{ref:this.file,id:"importFile",type:"file",autoFocus:!0,onChange:this.onFormChange,disabled:e}))),s.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},s.createElement(c.A,{label:(0,a._t)("settings|key_export_import|enter_passphrase"),value:this.state.passphrase,onChange:this.onPassphraseChange,size:64,type:"password",disabled:e})))),s.createElement("div",{className:"mx_Dialog_buttons"},s.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:(0,a._t)("action|import"),disabled:!this.state.enableSubmit||e}),s.createElement("button",{onClick:this.onCancelClick,disabled:e},(0,a._t)("action|cancel")))))}}},"./node_modules/matrix-react-sdk/src/utils/MegolmExportEncryption.ts":(e,t,r)=>{r.d(t,{L:()=>d,c:()=>c});var n=r("./node_modules/matrix-js-sdk/src/logger.ts"),s=r("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),o=r("./node_modules/matrix-react-sdk/src/SdkConfig.ts");const i=window.crypto.subtle||window.crypto.webkitSubtle;function a(e,t){return{message:e,friendlyText:t}}function l(){return(0,s._t)("encryption|export_unsupported")}async function c(e,t){const r=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let r=0;for(;;){const e=t.indexOf("\n",r);if(e<0)throw new Error("Header line not found");const n=t.slice(r,e).trim();if(r=e+1,n===p)break}const n=r;for(;;){const e=t.indexOf("\n",r);if(t.slice(r,e<0?void 0:e).trim()===u)break;if(e<0)throw new Error("Trailer line not found");r=e+1}const s=r;return function(e){const t=window.atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}(t.slice(n,s))}(e),n=o.Ay.get().brand;if(r.length<1)throw a("Invalid file: too short",(0,s._t)("encryption|import_invalid_keyfile",{brand:n}));if(1!==r[0])throw a("Unsupported version",(0,s._t)("encryption|import_invalid_keyfile",{brand:n}));const c=r.length-69;if(c<0)throw a("Invalid file: too short",(0,s._t)("encryption|import_invalid_keyfile",{brand:n}));const d=r.subarray(1,17),h=r.subarray(17,33),y=r[33]<<24|r[34]<<16|r[35]<<8|r[36],f=r.subarray(37,37+c),_=r.subarray(-32),[w,g]=await m(d,y,t),b=r.subarray(0,-32);let E,v;try{E=await i.verify({name:"HMAC"},g,_,b)}catch(e){throw a("subtleCrypto.verify failed: "+e,l())}if(!E)throw a("hmac mismatch",(0,s._t)("encryption|import_invalid_passphrase"));try{v=await i.decrypt({name:"AES-CTR",counter:h,length:64},w,f)}catch(e){throw a("subtleCrypto.decrypt failed: "+e,l())}return(new TextDecoder).decode(new Uint8Array(v))}async function d(e,t,r){const n=(r=r||{}).kdf_rounds||5e5,s=new Uint8Array(16);window.crypto.getRandomValues(s);const o=new Uint8Array(16);window.crypto.getRandomValues(o),o[8]&=127;const[c,d]=await m(s,n,t),y=(new TextEncoder).encode(e);let f;try{f=await i.encrypt({name:"AES-CTR",counter:o,length:64},c,y)}catch(e){throw a("subtleCrypto.encrypt failed: "+e,l())}const _=new Uint8Array(f),w=1+s.length+o.length+4+_.length+32,g=new Uint8Array(w);let b=0;g[b++]=1,g.set(s,b),b+=s.length,g.set(o,b),b+=o.length,g[b++]=n>>24,g[b++]=n>>16&255,g[b++]=n>>8&255,g[b++]=255&n,g.set(_,b),b+=_.length;const E=g.subarray(0,b);let v;try{v=await i.sign({name:"HMAC"},d,E)}catch(e){throw a("subtleCrypto.sign failed: "+e,l())}const x=new Uint8Array(v);return g.set(x,b),function(e){const t=96,r=Math.ceil(e.length/t),n=new Array(r+3);n[0]=p;let s,o=0;for(s=1;s<=r;s++)n[s]=h(e.subarray(o,o+t)),o+=t;return n[s++]=u,n[s]="",(new TextEncoder).encode(n.join("\n")).buffer}(g)}async function m(e,t,r){const s=new Date;let o,c;try{o=await i.importKey("raw",(new TextEncoder).encode(r),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw a("subtleCrypto.importKey failed: "+e,l())}try{c=await i.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},o,512)}catch(e){throw a("subtleCrypto.deriveBits failed: "+e,l())}const d=new Date;n.v.log("E2e import/export: deriveKeys took "+(d.getTime()-s.getTime())+"ms");const m=c.slice(0,32),p=c.slice(32),u=i.importKey("raw",m,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch((e=>{throw a("subtleCrypto.importKey failed for AES key: "+e,l())})),h=i.importKey("raw",p,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch((e=>{throw a("subtleCrypto.importKey failed for HMAC key: "+e,l())}));return Promise.all([u,h])}const p="-----BEGIN MEGOLM SESSION DATA-----",u="-----END MEGOLM SESSION DATA-----";function h(e){const t=String.fromCharCode.apply(null,Array.from(e));return window.btoa(t)}}}]);
//# sourceMappingURL=6202.js.map