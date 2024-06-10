"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[8273],{"./node_modules/matrix-react-sdk/src/components/views/rooms/CollapsibleButton.tsx":(e,t,o)=>{o.d(t,{J:()=>u});var n=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/react/index.js"),i=o("./node_modules/classnames/index.js"),l=o.n(i),c=o("./node_modules/matrix-react-sdk/src/components/views/elements/AccessibleButton.tsx"),a=o("./node_modules/matrix-react-sdk/src/components/views/rooms/MessageComposerButtons.tsx"),m=o("./node_modules/matrix-react-sdk/src/components/views/context_menus/IconizedContextMenu.tsx");const d=["title","children","className","iconClassName","inputRef"],u=e=>{let{title:t,children:o,className:i,iconClassName:u,inputRef:p}=e,x=(0,s.A)(e,d);return!!(0,r.useContext)(a.ZF)?r.createElement(m.R$,(0,n.A)({},x,{iconClassName:u,label:t,inputRef:p})):r.createElement(c.A,(0,n.A)({},x,{title:t,className:l()(i,u),ref:p}),o)}},"./node_modules/matrix-react-sdk/src/components/views/rooms/EmojiButton.tsx":(e,t,o)=>{o.d(t,{h:()=>u});var n=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/classnames/index.js"),r=o.n(s),i=o("./node_modules/react/index.js"),l=o("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),c=o("./node_modules/matrix-react-sdk/src/components/structures/ContextMenu.tsx"),a=o("./node_modules/matrix-react-sdk/src/components/views/emojipicker/EmojiPicker.tsx"),m=o("./node_modules/matrix-react-sdk/src/components/views/rooms/CollapsibleButton.tsx"),d=o("./node_modules/matrix-react-sdk/src/components/views/rooms/MessageComposerButtons.tsx");function u({addEmoji:e,menuPosition:t,className:o}){const s=(0,i.useContext)(d.ZF),[u,p,x,_]=(0,c.EF)();let g=null;if(u&&p.current){const o=null!=t?t:(0,c.qv)(p.current.getBoundingClientRect()),r=()=>{_(),null==s||s()};g=i.createElement(c.Ay,(0,n.A)({},o,{onFinished:r,managed:!1}),i.createElement(a.Ay,{onChoose:e,onFinished:r}))}const C=r()("mx_EmojiButton",o,{mx_EmojiButton_highlight:u});return i.createElement(i.Fragment,null,i.createElement(m.J,{className:C,iconClassName:"mx_EmojiButton_icon",onClick:x,title:(0,l._t)("common|emoji"),inputRef:p}),g)}},"./node_modules/matrix-react-sdk/src/components/views/rooms/MessageComposerButtons.tsx":(e,t,o)=>{o.d(t,{Ay:()=>L,ZF:()=>A});var n=o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/classnames/index.js"),i=o.n(r),l=o("./node_modules/matrix-js-sdk/src/matrix.ts"),c=o("./node_modules/react/index.js"),a=o("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),m=o("./node_modules/matrix-react-sdk/src/components/views/rooms/CollapsibleButton.tsx"),d=o("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts"),u=o("./node_modules/matrix-react-sdk/src/components/views/dialogs/ErrorDialog.tsx"),p=o("./node_modules/matrix-react-sdk/src/components/views/location/index.tsx"),x=o("./node_modules/matrix-react-sdk/src/Modal.tsx"),_=o("./node_modules/matrix-react-sdk/src/components/views/elements/PollCreateDialog.tsx"),g=o("./node_modules/matrix-react-sdk/src/MatrixClientPeg.ts"),C=o("./node_modules/matrix-react-sdk/src/ContentMessages.ts"),f=o("./node_modules/matrix-react-sdk/src/contexts/MatrixClientContext.tsx"),h=o("./node_modules/matrix-react-sdk/src/contexts/RoomContext.ts"),k=o("./node_modules/matrix-react-sdk/src/hooks/useDispatcher.ts"),v=o("./node_modules/matrix-react-sdk/src/utils/BrowserWorkarounds.ts"),y=o("./node_modules/matrix-react-sdk/src/components/views/context_menus/IconizedContextMenu.tsx"),E=o("./node_modules/matrix-react-sdk/src/components/views/rooms/EmojiButton.tsx"),b=o("./node_modules/matrix-react-sdk/src/utils/arrays.ts"),w=o("./node_modules/matrix-react-sdk/src/hooks/useSettings.ts"),M=o("./node_modules/matrix-react-sdk/src/components/views/elements/AccessibleButton.tsx");const A=(0,c.createContext)(null);function R(e){return c.createElement(E.h,{key:"emoji_button",addEmoji:e.addEmoji,menuPosition:e.menuPosition,className:"mx_MessageComposer_button"})}function T(){return c.createElement(N,{key:"controls_upload"})}const P=(0,c.createContext)(null),B=({roomId:e,relation:t,children:o})=>{const n=(0,c.useContext)(f.Ay),s=(0,c.useContext)(h.Ay),r=(0,c.useRef)(null),i=()=>{var e;null!=n&&n.isGuest()?d.Ay.dispatch({action:"require_registration"}):null===(e=r.current)||void 0===e||e.click()};(0,k.F)(d.Ay,(e=>{s.timelineRenderingType===e.context&&"upload_file"===e.action&&i()}));return c.createElement(P.Provider,{value:i},o,c.createElement("input",{ref:r,type:"file",style:{display:"none"},multiple:!0,onClick:v.e,onChange:o=>{var r;0!==(null===(r=o.target.files)||void 0===r?void 0:r.length)&&(C.Ay.sharedInstance().sendContentListToRoom(Array.from(o.target.files),e,t,n,s.timelineRenderingType),o.target.value="")}}))},N=()=>{const e=(0,c.useContext)(A),t=(0,c.useContext)(P);return c.createElement(m.J,{className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_upload",onClick:()=>{null==t||t(),null==e||e()},title:(0,a._t)("common|attachment")})};function S(e){return e.showStickersButton?c.createElement(m.J,{id:"stickersButton",key:"controls_stickers",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_stickers",onClick:()=>e.setStickerPickerOpen(!e.isStickerPickerOpen),title:e.isStickerPickerOpen?(0,a._t)("composer|close_sticker_picker"):(0,a._t)("common|sticker")}):null}const j=e=>e.showVoiceBroadcastButton?c.createElement(m.J,{key:"start_voice_broadcast",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_voiceBroadcast",onClick:e.onStartVoiceBroadcastClick,title:(0,a._t)("voice_broadcast|action")}):null;function I(e,t){return t?null:c.createElement(m.J,{key:"voice_message_send",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_voiceMessage",onClick:e.onRecordStartEndClick,title:(0,a._t)("composer|voice_message_button")})}function F(e,t){return c.createElement(O,{key:"polls",room:e,relation:t})}class O extends c.PureComponent{constructor(...e){super(...e),(0,n.A)(this,"context",void 0),(0,n.A)(this,"onCreateClick",(()=>{var e;null===(e=this.context)||void 0===e||e.call(this);if(this.props.room.currentState.maySendEvent(l.M_POLL_START.name,g.J.safeGet().getSafeUserId())){var t;const e=(null===(t=this.props.relation)||void 0===t?void 0:t.rel_type)===l.THREAD_RELATION_TYPE.name?this.props.relation.event_id:void 0;x.Ay.createDialog(_.A,{room:this.props.room,threadId:e},"mx_CompoundDialog",!1,!0)}else x.Ay.createDialog(u.A,{title:(0,a._t)("composer|poll_button_no_perms_title"),description:(0,a._t)("composer|poll_button_no_perms_description")})}))}render(){var e;return(null===(e=this.props.relation)||void 0===e?void 0:e.rel_type)===l.THREAD_RELATION_TYPE.name?null:c.createElement(m.J,{className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_poll",onClick:this.onCreateClick,title:(0,a._t)("composer|poll_button")})}}function D(e,t,o){const n=t.getMember(o.getSafeUserId());return e.showLocationButton&&n?c.createElement(p.Uo,{key:"location",roomId:t.roomId,relation:e.relation,sender:n,menuPosition:e.menuPosition}):null}function H({isRichTextEnabled:e,onClick:t}){const o=e?(0,a._t)("composer|mode_plain"):(0,a._t)("composer|mode_rich_text");return c.createElement(m.J,{className:"mx_MessageComposer_button",iconClassName:i()({mx_MessageComposer_plain_text:!e,mx_MessageComposer_rich_text:e}),onClick:t,title:o})}(0,n.A)(O,"contextType",A);const L=e=>{const t=(0,c.useContext)(f.Ay),{room:o,narrow:n}=(0,c.useContext)(h.Ay),r=(0,w.t)("feature_wysiwyg_composer");if(!t||!o||e.haveRecording)return null;let l,m;n?(l=[r?c.createElement(H,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):R(e)],m=[T(),S(e),I(e,n),j(e),e.showPollsButton?F(o,e.relation):null,D(e,o,t)]):(l=[r?c.createElement(H,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):R(e),T()],m=[S(e),I(e,n),j(e),e.showPollsButton?F(o,e.relation):null,D(e,o,t)]),l=(0,b.Bo)(l),m=(0,b.Bo)(m);const d=i()({mx_MessageComposer_button:!0,mx_MessageComposer_buttonMenu:!0,mx_MessageComposer_closeButtonMenu:e.isMenuOpen});return c.createElement(B,{roomId:o.roomId,relation:e.relation},l,m.length>0&&c.createElement(M.A,{className:d,onClick:e.toggleButtonMenu,title:(0,a._t)("quick_settings|sidebar_settings")}),e.isMenuOpen&&c.createElement(y.Ay,(0,s.A)({onFinished:e.toggleButtonMenu},e.menuPosition,{wrapperClassName:"mx_MessageComposer_Menu",compact:!0}),c.createElement(A.Provider,{value:e.toggleButtonMenu},c.createElement(y.tx,null,m))))}},"./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/SendWysiwygComposer.tsx":(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var n=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/react/index.js"),i=o("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts"),l=o("./node_modules/matrix-react-sdk/src/dispatcher/actions.ts"),c=o("./node_modules/matrix-react-sdk/src/contexts/RoomContext.ts"),a=o("./node_modules/matrix-react-sdk/src/hooks/useDispatcher.ts"),m=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/hooks/utils.ts"),d=o("./node_modules/matrix-react-sdk/src/dispatcher/payloads/ComposerInsertPayload.ts"),u=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/ComposerContext.ts"),p=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/utils/selection.ts");var x=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx"),_=o("./node_modules/classnames/index.js"),g=o.n(_);var C=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/hooks/useIsFocused.ts");var f=o("./node_modules/matrix-react-sdk/src/hooks/useSettings.ts"),h=o("./node_modules/matrix-react-sdk/src/Keyboard.ts"),k=o("./node_modules/matrix-js-sdk/src/logger.ts"),v=o("./node_modules/matrix-react-sdk/src/Typeguards.ts");function y(e,t){var o;const[n,s]=(0,r.useState)(null),i=e=>{k.v.log(`## 26037 ## wysiwyg useSuggestion hook setting suggestion data to ${null===e||e instanceof Function?e:e.mappedSuggestion.keyChar+e.mappedSuggestion.text}`),s(e)};return{suggestion:null!==(o=null==n?void 0:n.mappedSuggestion)&&void 0!==o?o:null,handleCommand:e=>function(e,t,o,n){var s;if(null===t)return;const{node:r}=t,i=`${e} `;r.textContent=i,null===(s=document.getSelection())||void 0===s||s.setBaseAndExtent(r,i.length,r,i.length),n(i),o(null)}(e,n,i,t),handleMention:(e,o,s)=>E(e,o,s,n,i,t),handleAtRoomMention:e=>E("#","@room",e,n,i,t),onSelect:()=>function(e,t){var o;const n=document.getSelection();if(null===e.current||null===n||!n.isCollapsed||"#text"!==(null===(o=n.anchorNode)||void 0===o?void 0:o.nodeName))return void t(null);const{anchorNode:s,anchorOffset:r}=n;if(null===s.textContent)return void t(null);const i=document.createNodeIterator(e.current,NodeFilter.SHOW_TEXT).nextNode(),l=s===i,c=function(e,t,o){if(t<0||t>e.length)return null;let n=t,s=t;for(;b(e,n);)n--;for(;w(e,s);)s++;const r=e.slice(n,s),i=function(e){const t=e.charAt(0),o=e.slice(1);switch(t){case"/":return{keyChar:t,text:o,type:"command"};case"#":case"@":return{keyChar:t,text:o,type:"mention"};default:return null}}(r);if(null===i||"command"===i.type&&(!o||0!==n||s!==e.length))return null;return{mappedSuggestion:i,startOffset:n,endOffset:n+r.length}}(s.textContent,r,l);if(null===c)return void t(null);t({mappedSuggestion:c.mappedSuggestion,node:s,startOffset:c.startOffset,endOffset:c.endOffset})}(e,i)}}function E(e,t,o,n,s,r){var i,l,c,a;if(null===n)return;const{node:m}=n,d=document.createElement("a"),u=document.createTextNode(t);d.setAttribute("href",e),d.setAttribute("contenteditable","false");for(const[e,t]of o.entries())d.setAttribute(e,t);d.appendChild(u);const p=document.createTextNode((null===(i=m.textContent)||void 0===i?void 0:i.slice(0,n.startOffset))||"​"),x=document.createTextNode(` ${null!==(l=null===(c=m.textContent)||void 0===c?void 0:c.slice(n.endOffset))&&void 0!==l?l:""}`),_=m.parentNode;(0,v.P)(_)&&(_.insertBefore(p,m),_.insertBefore(d,m),_.insertBefore(x,m),_.removeChild(m)),null===(a=document.getSelection())||void 0===a||a.setBaseAndExtent(x,1,x,1),r(),s(null)}function b(e,t){return!(t<=0)&&!/\s/.test(e[t-1])}function w(e,t){return!(t>=e.length)&&!/\s/.test(e[t])}var M=o("./node_modules/matrix-react-sdk/src/contexts/MatrixClientContext.tsx");function A(e,t,o,n){const s=(0,c.mP)(),i=(0,M.nH)(),l=(0,r.useRef)(null),a=(0,r.useRef)(null),[d,u]=(0,r.useState)(e),p=(0,r.useCallback)((()=>{l.current&&(l.current.innerHTML=""),null==o||o()}),[l,o]),x=(0,r.useCallback)((e=>{if((0,v.E)(e))u(e),null==t||t(e);else if((0,v.P)(l)&&(0,v.P)(l.current)){const e=l.current.innerHTML;u(e),null==t||t(e)}}),[t,l]),{suggestion:_,onSelect:g,handleCommand:C,handleMention:k,handleAtRoomMention:E}=y(l,x),b=(0,r.useCallback)((e=>{e.target instanceof HTMLDivElement&&x(e.target.innerHTML)}),[x]),w=(0,r.useCallback)((e=>{const{nativeEvent:t}=e;let o=!1;if((0,m.wg)(t)){const e=t instanceof ClipboardEvent?t.clipboardData:t.dataTransfer;o=(0,m.VI)(t,e,s,i,n)}o?e.preventDefault():b(e)}),[n,i,b,s]),A=!(0,f.t)("MessageComposerInput.ctrlEnterToSend"),R=(0,r.useCallback)((e=>{if(!(0,m.hi)(a,e)&&e.key===h.Uz.ENTER){const t=h.vL?e.metaKey:e.ctrlKey;A&&!e.shiftKey&&(e.preventDefault(),e.stopPropagation(),p()),!A&&t&&(e.preventDefault(),e.stopPropagation(),p())}}),[a,A,p]);return{ref:l,autocompleteRef:a,onBeforeInput:w,onInput:b,onPaste:w,onKeyDown:R,content:d,setContent:x,suggestion:_,onSelect:g,handleCommand:C,handleMention:k,handleAtRoomMention:E}}var R=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/hooks/useSetCursorPosition.ts"),T=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/components/Editor.tsx"),P=o("./node_modules/matrix-react-sdk/src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx");function B({className:e,disabled:t=!1,onSend:o,onChange:n,children:s,placeholder:i,initialContent:l,leftComponent:c,rightComponent:a,eventRelation:m}){const{ref:d,autocompleteRef:u,onBeforeInput:x,onInput:_,onPaste:f,onKeyDown:h,content:k,setContent:v,suggestion:y,onSelect:E,handleCommand:b,handleMention:w,handleAtRoomMention:M}=A(l,n,o,m),B=function(e,t){return(0,r.useMemo)((()=>({clear:()=>{e.current&&(e.current.innerHTML="")},insertText:o=>{const n=document.getSelection();if(e.current&&n){const s=e.current.innerHTML,{anchorOffset:r,focusOffset:i}=n;e.current.innerHTML=`${s.slice(0,r)}${o}${s.slice(i)}`,(0,p.td)({anchorNode:e.current.firstChild,anchorOffset:r+o.length,focusNode:e.current.firstChild,focusOffset:i+o.length,isForward:!0}),t(e.current.innerHTML)}}})),[e,t])}(d,v);!function(e="",t){(0,r.useEffect)((()=>{t.current&&(t.current.innerHTML=e)}),[t,e])}(l,d),(0,R.V)(t,d);const{isFocused:N,onFocus:S}=(0,C.j)(),j=!k&&i||void 0;return r.createElement("div",{className:g()(e,{[`${e}-focused`]:N}),onFocus:S,onBlur:S,onBeforeInput:x,onInput:_,onPaste:f,onKeyDown:h,onSelect:E},r.createElement(P.W,{ref:u,suggestion:y,handleMention:w,handleCommand:b,handleAtRoomMention:M}),r.createElement(T.K,{ref:d,disabled:t,leftComponent:c,rightComponent:a,placeholder:j}),null==s?void 0:s(d,B))}var N=o("./node_modules/matrix-react-sdk/src/components/views/rooms/E2EIcon.tsx"),S=o("./node_modules/matrix-react-sdk/src/components/views/rooms/EmojiButton.tsx");function j({menuPosition:e}){const t=(0,c.mP)();return r.createElement(S.h,{menuPosition:e,addEmoji:e=>(i.Ay.dispatch({action:l.r.ComposerInsert,text:e,timelineRenderingType:t.timelineRenderingType}),!0)})}const I=["isRichTextEnabled","e2eStatus","menuPosition"],F=(0,r.forwardRef)((function({disabled:e=!1,composerFunctions:t},o){return function(e,t,o){const n=(0,c.mP)(),s=(0,u.Hx)(),x=(0,r.useRef)(null),_=(0,r.useCallback)((r=>{var i;if(e||null==t||!t.current)return;const a=null!==(i=r.context)&&void 0!==i?i:c.Ae.Room;switch(r.action){case"reply_to_event":case l.r.FocusAComposer:case l.r.FocusSendMessageComposer:(0,m.Hj)(t,a,n,x);break;case l.r.ClearAndFocusSendMessageComposer:if(r.timelineRenderingType!==n.timelineRenderingType)break;o.clear(),(0,m.Hj)(t,a,n,x);break;case l.r.ComposerInsert:if(r.timelineRenderingType!==n.timelineRenderingType)break;if(r.composerType!==d.D.Send)break;r.userId||r.event||r.text&&(0,p.td)(s.selection).then((()=>o.insertText(r.text)))}}),[e,t,n,o,s]);(0,a.F)(i.Ay,_)}(e,o,t),null}));function O(e){let{isRichTextEnabled:t,e2eStatus:o,menuPosition:i}=e,l=(0,s.A)(e,I);const c=t?x.k:B,a=(0,r.useRef)((0,u.AP)({eventRelation:l.eventRelation}));return r.createElement(u.EW.Provider,{value:a.current},r.createElement(c,(0,n.A)({className:"mx_SendWysiwygComposer",leftComponent:o&&r.createElement(N.A,{status:o}),rightComponent:r.createElement(j,{menuPosition:i})},l),((e,t)=>r.createElement(F,{disabled:l.disabled,ref:e,composerFunctions:t}))))}}}]);
//# sourceMappingURL=8273.js.map