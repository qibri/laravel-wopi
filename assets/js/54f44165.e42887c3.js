"use strict";(self.webpackChunklaravel_wopi_docs=self.webpackChunklaravel_wopi_docs||[]).push([[152],{681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={id:"installation",title:"Installation",sidebar_position:1},s=void 0,m={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Start by installing the package via composer",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/nagi1/laravel-wopi/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"1-Config",id:"1-config",children:[],level:2},{value:"2-Implement document manager",id:"2-implement-document-manager",children:[],level:2},{value:"3-User your document manager",id:"3-user-your-document-manager",children:[],level:2},{value:"4-Build view with iframe",id:"4-build-view-with-iframe",children:[],level:2},{value:"5-Retrive your document",id:"5-retrive-your-document",children:[],level:2},{value:"Problems?",id:"problems",children:[],level:2}],c={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Start by installing the package via composer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer require nagi/laravel-wopi\n")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Php >= 7.4 or above."),(0,o.kt)("li",{parentName:"ul"},"Mbstring extension."),(0,o.kt)("li",{parentName:"ul"},"XML extension"),(0,o.kt)("li",{parentName:"ul"},"Installed and configured WOPI client.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Don't have WOPI Client yet?")," Follow this guide to install ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.collaboraonline.com/docs/installation/CODE_Docker_image.html"},"Collabora Online"),"."))),(0,o.kt)("h2",{id:"1-config"},"1-Config"),(0,o.kt)("p",null,"Publish the required config file using by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --tag=laravel-wopi-config\n")),(0,o.kt)("p",null,"You can view all available confugration options and full explanation in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/configuration"},"Configuration Section"),"."),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"WOPI_CLIENT_URL")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with full url to your wopi client."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},'WOPI_CLIENT_URL="https://demo.eu.collaboraonline.com"\n')),(0,o.kt)("h2",{id:"2-implement-document-manager"},"2-Implement document manager"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DocumentManager")," is responsible for storing, retriving, accessing documents."),(0,o.kt)("p",null,"Every application has it's own implementation of how it handles documents, It's pretty much impossible to implement one general purpose document manager that fits all usecases. So you ",(0,o.kt)("strong",{parentName:"p"},"Need")," to implement your own ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentManager")," but don't you worry this package provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractDocumentManager")," that will ease your task quite a bit."),(0,o.kt)("p",null,"Take this example implementation from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nagi1/laravel-wopi-example"},"Laravel wopi example"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"document-manager#example-document-manager-implementation"},"Document Manager Section")," for more details about ",(0,o.kt)("inlineCode",{parentName:"li"},"AbstractDocumentManager"),".")),(0,o.kt)("h2",{id:"3-user-your-document-manager"},"3-User your document manager"),(0,o.kt)("p",null,"It's important to let the package know the default document manager implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"\n// config/wopi.php\n\n     /*\n     * Managing documents differs a lot between apps, because of this reason\n     * this configration left empty to be implemented by the user There's\n     * plans to implement example database manager in the future though.\n     */\n    'document_manager' =>  App\\Services\\DBDocumentManager::class,\n\n")),(0,o.kt)("h2",{id:"4-build-view-with-iframe"},"4-Build view with iframe"),(0,o.kt)("p",null,"Add simple html view using the technology stack you prefer to existing website. On the website, you need to present an iframe where the editing UI and the document itself will be present."),(0,o.kt)("p",null,"For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>Laravel Wopi</title>\n    \x3c!-- Styles --\x3e\n    <style type="text/css">\n        #office_frame {\n            width: 100%;\n            height: 800px;\n            margin: 0;\n            border: none;\n            display: block;\n        }\n    </style>\n</head>\n\n<body>\n    <form id="office_form" name="office_form" target="office_frame" action="{!! $url !!}" method="post">\n        <input name="access_token" value="{!! $accessToken !!}" type="text" />\n        <input name="access_token_ttl" value="{!! $ttl !!}" type="text" />\n    </form>\n\n    <span id="frameholder"></span>\n\n    <script type="text/javascript">\n        var frameholder = document.getElementById(\'frameholder\');\n            var office_frame = document.createElement(\'iframe\');\n            office_frame.name = \'office_frame\';\n            office_frame.id = \'office_frame\';\n            // The title should be set for accessibility\n            office_frame.title = \'Office Frame\';\n            // This attribute allows true fullscreen mode in slideshow view\n            // when using PowerPoint\'s \'view\' action.\n            office_frame.setAttribute(\'allowfullscreen\', \'true\');\n            // The sandbox attribute is needed to allow automatic redirection to the O365 sign-in page in the business user flow\n            office_frame.setAttribute(\n                \'sandbox\',\n                \'allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox allow-downloads allow-modals\'\n            );\n            frameholder.appendChild(office_frame);\n            document.getElementById(\'office_form\').submit();\n    <\/script>\n</body>\n\n</html>\n\n')),(0,o.kt)("h2",{id:"5-retrive-your-document"},"5-Retrive your document"),(0,o.kt)("p",null,"Query your document manager to get any ",(0,o.kt)("a",{parentName:"p",href:"#"},"supported Docuemnt")," like so"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// In web.php/your controller\nRoute::get('/', function (Request $request) {\n    $document = app(AbstractDocumentManager::class)::find(1);\n\n    // implementing access tokens is left to you!\n    $accessToken = 'My_Token';\n    $ttl = 0;\n\n    return view('laravel-wopi-test', [\n        'accessToken' => $accessToken,\n        'ttl' => $ttl,\n        'url' => $document->generateUrl()\n        ]);\n});\n\n")),(0,o.kt)("p",null,"Open your application and voalla!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Logo",src:n(1072).Z})),(0,o.kt)("p",null,"You have your self a working google docs in the comfort of your app!"),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/laravel-wopi"},"Stack Overflow"),", on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nagi1/laravel-wopi"},"GitHub repository")," or ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/nagiworks"},"Twitter"),"."))}u.isMDXComponent=!0},1072:function(e,t,n){t.Z=n.p+"assets/images/office_docx_app-45a7a5aad0d972a3fc08061303952e1b.png"}}]);