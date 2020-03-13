
let welcome_message=
'<pre id="AA" lang="en"><font color="yellow">'+
" __          __  _                                   _                             <br>"+
" \\ \\        / / | |                                 | |                            <br>"+
"  \\ \\  /\\  / /__| | ___   ___ ___  _ __ ___   ___   | |_ ___                       <br>"+
"   \\ \\/  \\/ / _ \\ |/ _ \\ / __/ _ \\| '_ ` _ \\ / _ \\  | __/ _ \\                      <br>"+
"    \\  /\\  /  __/ | (_) | (_| (_) | | | | | |  __/  | || (_) |                     <br>"+
"     \\/  \\/ \\___|_|\\___/ \\___\\___/|_| |_| |_|\\___|   \\__\\___/    __      _ _       <br>"+
"                                                           | |  / _|    | (_)      <br>"+
"                        _ __ ___  _   _    _ __   ___  _ __| |_| |_ ___ | |_  ___  <br>"+
"                       | '_ ` _ \\| | | |  | '_ \\ / _ \\| '__| __|  _/ _ \\| | |/ _ \\ <br>"+
"                       | | | | | | |_| |  | |_) | (_) | |  | |_| || (_) | | | (_) |<br>"+
"                       |_| |_| |_|\\__, |  | .__/ \\___/|_|   \\__|_| \\___/|_|_|\\___/ <br>"+
"                                   __/ |  | |                                      <br>"+
"                                  |___/   |_|                                      </font></pre>"+
"<pre>                                                             <font size=4 color='red'>2020.03.10 create by Takana Norimasa</font></pre>"+
"<pre><font size=4 color='white'>Usage:	click the output of 'ls'\n	(Click .. to return to the directory one level higher)</font></pre>";

let about=
'<div id="about">'+
"<pre>Name: Takana Norimasa</pre>"+
"<pre>Age: 18</pre>"+
"<pre>Nationality: Japan</pre>"+
"<pre>Affiliation: National Institute of Technology, Kisarazu College</pre>"+
"<pre>Language: C,C++,Perl,Python,vimscript</pre>"+
"<pre>Interests: cyber security,malware analysis,compiler,handmade cpu,I/O device,ESP32,etc...</pre>"+
"</div>";

let links=
'<div id="about">'+
'<pre><i class="far fa-envelope"></i> official: j17423@kisarazu.kosen-ac.jp</pre>'+
'<pre><i class="far fa-envelope"></i> sub: neuromancer_wg@outlook.jp</pre>'+
'<pre><font color="cyan"><i class="fab fa-twitter-square"></i></font> [main/technology]:<a href="https://twitter.com/lIlIIllIIIlIlIl"> @<font face="Arial" >lIlIIllIIIlIlIl</font></a></pre>'+
'<pre><font color="cyan"><i class="fab fa-twitter-square"></i></font> [sub/tech&anime]:<a href="https://twitter.com/Seigenkousya"> @seigenkousya</a></pre>'+
'<pre><i class="fab fa-github-square"></i> [main/works]:<a href="https://github.com/Takana-Norimasa"> Takana-Norimasa</a></pre>'+
'<pre><i class="fab fa-github-square"></i> [sub/hobby]:<a href="https://github.com/Seigenkousya"> Seigenkousya</a></pre>'+
'<pre><span class="fa-stack" style="color:#4cb10d;font-size:50%"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-search fa-stack-1x fa-inverse fa-2x"></i></span><a href="https://qiita.com/Seigenkousya"> Seigenkousya</a></pre>'+
'</div>';

let ls_root=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="down_directory">..</button>   '+
'<button class="text_link" type="button" onclick="about_me();">about_me</button>   '+
'<button class="text_link" type="button" onclick="contact_and_links();">contact_and_links</button>   '+
'<button class="text_link" type="button" onclick="welcome();">welcome</button>   '+
'<button class="text_link" style="color:#8AE234" type="button" onclick="tree();">tree.sh</button>   '+
'<button class="cd_link" type="button" onclick="project();">Project/</button>   '+
'<button class="cd_link" type="button" onclick="activities();">Activities/</button>   '+
'<button class="cd_link" type="button" onclick="hobby();">Hobby/</button></pre></span></div>';

let ls_project=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Project\');">..</button>   '+
'<button class="text_link" type="button" onclick="IO_Unit();">I/O_Unit</button>   '+
'<button class="text_link" type="button" onclick="timer_stoper();">Timer_Stoper</button>   '+
'<button class="text_link" type="button" onclick="repojitories();">Repositories</button>   '+
'</pre></span></div>';

