(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[20],{"21i1":function(e,t,i){"use strict"
var r=i("yiTI")
var n=i("xe+K")
function o(e,t,i,r){const n=!i
const o=n?t:"function"===typeof r?r:t[i]
false
return o}var a=i("ouhR")
var s=i.n(a)
const l=!ENV.use_rce_enhancements&&i("rkWX").default
function c(e,t,i){e.css("display","none")
const o=t.onFocus
t.onFocus=function(){ENV.use_rce_enhancements||g.showSidebar()
o instanceof Function&&o(...arguments)}
r["a"].loadOnTarget(e,t,(t,r)=>{const o=b(e)
const a=p(s()(t))
a.data("remoteEditor",r)
o.trigger(n["a"],r)
i&&i(r)})}function d(e){const t=b(e)
const i=t.attr("id")
const r="tinymce-parent-of-".concat(i)
if(t.parent().attr("id")!==r)return t.wrap("<div id='".concat(r,"' style='visibility: hidden'></div>"))}function u(){s()(".mce-resizehandle").attr("aria-hidden",true)}let h=0
function f(){return"random_editor_id_".concat(h++)}function _(e){const t=s()(e)
const i="attr"in t?t.attr("id"):t.id
i&&""!=i||t.attr("id",f())}function p(e){const t=b(e)
const i=t.attr("id")
if(!i||""==i)return t
const r=s()("#".concat(i))
if(r.length<=0)return t
return r}const m="with the new RCE you don't need to call this method, it is a no op since there is no sidebar"
const g={preloadRemoteModule(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{}
return r["a"].preload(e)},initSidebar:o(m,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
ENV.use_rce_enhancements||l.init(e)}),showSidebar:o(m,()=>{ENV.use_rce_enhancements||l.show()}),hideSidebar:o(m,()=>{ENV.use_rce_enhancements||l.hide()}),loadNewEditor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
let i=arguments.length>2?arguments[2]:void 0
let r=b(e)
if(r.length<=0)return
_(r)
t=s.a.extend({},t)
const n=e=>{t.focus&&this.activateRCE(r)
i&&i(e)}
r=this.freshNode(r)
if(t.manageParent){delete t.manageParent
d(r)}c(r,t,n)
u()},callOnRCE(e,t){let i=b(e)
i=this.freshNode(i)
for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a]
return Object(n["d"])(i,t,...o)},destroyRCE(e){let t=b(e)
t=this.freshNode(t)
Object(n["b"])(t)
ENV.use_rce_enhancements||l.hide()},activateRCE(e){let t=b(e)
t=this.freshNode(t)
Object(n["c"])(t)
ENV.use_rce_enhancements||l.show()},freshNode:p,ensureID:_}
function b(e){return e.length?e:s()(e)}t["a"]=g},Cvk5:function(e,t,i){"use strict"
i.r(t)
var r=i("pQTu")
var n=i("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"editor_accessibility":{"accessibles":{"background_color":"لون الخلفية، اضغط لأسفل للتحديد","forecolor":"لون النص، اضغط لأسفل للتحديد"},"titles":{"font_size":"حجم الخط، اضغط لأسفل للتحديد","formatting":"التنسيق، اضغط لأسفل للتحديد","rte_help":"منطقة نص منسق. اضغط على ALT+F8 للمساعدة"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"cy":{"editor_accessibility":{"accessibles":{"background_color":"Lliw\'r Cefndir, pwyswch i lawr i ddewis","forecolor":"Lliw\'r Testun, pwyswch i lawr i ddewis"},"titles":{"font_size":"Maint y Ffont, pwyswch i lawr i ddewis","formatting":"Fformat, pwyswch i lawr i ddewis","rte_help":"Ardal Testun Cyfoethog. Pwyswch ALT+F8 i gael help"}},"rich_content_editor_2708ef21":"Golygydd Cynnwys Cyfoethog"},"da":{"editor_accessibility":{"accessibles":{"background_color":"Baggrundsfarve, tryk ned for at vælge","forecolor":"Tekstfarve, tryk ned for at vælge"},"titles":{"font_size":"Skriftstørrelse, tryk ned for at vælge","formatting":"Formatering, tryk ned for at vælge","rte_help":"Område med RTF. Tryk på ALT+F8 for hjælp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"da-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Baggrundsfarve, tryk ned for at vælge","forecolor":"Tekstfarve, tryk ned for at vælge"},"titles":{"font_size":"Skriftstørrelse, tryk ned for at vælge","formatting":"Formatering, tryk ned for at vælge","rte_help":"Område med RTF. Tryk på ALT+F8 for hjælp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"de":{"editor_accessibility":{"accessibles":{"background_color":"Hintergrundfarbe, zum Auswählen Pfeil-nach-unten drücken","forecolor":"Textfarbe, zum Auswahlen Pfeil-nach-unten drücken"},"titles":{"font_size":"Schriftgröße, zum Auswählen Pfeil-nach-unten drücken","formatting":"Formatierung, zum Auswählen Pfeil-nach-unten drücken","rte_help":"Rich Text-Bereich. Für Hilfe \\u003cAlt\\u003e+F8 drücken"}},"rich_content_editor_2708ef21":"Rich-Content-Editor"},"el":{"editor_accessibility":{"accessibles":{"background_color":"Χρώμα Φόντου, πιέστε για επιλογή","forecolor":"Χρώμα Κειμένου, πιέστε για επιλογή"},"titles":{"font_size":"Μέγεθος Γραμματοσειράς, πιέστε για επιλογή","formatting":"Μορφοποίηση, πατήστε κάτω για επιλογή","rte_help":"\\u003cmrk mid=\\"6144\\" mtype=\\"seg\\"\\u003eΠεριοχή Rich Text.\\u003c/mrk\\u003e \\u003cmrk mid=\\"6145\\" mtype=\\"seg\\"\\u003eΠατήστε ALT+F8 για βοήθεια\\u003c/mrk\\u003e"}},"rich_content_editor_2708ef21":"Επεξεργαστής Πλούσιου Περιεχομένου-rich content"},"en-AU":{"editor_accessibility":{"accessibles":{"background_color":"Background Colour, press down to select","forecolor":"Text Colour, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help."}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-AU-x-unimelb":{"editor_accessibility":{"accessibles":{"background_color":"Background Colour, press down to select","forecolor":"Text Colour, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help."}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-CA":{"editor_accessibility":{"accessibles":{"background_color":"Background Color, press down to select","forecolor":"Text Color, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-lbs":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-ukhe":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"es":{"editor_accessibility":{"accessibles":{"background_color":"Color de fondo, pulse abajo para seleccionar","forecolor":"Color de texto, pulse abajo para seleccionar"},"titles":{"font_size":"Tamaño del texto, pulse abajo para seleccionar","formatting":"Formato, pulse abajo para seleccionar","rte_help":"Área del texto enriquecido. Presione ALT+F8 para ayuda"}},"rich_content_editor_2708ef21":"Editor de contenido enriquecido"},"fa":{"editor_accessibility":{"accessibles":{"background_color":"رنگ پس زمینه، کلید down را برای انتخاب فشار دهید","forecolor":"رنگ متن، کلید down را برای انتخاب فشار دهید"},"titles":{"font_size":"اندازه قلم، کلید down را برای انتخاب فشار دهید","formatting":"در حال قالب بندی، کلید down را برای انتخاب فشار دهید","rte_help":"قسمت دارای متن غنی. ALT+F8 را برای راهنمایی فشار دهید."}},"rich_content_editor_2708ef21":"ویرایشگر محتوای غنی"},"fi":{"editor_accessibility":{"accessibles":{"background_color":"Taustaväri, valitse painamalla alas","forecolor":"Tekstin väri, valitse painamalla alas"},"titles":{"font_size":"Fontin koko, valitse painamalla alas","formatting":"Muotoilu, valitse painamalla alas","rte_help":"RTF-muoto Ohjeet painamalla ALT+F8"}},"rich_content_editor_2708ef21":"Rikas sisältöeditori"},"fr":{"editor_accessibility":{"accessibles":{"background_color":"Couleur de fond. Appuyez pour sélectionner.","forecolor":"Couleur du texte. Appuyez pour sélectionner."},"titles":{"font_size":"Taille du texte. Appuyez pour sélectionner.","formatting":"Mise en forme. Appuyez pour sélectionner.","rte_help":"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l\'aide"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi"},"fr-CA":{"editor_accessibility":{"accessibles":{"background_color":"Couleur de fond. Appuyez pour sélectionner.","forecolor":"Couleur du texte. Appuyez pour sélectionner."},"titles":{"font_size":"Taille du texte. Appuyez pour sélectionner.","formatting":"Mise en forme. Appuyez pour sélectionner.","rte_help":"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l\'aide"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi"},"he":{"editor_accessibility":{"accessibles":{"background_color":"צבע רקע, יש להקיש כדי לבחור","forecolor":"צבע טקסט, יש להקיש כדי לבחור"},"titles":{"font_size":"גודל אות, יש להקיש כדי לבחור","formatting":"עיצוב, יש להקיש כדי לבחור","rte_help":"איזור תוכן עשיר. יש להקיש ALT+F8 לעזרה"}},"rich_content_editor_2708ef21":"עורך תוכן עשיר"},"ht":{"editor_accessibility":{"accessibles":{"background_color":"Koulè Fon, peze anba pou ka seleksyone","forecolor":"Koulè Tèks, peze anba pou ka seleksyone"},"titles":{"font_size":"Gwosè Tèks, peze anba pou ka seleksyone","formatting":"Fòmataj, peze anba pou ka seleksyone","rte_help":"Zòn Tèks Rich. Peze ALT+F8 pou èd"}},"rich_content_editor_2708ef21":"Editè Kontni Rich"},"hu":{"editor_accessibility":{"accessibles":{"background_color":"Háttérszín, nyomja le a kiválasztáshoz","forecolor":"Szövegszín, nyomja le a kiválasztáshoz"},"titles":{"font_size":"Betűméret, nyomja le a kiválasztáshoz","formatting":"Formázás, nyomja le a kiválasztáshoz","rte_help":"Vizuális szövegterület, nyomja le az ALT+F8-at a segítséghez"}},"rich_content_editor_2708ef21":"Vizuális szövegszerkesztő"},"hy":{"editor_accessibility":{"accessibles":{"background_color":"Ֆոնի գույն, ընտրելու համար սեղմեք ներքև","forecolor":"Տեքստի գույն, ընտրելու համար սեղմեք ներքև"},"titles":{"font_size":"Տառերի չափ, ընտրելու համար սեղմեք ներքև","formatting":"Ֆորմատավորում, ընտրելու համար սեղմեք ներքև","rte_help":"Ֆորմատավորված տեքստի դաշտ, տեղեկությունների համար սեղմել ALT+F8 "}},"rich_content_editor_2708ef21":"Ֆորմատավորված տեքստի խմբագիր"},"is":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnslitur, ýttu á niðurör til að velja","forecolor":"Textalitur, ýttu á niðurör til að velja"},"titles":{"font_size":"Stafastærð, ýttu á niðurör til að velja","formatting":"Forsníð, ýttu á niðurör til að velja","rte_help":"Mótað textasvæði. Ýttu á ALT+F8 til að fá hjálp"}},"rich_content_editor_2708ef21":"Rich Content ritill"},"it":{"editor_accessibility":{"accessibles":{"background_color":"Colore sfondo, premi per selezionare","forecolor":"Colore testo, premi per selezionare"},"titles":{"font_size":"Dimensioni carattere, premi per selezionare","formatting":"Formattazione, premi per selezionare","rte_help":"Area di testo RTF. Premi ALT+F8 per la Guida"}},"rich_content_editor_2708ef21":"Editor di contenuti avanzati"},"ja":{"editor_accessibility":{"accessibles":{"background_color":"背景色、押して選択","forecolor":"テキスト色、押して選択"},"titles":{"font_size":"フォント サイズ、押して選択","formatting":"書式設定、押して選択","rte_help":"リッチテキストエリア。ヘルプへは、ALT+F8を押してください"}},"rich_content_editor_2708ef21":"リッチ コンテンツ エディタ"},"ko":{"editor_accessibility":{"accessibles":{"background_color":"배경색, 선택하려면 누름","forecolor":"텍스트 색, 선택하려면 누름"},"titles":{"font_size":"글자 크기, 선택하려면 누름","formatting":"서식, 선택하려면 누름","rte_help":"Rich Text Area. Press ALT+F8 for help"}}},"mi":{"editor_accessibility":{"accessibles":{"background_color":"Tae Papamuri, ki te pēhi ki raro tīpako","forecolor":"Tae Kuputuhi, ki te pēhi ki raro tīpako"},"titles":{"font_size":"Rahi Momotuhi, ki te pēhi ki raro tīpako","formatting":"Whakahōputu, ki te pēhi ki raro tīpako","rte_help":"Horahanga Kupu Taunaki. Pēhi ALT + K8 no te tauturu"}},"rich_content_editor_2708ef21":"Ētita Ihirangi Whai Rawa"},"nb":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk nedover for å velge","forecolor":"Tekstfarge, trykk nedover for å velge"},"titles":{"font_size":"Skriftstørrelse, trykk nedover for å velge","formatting":"Formatering, trykk nedover for å velge","rte_help":"Riktekstområde. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Rich innholdsredigering"},"nb-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk nedover for å velge","forecolor":"Tekstfarge, trykk nedover for å velge"},"titles":{"font_size":"Skriftstørrelse, trykk nedover for å velge","formatting":"Formatering, trykk nedover for å velge","rte_help":"Riktekstområde. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Rich innholdsredigering"},"nl":{"editor_accessibility":{"accessibles":{"background_color":"Achtergrondkleur, er op drukken om een optie te selecteren","forecolor":"Tekstkleur, er op drukken om een optie te selecteren"},"titles":{"font_size":"Tekstkleur, er op drukken om een optie te selecteren","formatting":"Opmaak, er op drukken om een optie te selecteren","rte_help":"Rich Text Area. Druk ALT+F8 voor hulp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"nn":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk ned for å velje","forecolor":"Tekstfarge, trykk ned for å velje"},"titles":{"font_size":"Skriftstorleik, trykk ned for å velje","formatting":"Formatering, trykk ned for å velje","rte_help":"Område for rikt tekstformat. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Redigeringsprogram for rikt innhald"},"pl":{"editor_accessibility":{"accessibles":{"background_color":"Kolor tła; naciskaj do dołu, aby wybrać","forecolor":"Kolor tekstu; naciskaj do dołu, aby wybrać"},"titles":{"font_size":"Rozmiar czcionki; naciskaj do dołu, aby wybrać","formatting":"Formatowanie; naciskaj do dołu, aby wybrać","rte_help":"Obszar Rich Text. Wciśnij ALT+F8 po pomoc"}},"rich_content_editor_2708ef21":"Edytor wzbogaconej zawartości"},"pt":{"editor_accessibility":{"accessibles":{"background_color":"Cor de fundo, premir para baixo para selecionar","forecolor":"Cor do texto, premir para baixo para selecionar"},"titles":{"font_size":"Tamanho da letra, premir para baixo para selecionar","formatting":"Formatação, premir para baixo para selecionar","rte_help":"Área Rich Text. Pressione ALT+F8 para ajuda"}},"rich_content_editor_2708ef21":"Editor de conteúdo avançado"},"pt-BR":{"editor_accessibility":{"accessibles":{"background_color":"Cor de fundo, pressione para selecionar","forecolor":"Cor do texto, pressione para selecionar"},"titles":{"font_size":"Tamanho da fonte, pressione para selecionar","formatting":"Formatação, pressione para selecionar","rte_help":"Área de Texto Rico. Pressione ALT + F8 para obter ajuda"}},"rich_content_editor_2708ef21":"Editor de conteúdo de rich text"},"ru":{"editor_accessibility":{"accessibles":{"background_color":"Цвет фона, нажмите стрелку вниз, чтобы выбрать","forecolor":"Цвет текста, нажмите стрелку вниз, чтобы выбрать"},"titles":{"font_size":"Размер шрифта, нажмите стрелку вниз, чтобы выбрать","formatting":"Форматирование, нажмите стрелку вниз, чтобы выбрать","rte_help":"Область форматированного текста. Нажмите ALT + F8 для справки"}},"rich_content_editor_2708ef21":"Редактор форматированного текста"},"sl":{"editor_accessibility":{"accessibles":{"background_color":"Barva ozadja; za izbiro pritisnite navzdol.","forecolor":"Barva besedila; za izbiro pritisnite navzdol."},"titles":{"font_size":"Velikost pisave; za izbiro pritisnite navzdol.","formatting":"Oblikovanje; za izbiro pritisnite navzdol.","rte_help":"Območje besedila Za pomoč pritisnite ALT+F8."}},"rich_content_editor_2708ef21":"Urejevalnik"},"sv":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrundsfärg, tryck ner för att välja","forecolor":"Textfärg, tryck ner för att välja"},"titles":{"font_size":"Typsnittsstorlek, trycker ner för att välja","formatting":"Formatering, tryck ner för att välja","rte_help":"Rik text-område. Tryck ALT+F8 för hjälp"}},"rich_content_editor_2708ef21":"Innehållsredigerare"},"sv-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrundsfärg, tryck ner för att välja","forecolor":"Textfärg, tryck ner för att välja"},"titles":{"font_size":"Typsnittsstorlek, trycker ner för att välja","formatting":"Formatering, tryck ner för att välja","rte_help":"Rik text-område. Tryck ALT+F8 för hjälp"}},"rich_content_editor_2708ef21":"Innehållsredigerare"},"tr":{"editor_accessibility":{"accessibles":{"background_color":"Arkaplan rengi, aşağı tuşa basın ve seçin","forecolor":"Yazı rengi, aşağı tuşa basın ve seçin"},"titles":{"font_size":"Yazı büyüklüğü, aşağı tuşa basın ve seçin","formatting":"Format, aşağı tuşa basın ve seçin","rte_help":"Zengin Metin Alanı. Yardım için ALT+F8 e basın"}},"rich_content_editor_2708ef21":"Zengin İçerik Editörü"},"uk":{"editor_accessibility":{"accessibles":{"background_color":"Колір фону, натисніть внизу, щоб обрати","forecolor":"Колір тексту, натисніть внизу, щоб обрати"},"titles":{"font_size":"Розмір шрифту, натисніть внизу, щоб обрати","formatting":"Форматування, натисніть внизу, щоб вибрати","rte_help":"Багатофункціональна область тексту. Натисніть ALT+F8 для довідки"}},"rich_content_editor_2708ef21":"Покращений редактор контенту"},"zh-Hans":{"editor_accessibility":{"accessibles":{"background_color":"背景颜色，按下即可选择","forecolor":"文本颜色，按下即可选择"},"titles":{"font_size":"字体大小，按下即可选择","formatting":"格式，按下即可选择","rte_help":"富文本区域，按 Alt+ F8 寻求帮助"}},"rich_content_editor_2708ef21":"富内容编辑器"},"zh-Hant":{"editor_accessibility":{"accessibles":{"background_color":"背景顏色，按下以選擇","forecolor":"文字顏色，按下以選擇"},"titles":{"font_size":"字體大小，按下以選擇","formatting":"格式化，按下以選擇","rte_help":"富文本區域。按 ALT+F8 求助"}},"rich_content_editor_2708ef21":"富內容編輯器"}}'))
i("jQeR")
i("0sPK")
var o=r["default"].scoped("editor_accessibility")
var a=i("ouhR")
var s=i.n(a)
i.d(t,"default",function(){return l})
class l{constructor(e){this.editor=e
this.id_prepend=e.id
this.$el=s()("#".concat(e.editorContainer.id))}accessiblize(){this._cacheElements()
this._addTitles()
this._addLabels()
this._accessiblizeMenubar()
this._removeStatusbarFromTabindex()}_cacheElements(){this.$iframe=this.$el.find(".mce-edit-area iframe")}_addLabels(){this.$el.attr("aria-label",o.t("Rich Content Editor"))
s()(this.editor.getBody()).attr("aria-label",s()('label[for="'.concat(this.id_prepend,'"]')).text())
this.$el.find("div[aria-label='Font Sizes']").attr("aria-label",o.t("titles.font_size","Font Size, press down to select"))
this.$el.find("div.mce-listbox.mce-last:not([aria-label])").attr("aria-label",o.t("titles.formatting","Formatting, press down to select"))
this.$el.find("div[aria-label='Text color']").attr("aria-label",o.t("accessibles.forecolor","Text Color, press down to select"))
this.$el.find("div[aria-label='Background color'").attr("aria-label",o.t("accessibles.background_color","Background Color, press down to select"))}_addTitles(){this.$iframe.attr("title",o.t("titles.rte_help","Rich Text Area. Press ALT+F8 for help"))}_accessiblizeMenubar(){const e=this.$el.find(".mce-menubar")
const t=e.find(".mce-menubtn").first()
e.hide()
this.editor.addShortcut("Alt+F9","",()=>{e.show()
t.focus()
this.editor.addShortcut("Alt+F9","",()=>t.focus())})}_removeStatusbarFromTabindex(){const e=this.$el.find(".mce-statusbar > .mce-container-body")
e.attr("tabindex",-1)}}},rkWX:function(e,t,i){"use strict"
i.r(t)
var r=i("ouhR")
var n=i.n(r)
var o=i("yiTI")
function a(e){o["a"].loadSidebarOnTarget(n()("#editor_tabs").get(0),e)}const s={instance:void 0,pendingShow:false,initializing:false,subscriptions:{},init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.instance&&!this.initializing){this.initializing=true
const e=e=>{this.initializing=false
this.instance=e
this.pendingShow&&this.show()}
a(e)}this.subscriptions=e},show(){if(this.instance){this.instance.show()
this.subscriptions.show&&this.subscriptions.show()}else this.pendingShow=true},hide(){if(this.instance){this.instance.hide()
this.subscriptions.hide&&this.subscriptions.hide()}else this.pendingShow=false},reset(){this.instance=void 0
this.initializing=false
this.subscriptions={}}}
t["default"]=s},yiTI:function(e,t,i){"use strict"
var r=i("rePB")
var n=i("ODXe")
var o=i("ouhR")
var a=i.n(o)
var s=i("GLiE")
var l=i.n(s)
var c=i("x1Tw")
function d(e){let t=e
let i=null
return e=>{null===i&&(i=c["default"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{i=null
t=e.data.token
return t}))
"function"===typeof e&&i.then(e)
return i}}var u=i("HIhM")
class h{constructor(e,t,i,r){this.formatBtnGroup="bold italic underline forecolor backcolor removeformat alignleft aligncenter alignright"
this.positionBtnGroup="outdent indent superscript subscript bullist numlist"
this.fontBtnGroup="ltr rtl fontsizeselect formatselect check_a11y"
this.baseURL=e.baseURL
this.maxButtons=t.maxVisibleEditorButtons
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=i
this.idAttribute=r}defaultConfig(){return{selector:"#".concat(this.idAttribute),toolbar:this.toolbar(),[!window.ENV.use_rce_enhancements&&"theme"]:"modern",[!window.ENV.use_rce_enhancements&&"skin"]:false,directionality:Object(u["b"])(),plugins:"autolink,media,paste,table,lists,".concat(window.ENV.use_rce_enhancements?",instructure-ui-icons,instructure_condensed_buttons,instructure_documents":"textcolor",",link,directionality,a11y_checker,wordcount"),external_plugins:{instructure_image:"/javascripts/tinymce_plugins/instructure_image/plugin.js",instructure_links:"/javascripts/tinymce_plugins/instructure_links/plugin.js",instructure_embed:"/javascripts/tinymce_plugins/instructure_embed/plugin.js",instructure_equation:"/javascripts/tinymce_plugins/instructure_equation/plugin.js",instructure_external_tools:"/javascripts/tinymce_plugins/instructure_external_tools/plugin.js",instructure_record:"/javascripts/tinymce_plugins/instructure_record/plugin.js"},language_load:false,convert_urls:false,menubar:true,branding:false,remove_script_host:true,resize:true,block_formats:"Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Preformatted=pre",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track",content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,browser_spellcheck:true,init_instance_callback:e=>{$("#".concat(e.id)).parent().css("visibility","visible")}}}external_buttons(){let e=""
for(let t=0;this.extraButtons&&t<this.extraButtons.length;t++)this.extraButtons.length<=this.maxButtons||t<this.maxButtons-1?e="".concat(e," instructure_external_button_").concat(this.extraButtons[t].id):e.match(/instructure_external_button_clump/)||(e+=" instructure_external_button_clump")
return e}buildInstructureButtons(){let e=" instructure_image instructure_equation".concat(window.ENV.use_rce_enhancements?" lti_tool_dropdown":"")
e+=this.external_buttons()
this.instConfig&&this.instConfig.allowMediaComments&&this.instConfig.kalturaSettings&&!this.instConfig.kalturaSettings.hide_rte_button&&(e+=" instructure_record")
const t=this.instConfig&&this.instConfig.equellaEnabled?" instructure_equella":""
e+=t
return e}balanceButtons(e){const t="table media instructure_links unlink".concat(e)
let i=""
let r=""
let n=""
if(this.viewportWidth<359&&this.viewportWidth>0){i=this.formatBtnGroup
r="".concat(this.positionBtnGroup," ").concat(t)
n=this.fontBtnGroup}else if(this.viewportWidth<1200){i="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup)
r="".concat(t," ").concat(this.fontBtnGroup)}else i="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup," ").concat(t," ").concat(this.fontBtnGroup)
return window.ENV.use_rce_enhancements?[i,r,n]:[i,r,n].map(e=>e.split(" ").join(","))}toolbar(){const e=this.buildInstructureButtons()
return this.balanceButtons(e)}}function f(e,t,r){if(void 0==r)var n=false
else n=r
return{auto_focus:t,setup:function(t){var r=a()("#"+t.id)
t.on("keyup",e=>{a()(document).trigger("editorKeyUp",[e])})
t.on("change",()=>{r.trigger("change")})
t.on("keyup keydown click mousedown",()=>{n&&t.selection&&r.data("last_bookmark",t.selection.getBookmark(1))})
ENV.use_rce_enhancements||t.on("init",()=>{const e=e=>e.default?e.default:e
const r=e(i("Cvk5"))
new r(t).accessiblize()})
t.on("init",()=>{a()(window).triggerHandler("resize")
a()(t.contentDocument).bind("DOMNodeInserted",t=>{var i,r=t.target
1===r.nodeType&&"IMG"===r.nodeName&&(i=a()(r).data("url"))&&a()(r).attr("src",e.activeEditor.documentBaseURI.toAbsolute(i))})
"onfocusout"in t.contentWindow||a()(t.contentWindow).blur(e=>{if(!t.removed&&t.undoManager.typing){t.undoManager.typing=false
t.undoManager.add()}})})}}}var _=i("u7Gu")
function p(e,t){var i=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
i.push.apply(i,r)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{}
t%2?p(i,true).forEach(function(t){Object(r["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function g(e,t,i,r,n){var o=new h(n,_["a"],e,t)
var a=void 0
return m({},o.defaultConfig(),{},f(n,a,r),{},i.tinyOptions||{})}var b=g
var k=i("An8g")
var v=i("pQTu")
var w=i("m0r6")
Object(w["a"])(JSON.parse('{"ar":{"ExternalToolsPlugin":{"more_external_tools":"مزيد من الأدوات الخارجية"}},"cy":{"ExternalToolsPlugin":{"more_external_tools":"Mwy o Adnoddau Allanol"}},"da":{"ExternalToolsPlugin":{"more_external_tools":"Flere eksterne værktøjer"}},"de":{"ExternalToolsPlugin":{"more_external_tools":"Weitere externe Tools"}},"el":{"ExternalToolsPlugin":{"more_external_tools":"Περισσότερα Εξωτερικά Εργαλεία"}},"en-AU":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"}},"en-AU-x-unimelb":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"}},"en-CA":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"}},"en-GB":{"ExternalToolsPlugin":{"more_external_tools":"More external tools"}},"en-GB-x-ukhe":{"ExternalToolsPlugin":{"more_external_tools":"More external tools"}},"es":{"ExternalToolsPlugin":{"more_external_tools":"Más herramientas externas"}},"fa":{"ExternalToolsPlugin":{"more_external_tools":"ابزارهای بیرونی دیگر"}},"fi":{"ExternalToolsPlugin":{"more_external_tools":"Lisää ulkoisia työkaluja"}},"fr":{"ExternalToolsPlugin":{"more_external_tools":"Plus d’outils externes"}},"fr-CA":{"ExternalToolsPlugin":{"more_external_tools":"Plus d’outils externes"}},"he":{"ExternalToolsPlugin":{"more_external_tools":"כלים חיצוניים נוספים"}},"ht":{"ExternalToolsPlugin":{"more_external_tools":"Plis Zouti Ekstèn"}},"hu":{"ExternalToolsPlugin":{"more_external_tools":"További külső eszközök"}},"hy":{"ExternalToolsPlugin":{"more_external_tools":"Լրացուցիչ արտաքին գործիքներ"}},"is":{"ExternalToolsPlugin":{"more_external_tools":"Fleiri ytri tæki"}},"it":{"ExternalToolsPlugin":{"more_external_tools":"Altri strumenti esterni"}},"ja":{"ExternalToolsPlugin":{"more_external_tools":"その他の外部ツール"}},"ko":{"ExternalToolsPlugin":{"more_external_tools":"더 많은 외부 도구"}},"mi":{"ExternalToolsPlugin":{"more_external_tools":"Ētahi atu Utauta waho"}},"nb":{"ExternalToolsPlugin":{"more_external_tools":"Flere eksterne verktøy"}},"nl":{"ExternalToolsPlugin":{"more_external_tools":"Meerdere externe tools"}},"nn":{"ExternalToolsPlugin":{"more_external_tools":"Fleire eksterne verktøy"}},"pl":{"ExternalToolsPlugin":{"more_external_tools":"Więcej zewnętrznych narzędzi"}},"pt":{"ExternalToolsPlugin":{"more_external_tools":"Mais ferramentas externas"}},"pt-BR":{"ExternalToolsPlugin":{"more_external_tools":"Mais ferramentas externas"}},"ru":{"ExternalToolsPlugin":{"more_external_tools":"Больше внешних инструментов"}},"sv":{"ExternalToolsPlugin":{"more_external_tools":"Fler externa verktyg"}},"tr":{"ExternalToolsPlugin":{"more_external_tools":"Daha Fazla Harici Araç"}},"zh-Hans":{"ExternalToolsPlugin":{"more_external_tools":"更多外部工具"}},"zh-Hant":{"ExternalToolsPlugin":{"more_external_tools":"更多外部工具"}}}'))
i("jQeR")
i("0sPK")
var y=v["default"].scoped("ExternalToolsPlugin")
var x=i("5Ky4")
a.a.fn.dropdownList=function(e){if(this.length){var t=a()("#instructure_dropdown_list")
if("hide"==e||"remove"==e||t.data("current_dropdown_initiator")==this[0]){t.remove().data("current_dropdown_initiator",null)
return}e=a.a.extend({},a.a.fn.dropdownList.defaults,e)
var i=t.children("div.list")
if(!i.length){t=a()("<div id='instructure_dropdown_list'><div class='list ui-widget-content'></div></div>").appendTo("body")
a()(document).mousedown(e=>{t.data("current_dropdown_initiator")&&!a()(e.target).closest("#instructure_dropdown_list").length&&t.hide().data("current_dropdown_initiator",null)}).mouseup(e=>{if(t.data("current_dropdown_initiator")&&!a()(e.target).closest("#instructure_dropdown_list").length){t.hide()
setTimeout(()=>{t.data("current_dropdown_initiator",null)},100)}}).add(this).add(t).keydown(e=>{if(t.data("current_dropdown_initiator")){var i=t.find(".ui-state-hover,.ui-state-active")
if(38==e.keyCode){i.length&&i.prev().length?i.removeClass("ui-state-hover ui-state-active").addClass("minimal").prev().addClass("ui-state-hover").removeClass("minimal").find("span").focus():$item.focus()
return false}if(40==e.keyCode){i.length?i.next().length&&i.removeClass("ui-state-hover ui-state-active").addClass("minimal").next().addClass("ui-state-hover").removeClass("minimal").find("span").focus():t.find(".option:first").addClass("ui-state-hover").removeClass("minimal").find("span").focus()
return false}if(13==e.keyCode&&i.length){i.click()
return false}t.hide().data("current_dropdown_initiator",null)}})
t.find(".option").removeClass("ui-state-hover ui-state-active").addClass("minimal")
t.click(e=>{t.hide().data("current_dropdown_initiator",null)})
i=t.children("div.list")}t.data("current_dropdown_initiator",this[0])
e.width&&t.width(e.width)
e.height&&t.find(".list").css("maxHeight",e.height)
i.empty()
a.a.each(e.options,(e,t)=>{var r=a()("<div class='option minimal' style='cursor: pointer; padding: 2px 5px; overflow: hidden; white-space: nowrap;'>  <span tabindex='-1'>"+e+"</span></div>").appendTo(i)
function n(){r.parent().find("div.option").removeClass("ui-state-hover ui-state-active").addClass("minimal")}a.a.isFunction(t)?r.addClass("ui-state-default").bind({mouseenter:function(){n()
r.addClass("ui-state-hover").removeClass("minimal")},mouseleave:n,mousedown:function(e){e.preventDefault()
n()
r.addClass("ui-state-active").removeClass("minimal")},mouseup:n,click:t}):r.addClass("ui-state-disabled").bind({mousedown:function(e){e.preventDefault()}})})
var r=this.offset(),n=this.outerHeight()
this.outerWidth()
t.css({whiteSpace:"nowrap",position:"absolute",top:r.top+n,left:r.left+5,right:""}).hide().show()
t.offset().left+t.width()>a()(window).width()&&t.css({left:"",right:0})}return this}
a.a.fn.dropdownList.defaults={height:250,width:"auto"}
i("JI1W")
var T={buttonConfig(e,t){const i={title:e.name,classes:"widget btn instructure_external_tool_button"}
if(ENV.use_rce_enhancements){i.text=i.title
i.onAction=()=>t.execCommand("instructureExternalButton".concat(e.id))
i.type="menuitem"}else i.cmd="instructureExternalButton".concat(e.id)
e.canvas_icon_class?i.icon="hack-to-avoid-mce-prefix ".concat(e.canvas_icon_class):i.image=e.icon_url
return i},clumpedButtonMapping:(e,t,i)=>e.reduce((e,r)=>{let n
n=r.canvas_icon_class?"<i class='".concat(Object(x["a"])(r.canvas_icon_class),"' data-tool-id='").concat(r.id,"'></i>"):"<img src='".concat(Object(x["a"])(r.icon_url),"' data-tool-id='").concat(r.id,"'/>")
n+="&nbsp;".concat(Object(x["a"])(r.name))
e[n]=function(){i(r,t)}
return e},{}),attachClumpedDropdown(e,t,i){e.dropdownList({options:t})
i.on("click",()=>{e.dropdownList("hide")})}}
var E=i("mykf")
var C=i("xe+K")
var z=function(e,t){this.id=e.id
this.selectedContent=e.selection.getContent()
this.selectionDetails={node:e.selection.getNode(),range:e.selection.getRng()}
this.$editorEl=t
this.getEditor=function(){if(void 0!==this.$editorEl)return this.$editorEl
return a()("#"+this.id)}
this.createLink=function(e,t,i){Object(C["d"])(this.getEditor(),"create_link",{url:e,classes:t,selectedContent:this.selectedContent,dataAttributes:i,selectionDetails:this.selectionDetails})}}
var j=z
var P=i("iklP")
i("YGE8")
i("p6Wi")
class A{fetchYouTubeTitle(e,t){const i=ENV.JWT
const r=ENV.RICH_CONTENT_APP_HOST
const n="//".concat(r,"/api/youtube_title?vid_id=").concat(e)
a.a.ajax({headers:{Authorization:"Bearer ".concat(i)},url:n}).success(i=>{i.id===e&&t(i.title)}).error(e=>{t(null,e)})}titleYouTubeText(e){const t=a.a.youTubeID(e.attr("href"))
this.fetchYouTubeTitle(t,(i,r)=>{if(r){console.error('failed to get video title from youtube for "'.concat(t,'":'),r.responseText)
const i=(+e.attr("data-ytt-failcnt")||0)+1
e.attr("data-ytt-failcnt",i)}else{e.text(i)
e.attr("data-preview-alt",i)}})}}var O=["instructure_scribd_file"]
var F=["instructure_scribd_file"]
var R=new WeakMap
function B(e){var t=e.closest("img").attr("src")
return"<img src='"+Object(x["a"])(t)+"'/>"}function L(e){e.nodeChanged()
return new j(e)}function N(e,t){var i=e.replace(/(auto_open|inline_disabled)/g,"")
t.find(".auto_show_inline_content").attr("checked")&&(i+=" auto_open")
t.find(".disable_inline_content").attr("checked")&&(i+=" inline_disabled")
return i}function S(e,t,i,r){var n=e.find("#instructure_link_prompt_form")
n.off("submit")
n.on("submit",function(n){n.preventDefault()
n.stopPropagation()
e.data("editor")
var o=a()(this).find(".prompt").val()
var s=e.find(".inst-link-preview-alt input").val()
var l=N(i.call(),e)
var c={"preview-alt":s}
e.dialog("close")
t.createLink(o,l,c)
r.call()})}function I(e){var t=L(e)
var i=t.getEditor()
var r=a()("#instructure_link_prompt")
var n=""
r.removeClass("for_inline_content").find(".disable_enhancement").hide().end().find(".auto_show").hide().end().find(".insert_button").text("Insert Link").end().find(".disable_inline_content").attr("checked",false).end().find(".auto_show_inline_content").attr("checked",false)
if(0==r.length){r=a()(document.createElement("div"))
Object(P["b"])("BookmarkService",function(e){var t=r.data("editor")
var i=a()("<div style='text-align: left; margin-left: 20px;'/>")
var o,s
for(var l in e){o=e[l].user_service
if(o){s=a()("<a href='#' class='bookmark_service no-hover'/>")
s.addClass(o.service)
s.data("service",o)
s.attr("title","Find links using "+o.service)
var c=a()("<img/>")
c.attr("src","/images/"+o.service+"_small_icon.png")
s.append(c)
s.click(function(e){e.preventDefault()
a()("#instructure_link_prompt").dialog("close")
Object(P["a"])(a()(this).data("service").service,e=>{a()("#instructure_link_prompt").dialog("close")
Object(C["d"])(t,"create_link",{title:e.title,url:e.url,classes:n})})})
i.append(s)
i.append("&nbsp;&nbsp;")}}r.find("#instructure_link_prompt_form").after(i)})
r.append("<p><em>This will make the selected text a link, or insert a new link if nothing is selected.</em></p> <label for='instructure_link_prompt_form_input'>Paste or type a url or wiki page in the box below:</label><form id='instructure_link_prompt_form' class='form-inline'><input type='text' id='instructure_link_prompt_form_input' class='prompt' class='btn' value='http://'/> <button type='submit' class='insert_button btn'>Insert Link</button></form>").append("<div class='actions'></div><div class='clear'></div>").append('<div class="inst-link-preview-alt" style="display: none;"><label>Alt text for inline preview: <input type="text" style="display: block;" /></label></div>').append("<div class='disable_enhancement' style='display: none;'><input type='checkbox' class='disable_inline_content' id='disable_inline_content'/><label for='disable_inline_content'> Disable inline previews for this link</label></div>").append("<div class='auto_show' style='display: none;'><input type='checkbox' class='auto_show_inline_content' id='auto_show_inline_content'/><label for='auto_show_inline_content'> Auto-open the inline preview for this link</label></div>")
r.find(".disable_inline_content").change(function(){a()(this).attr("checked")&&r.find(".auto_show_inline_content").attr("checked",false)
r.find(".auto_show").showIf(!a()(this).attr("checked")&&r.hasClass("for_inline_content_can_auto_show"))})
r.find(".actions").delegate(".embed_image_link","click",e=>{var t=r.data("editor")
var i=a()(e.target)
e.preventDefault()
Object(C["d"])(t,"insert_code",B(i))
r.dialog("close")})
r.find(".actions").delegate(".embed_youtube_link","click",e=>{e.preventDefault()
r.find("#instructure_link_prompt_form").triggerHandler("submit")})
r.find("#instructure_link_prompt_form .prompt").bind("change keyup",function(){var e=r.find(".inst-link-preview-alt")
e.hide()
a()("#instructure_link_prompt .actions").empty()
var t=a()(this).val()
var i=r.data("original_data")
if(i&&t==i.url){r.toggleClass("for_inline_content",i.for_inline_content).toggleClass("for_inline_content_can_auto_show",i.for_inline_content_can_auto_show).find(".disable_enhancement").showIf(i.for_inline_content).end().find(".auto_show").showIf(i.for_inline_content_can_auto_show)
n=i.prior_classes}else{r.removeClass("for_inline_content").removeClass("for_inline_content_can_auto_show")
var o=new RegExp("("+O.join("|")+")","g")
n=n.replace(o,"")}var s=!r.hasClass("for_inline_content")
var l=!r.hasClass("for_inline_content_can_auto_show")
if(t.match(/\.(gif|png|jpg|jpeg)$/)){var c=a()(document.createElement("div"))
c.css("textAlign","center")
var d=a()(document.createElement("img"))
d.attr("src",t)
d.addClass("embed_image_link")
d.css("cursor","pointer")
var u=new Image
u.src=t
var h=function e(){u.complete?(u.height<100||u.height>100&&u.height<200)&&d.height(u.height):setTimeout(e,500)}
setTimeout(h,500)
d.height(100)
d.attr("title","Click to Embed the Image")
c.append(d)
a()("#instructure_link_prompt .actions").append(c)}else if(t.match(INST.youTubeRegEx)){e.show()
var f=a.a.youTubeID(t)
c=a()(document.createElement("div"))
c.css("textAlign","center")
!r.find(".disable_inline_content").attr("checked")&&r.hasClass("for_inline_content_can_auto_show")&&r.find(".auto_show").show()
s=false
r.find(".disable_enhancement").show()
d=a()(document.createElement("img"))
d.attr("src","http://img.youtube.com/vi/"+f+"/2.jpg")
d.css({paddingLeft:100,background:"url(/images/youtube_logo.png) no-repeat left center",height:90,display:"inline-block"})
d.attr("alt",t)
d.addClass("embed_youtube_link")
d.css("cursor","pointer")
d.attr("title","Click to Embed YouTube Video")
c.append(d)
a()("#instructure_link_prompt .actions").append(c)}if(s){r.find(".disable_enhancement").hide()
r.find(".disable_inline_content").attr("checked",false)}if(l){r.find(".auto_show").hide()
r.find(".auto_show_inline_content").attr("checked",false)}})
r.attr("id","instructure_link_prompt")
a()("body").append(r)}var o=function(){return n}
var s=function(){D(e,true)}
S(r,t,o,s)
r.data("editor",i)
r.data("original_data",null)
var l=e.selection.getNode()
while("A"!=l.nodeName&&"BODY"!=l.nodeName&&l.parentNode)l=l.parentNode
var c="A"==l.nodeName?a()(l):null
if(c){r.find(".prompt").val(c.attr("href")).change()
r.find(".inst-link-preview-alt input").val(c.data("preview-alt"))
n=(c.attr("class")||"").replace(/youtube_link_to_box/,"")
var d=new RegExp("("+O.join("|")+")");(c.attr("class")||"").match(d)&&r.addClass("for_inline_content").find(".disable_enhancement").show()
d=new RegExp("("+F.join("|")+")");(c.attr("class")||"").match(d)&&r.addClass("for_inline_content_can_auto_show").find(".auto_show").show()
r.data("original_data",{url:c.attr("href"),for_inline_content:r.hasClass("for_inline_content"),for_inline_content_can_auto_show:r.hasClass("for_inline_content_can_auto_show"),prior_classes:n,preview_alt:c.data("preview-alt")})
r.find(".disable_inline_content").attr("checked",c.hasClass("inline_disabled")).triggerHandler("change")
r.find(".auto_show_inline_content").attr("checked",c.hasClass("auto_open")).triggerHandler("change")
r.find(".insert_button").text("Update Link")}else r.find(".prompt").val("").change()
r.dialog({width:425,height:"auto",title:"Link to Website URL",open:function(){a()(this).find(".prompt").focus().select()}})}function D(e,t){D.counter=D.counter||0
true==t&&0!=D.counter?D.counter=(D.counter+1)%5:a()(e.getBody()).find("a").each(function(){const e=new A
const t=a()(this)
if(t.attr("href")&&!t.hasClass("inline_disabled")&&t.attr("href").match(INST.youTubeRegEx)){const i=+t.attr("data-ytt-failcnt")||0
t.addClass("youtube_link_to_box")
t.text()===t.attr("href")&&i<1&&e.titleYouTubeText(t)}})}function V(e){if(R.get(e)||void 0===e.on)return
e.on("PreProcess",function(e){a()(e.node).find("a.youtube_link_to_box").removeClass("youtube_link_to_box")
a()(e.node).find("img.iframe_placeholder").each(function(){var e=a()(this)
var t=a()("<iframe/>")
var i=e.attr("height")||e.css("height")
var r=e.hasClass("fullWidth")?"100%":e.attr("width")||e.css("width")
e.attr("width",r)
e.css("width",r)
t.attr("src",e.attr("rel"))
t.attr("style",e.attr("_iframe_style"))
if(!t[0].style.height.length){t.attr("height",i)
t.css("height",i)}if(!t[0].style.width.length){t.attr("width",r)
t.css("width",r)}a()(this).after(t)
a()(this).remove()})})
e.on("change",()=>{D(e)})
e.on("SetContent",()=>{D(e,"contentJustSet")})
R.set(e,true)}var M={buttonToImg:B,prepEditorForDialog:L,buildLinkClasses:N,bindLinkSubmit:S,renderDialog:I,updateLinks:D,initEditor:V}
i("q1tI")
var q=i("i8i4")
var H=i.n(q)
const G={more_external_tools:Object(x["a"])(y.t("more_external_tools","More External Tools"))}
const W={init(e,t,r){M.initEditor(e)
if(!r||!r.editorButtons||!r.editorButtons.length)return
let n={open:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
return setTimeout(()=>n.open(...t),50)}}
Promise.all([i.e(1),i.e(2),i.e(3),i.e(5),i.e(8),i.e(11),i.e(564)]).then(i.bind(null,"/wcz")).then(t=>{let i=t.default
const r=document.createElement("div")
document.body.appendChild(r)
H.a.render(Object(k["a"])(i,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(E["a"])(),resourceSelectionUrl:a()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),r,function(){n=this})})
const o=[]
const s=[]
for(let t=0;r.editorButtons&&t<r.editorButtons.length;t++){const i=r.editorButtons[t]
const a=()=>n.open(i)
if(ENV.use_rce_enhancements){s.push(T.buttonConfig(i,e))
e.addCommand("instructureExternalButton".concat(i.id),a)}else if(r.editorButtons.length>r.maxVisibleEditorButtons&&t>=r.maxVisibleEditorButtons-1)o.push(i)
else{e.addCommand("instructureExternalButton".concat(i.id),a)
e.addButton("instructure_external_button_".concat(i.id),T.buttonConfig(i,e))}}s.length&&ENV.use_rce_enhancements&&e.ui.registry.addMenuButton("lti_tool_dropdown",{fetch(e){e(s)},icon:"lti",tooltip:"LTI Tools"})
if(o.length){const t=function(){const t=T.clumpedButtonMapping(o,e,e=>n.open(e))
T.attachClumpedDropdown(a()("#".concat(this._id)),t,e)}
ENV.use_rce_enhancements?e.ui.registry.addButton("instructure_external_button_clump",{title:G.more_external_tools,image:"/images/downtick.png",onAction:t}):e.addButton("instructure_external_button_clump",{title:G.more_external_tools,image:"/images/downtick.png",onkeyup(e){if(32===e.keyCode||13===e.keyCode){e.stopPropagation()
t.call(this)}},onclick:t})}}}
var U=W
function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=["equationCB","linksCB","imagePickerCB","equellaCB","externalToolCB","recordCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",t=>{let r=t.detail
Promise.all([i.e(4),i.e(580)]).then(i.bind(null,"F+Bh")).then(t=>{let i=t.default
const n=new i(r.ed)
e.equationCB(n)})})
document.addEventListener("tinyRCE/initLinks",t=>{let i=t.detail
M.renderDialog(i.ed)
e.linksCB()})
document.addEventListener("tinyRCE/initImagePicker",t=>{Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(8),i.e(12),i.e(13),i.e(100),i.e(108),i.e(574)]).then(i.bind(null,"Dwgn")).then(i=>{let r=i.default
const n=new r(t.detail.ed,t.detail.selectedNode)
e.imagePickerCB(n)})})
document.addEventListener("tinyRCE/initEquella",t=>{i.e(600).then(i.bind(null,"gg/z")).then(i=>{let r=i.default
r(t.detail.ed)
e.equellaCB()})})
document.addEventListener("tinyRCE/initExternalTools",t=>{U.init(t.detail.ed,t.detail.url,_["a"])
e.externalToolCB()})
document.addEventListener("tinyRCE/initRecord",t=>{Promise.all([i.e(35),i.e(37),i.e(601)]).then(i.bind(null,"xR7n")).then(i=>{let r=i.default
r.insertEditor(t.detail.ed)
e.recordCB()})})}function Y(e,t){var i=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
i.push.apply(i,r)}return i}function J(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{}
t%2?Y(i,true).forEach(function(t){Object(r["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Y(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}const Z={call(e){if("exists?"===e)return true
for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r]
return this[e](...i)},focus(){if(void 0!==tinymce){let e=tinymce.get(this._textareaEl.id)
e&&e.focus(true)}}}
const Q={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const X={wrapEditor(e){let t=J({},Z,{},e)
return Object.assign(e,t)},wrapSidebar(e){let t=J({},Q,{},e)
return Object.assign(e,t)}}
var ee=X
var te=i("Cf7h")
function ie(e,t){var i=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
i.push.apply(i,r)}return i}function re(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{}
t%2?ie(i,true).forEach(function(t){Object(r["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ie(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function ne(){if(!ENV.context_asset_string)return null
let e,t
const i=ENV.current_user_id
if(ENV.use_rce_enhancements&&!ENV.RICH_CONTENT_CAN_UPLOAD_FILES){t=i
e="user"}else{var r=Object(te["a"])(ENV.context_asset_string,false)
var o=Object(n["a"])(r,2)
e=o[0]
t=o[1]}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:{contextType:e,contextId:t,userId:i},contextType:e,contextId:t,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:d(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,liveRegion:()=>document.getElementById("flash_screenreader_holder")}}let oe
const ae={preload(e){this.loadRCE(e)},loadOnTarget(e,t,i){const r=this.getTargetTextarea(e)
const n=this.getRenderingTarget(r,t.getRenderingTarget)
const o=this.createRCEProps(r,t)
this.loadRCE(e=>{e.renderIntoDiv(n,o,e=>{e.mceInstance().on("init",()=>i(r,ee.wrapEditor(e)))})})},loadSidebarOnTarget(e,t){if(ENV.RICH_CONTENT_SKIP_SIDEBAR)return
const i=ne()
this.loadRCE(r=>{r.renderSidebarIntoDiv(e,i,e=>{t(ee.wrapSidebar(e))})})},loadingCallbacks:[],RCE:null,loadRCE(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{}
oe||(oe=(window.ENV.use_rce_enhancements?Promise.all([i.e(1),i.e(2),i.e(3),i.e(5),i.e(6),i.e(7),i.e(8),i.e(9),i.e(10),i.e(11),i.e(15),i.e(19),i.e(18),i.e(22),i.e(43),i.e(46),i.e(53),i.e(63),i.e(62),i.e(97),i.e(102),i.e(262)]).then(i.bind(null,"Idzl")):Promise.all([i.e(1),i.e(2),i.e(3),i.e(5),i.e(6),i.e(7),i.e(9),i.e(10),i.e(15),i.e(19),i.e(18),i.e(22),i.e(24),i.e(43),i.e(46),i.e(53),i.e(63),i.e(62),i.e(81),i.e(102),i.e(263)]).then(i.bind(null,"66gZ"))).then(e=>{this.RCE=e
K()
return e}))
return oe.then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"==a()(e).get(0).type?a()(e).get(0):a()(e).find("textarea").get(0),getRenderingTarget(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0
let i
i="undefined"===typeof t?a()(e).parent().get(0):t(e)
a()(i).addClass("ic-RichContentEditor")
return i},_attrsToMirror(e){let t=["name"]
let i=l.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return l.a.pick(i,t)},createRCEProps(e,t){let i=e.offsetWidth
let r=e.offsetHeight
r&&(t.tinyOptions=re({height:r},t.tinyOptions||{}))
return{defaultContent:e.value||t.defaultContent,editorOptions:b.bind(null,i,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:ne()}}}
t["a"]=ae}}])

//# sourceMappingURL=20-c-c1308ccf89.js.map