import{_ as e,c as a,o as t,a3 as s}from"./chunks/framework.CHPBlGxi.js";const k=JSON.parse('{"title":"On-Premise Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"on-premise.md","filePath":"on-premise.md","lastUpdated":1713295425000}'),i={name:"on-premise.md"},o=s(`<h1 id="on-premise-deployment" tabindex="-1">On-Premise Deployment <a class="header-anchor" href="#on-premise-deployment" aria-label="Permalink to &quot;On-Premise Deployment&quot;">​</a></h1><p>For users who prefer full control over their infrastructure and data, Didroom supports on-premise deployment. Follow these steps to deploy Didroom on your own infrastructure:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are unfamiliar with servers, devops and unix commands look also at the <a href="/DIDroom/quickstart.html">Software as a service</a> section that will allow you to define a credential issuance flow in minutes!</p></div><h3 id="_1-clone-the-repo" tabindex="-1">1. clone the repo <a class="header-anchor" href="#_1-clone-the-repo" aria-label="Permalink to &quot;1. clone the repo&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/forkbombeu/signroom</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Pay attention at the <code>--recursive</code> that will clone also the sub repositories!</p></div><h3 id="_2-run-the-dashboard" tabindex="-1">2. run the dashboard <a class="header-anchor" href="#_2-run-the-dashboard" aria-label="Permalink to &quot;2. run the dashboard&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> signroom</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build</span></span></code></pre></div><p>this will run the backend of the dirdroom control room available on the network at</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://localhost:8090/_</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Pay attention at the final underscore, of the address</p></div><h3 id="_3-login-to-the-admin-panel" tabindex="-1">3. login to the admin panel <a class="header-anchor" href="#_3-login-to-the-admin-panel" aria-label="Permalink to &quot;3. login to the admin panel&quot;">​</a></h3><p>A default administrator user is created with the following defaults:</p><p><strong>user</strong>: <code>admin@example.org</code></p><p><strong>pass</strong>: <code>adminadmin</code></p><h3 id="_4-setup-the-did-service" tabindex="-1">4. Setup the DID service <a class="header-anchor" href="#_4-setup-the-did-service" aria-label="Permalink to &quot;4. Setup the DID service&quot;">​</a></h3><p>The only reaquired step to be configure is the DID federated service. You can ask for your admin domain/context as specified on <a href="https://github.com/dyne/W3C-DID?tab=readme-ov-file#claim-your-own-domain-context-as-an-admin" target="_blank" rel="noreferrer"><code>dyne/W3C-DID</code></a></p><p>Follow the video:</p><ol><li>login into the dashboard</li><li>go on the <code>features</code> collection</li><li>select the <code>DID</code> feature</li><li>insert you admin data</li></ol><video controls src="https://raw.githubusercontent.com/ForkbombEu/signroom/main/screenshots/videos/setup-did.webm"></video>`,20),n=[o];function l(r,d,h,p,c,u){return t(),a("div",null,n)}const b=e(i,[["render",l]]);export{k as __pageData,b as default};