let page_IO_Unit=
'<div style="color:white;font-size:100%;">'+
'<h2>I/O Unit project</h2>'+
'<h3>about</h3>'+
'<pre style="line-height:120%">'+
'I/O Unit project は既存の入出力装置のセキュリティ上の欠点を克服するようなセキュアな入出力装置の開発を目的としたプロジェクトです。\n'+
'セキュアな入力装置の開発、セキュアな出力装置の開発、2つを組み合わせたI/O Unitの開発の3つから構成されます。\n'+
'</pre>'+
'<ul>'+
'	<li><span>ショルダーハッキングや画面ののぞき見のリスクを低減できるようなセキュアな入出力装置を開発する</span></li>'+
'	<li><span>開発した入力装置と出力装置をまとめて1つのデバイスとして機能させ、処理装置から入出力装置を独立させることでより自由なデバイスの形を模索する</span></li>'+
'	<li><span>開発したデバイスの詳細な作り方を公開しプログラムから工作、電子回路まで学べるような学習サイトを作成、公開する</span></li>'+
'</ul>'+
'<pre style="line-height:120%">'+
'の3つが目標です。'+
'</pre>'+
'<h3>repository</h3>'+
'<pre style="line-height:120%">'+
'詳しくプロジェクトの概要とデバイスの作り方についてはgithubの<a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit/">Readme</a>と<a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit/wiki">wiki</a>を参照。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 100px; width:500px; padding-bottom: 0;"><a href="https://github.com/Takana-Norimasa/Secure_I-O_Unit" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FTakana-Norimasa%2FSecure_I-O_Unit&key=dd60c159c87f40f1ecca839b51b281e8"></a></div></div>'+
'<h3>SecHack365</h3>'+
'<pre style="line-height:120%">'+
'このプロジェクトは2019年度SecHack365の活動の一環として始まりました。\n'+
'ポスターは<a>こちら</a>。（※発表され次第ここに載せます）\n'+
'SecHack365に関しては以下のリンクを参照。'+
'</pre>'+
'<div class="iframely-embed"><div class="iframely-responsive" style="height: 100px; width:500px; padding-bottom: 0;"><a href="https://sechack365.nict.go.jp/" data-iframely-url="https://cdn.iframe.ly/crKU29v?iframe=card-small"></a></div></div>'+
'<pre style="line-height:120%">'+
'僕自身のSecHackでの活動については、~/portfolio/Activity/SecHack365に書いてあります。'+
'</pre>';

let ls_activities=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Activities\');">..</button>   '+
'<button class="text_link" style="color:#8AE234" type="button" onclick="chronology();">chronology</button>   '+
'<button class="text_link" type="button" onclick="sechack365();">SecHack365</button>   '+
'<button class="text_link" type="button" onclick="guardian();">Guardian project</button>   '+
'<button class="text_link" type="button" onclick="IoT_Hackathon();">LoRaWAN IoT Hackathon</button>   '+
'<button class="text_link" type="button" onclick="atcoder();">Atcoder</button>   '+
'<button class="text_link" type="button" onclick="CTF();">CTF</button>   '+
'</pre></span></div>';

let ls_hobby=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_root(\'Hobby\');">..</button>   '+
'<button class="text_link" type="button" onclick="comic();">comic</button>   '+
'<button class="text_link" type="button" onclick="anime();">anime</button>   '+
'<button class="text_link" type="button" onclick="motor_sports();">motor sports</button>   '+
'<button class="cd_link" type="button" onclick="SIN_dir();">Seigenkousya/</button>   '+
'</pre></span></div>';

let ls_seigenkousya=
'<div id="ls_result"><span><pre><button class="cd_link" type="button">.</button>   '+
'<button class="cd_link" type="button" onclick="back_to_hobby();">..</button>   '+
'<button class="text_link" type="button" onclick="about_SIN();">about_us</button>   '+
'<button class="text_link" type="button" onclick="blog();">blog</button>   '+
'<button class="text_link" style="color:red" type="button" onclick="SIN_link();">Seigenkousya.html</button>   '+
'<button class="text_link" type="button" onclick="lilics();">Overview_of_modern_lilics</button>   '+
'<button class="text_link" type="button" onclick="thesis();">doubiju_thesis</button>   '+
'<button class="text_link" type="button" onclick="kirara_data();">KiraraData.com</button>   '+
'</pre></span></div>';

let tree_result=
'<pre style="color:white;font-size:110%">'+
'.\n'+
'├── about_me\n'+
'├── contact_and_links\n'+
'├── welcome\n'+
'├── tree.sh\n'+
'├── <font color="#729FCF">Project/</font>\n'+
'│   ├── IO Unit\n'+
'│   ├── Timer_Stoper\n'+
'│   └── Repositories\n'+
'├── <font color="#729FCF">Activities/</font>\n'+
'│   ├── <font color="#8AE234">chronlogy</font>\n'+
'│   ├── SecHack365\n'+
'│   ├── Guardian project\n'+
'│   ├── LoRaWAN IoT Hackathon\n'+
'│   ├── Atcoder\n'+
'│   └── CTF\n'+
'└── <font color="#729FCF">Hobby/</font>\n'+
'     ├── comic\n'+
'     ├── anime\n'+
'     ├── motor sports\n'+
'     └── <font color="#729FCF">Seigenkousya/</font>\n'+
'          ├── about us\n'+
'          ├── blog\n'+
'          ├── <font color="red">seigenkousya.html</font>\n'+
'          ├── Overview_of_modern_lilics\n'+
'          ├── doubiju_thesis\n'+
'          └── KiraraData.com';


