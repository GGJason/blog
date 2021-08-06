(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{370:function(s,t,n){s.exports=n.p+"assets/img/2021-08-07-02-59-07.1a3f336b.png"},371:function(s,t,n){s.exports=n.p+"assets/img/2021-08-07-03-04-21.ea99d7dc.png"},396:function(s,t,n){"use strict";n.r(t);var a=n(9),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("雖然以前是從 Linux 開始在玩資料庫，直接應改過的 Config 檔案也從來沒少過，但開始工作之後就越來越習慣如果有現成的工具就先用，除非真的不行才硬幹。但不知道為什麼，在我們自己 Host 的 Windows Server 跟我本機的 Workbench 儘管左側都有顯示可以設定 Instance 的 Options File 卻從來沒有成功過")]),s._v(" "),a("p",[s._v("問題如下，使用 MySQL 的安裝檔安裝完 MySQL Server 跟 Workbench 之後，縱使自動產生了「Local instance MySQL80」之後，只要想要點擊 Administration 頁籤中的 Instance 分類中所有功能，就會跳出錯誤視窗「Could not acquire management access for administration」\n"),a("img",{attrs:{src:n(370),alt:""}})]),s._v(" "),a("p",[s._v("我試過改用系統管理者，無法。依照上面的說明確認過系統設定也的確是 Windows 的環境設定\n"),a("img",{attrs:{src:n(371),alt:""}})]),s._v(" "),a("p",[s._v("就在我準備放棄決定還是手動修改 Options File 的時候突然找到這一篇"),a("a",{attrs:{href:"https://www.zhihu.com/question/443524428",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章"),a("OutboundLink")],1),s._v("\n簡單的大意來說呢，這個問題似乎是 MySQL Workbench 的 Bug，有兩個解決方式：")]),s._v(" "),a("ol",[a("li",[s._v("修改系統語言，重新安裝")]),s._v(" "),a("li",[s._v("修改 Workbench 裡面的 Python 程式")])]),s._v(" "),a("p",[s._v("經過快速的判斷之後，我覺得後者比較可行，因此決定開始測試。\n而根據這篇文章的做法，他是找到 Workbench 的安裝資料夾，並且在 workbench 資料夾中找到 os_util.py 檔案。")]),s._v(" "),a("p",[s._v("打開檔案之後在最後面會看到一個 Function 如下")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec_command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" output_handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Executes any OS valid command and sends the output to the command listener\n        Syntax:\n                EXEC <command>\n                \n                command: A valida OS command.\n        """')]),s._v("\n        retcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note that self._command contains the internal command so EXEC")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# and self._args is the real OS command to be executed")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Executes the command, reading the output from the PIPE")]),s._v("\n            process "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stdin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stdout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STDOUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sends all the command output to the listener")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" output_handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" line "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    output_handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Waits for the process completion")]),s._v("\n            process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            \n            retcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("returncode\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v("\n            \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" retcode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("而在知乎當中，因為他們的電腦使用的是簡體中文，因此要把這段程式碼中第十四行的「utf-8」改成gbk，而在我這邊因為電腦是以繁體中文安裝，因此要改成將「utf-8」改成「big5」（請記得中間不要加上-，我因此多卡了一陣子），然後重新開啟 Workbench，一切正常可以透過介面進行設定啦。")])])}),[],!1,null,null,null);t.default=e.exports}}]);