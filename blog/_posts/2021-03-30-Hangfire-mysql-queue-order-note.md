---
date: 2021-03-30
tag: 
  - .NET COre
  - Hangfire
  - Queue
author: 吳軒竹
location: Taipei  
---

# Hangfire MySQL Storage 的 Queue 排序筆記

根據 [Hangfire 官網](https://docs.hangfire.io/en/latest/background-processing/configuring-queues.html)，Hangfire 預設可以設定多個 Queue，並且根據順序決定哪個 Queue 要先執行，實際執行順序會根據你的儲存套件而有所不同。例如使用 Hangfire.SqlServer 的時候，會根據 Queue 的字母順序來決定執行順序，會忽略在 Startup 中設定的順序。但當使用 Hangfire.Pro.Redis 的時候，則是會根據 Index 決定哪個 Queue 會先執行，排序在前面的 Queue 裡面的工作在有空出的 Worker 時會被優先安排開始執行。

我目前所使用的套件 [Hangfire.MySqlStorage](https://github.com/arnoldasgudas/Hangfire.MySqlStorage) 是以 Index 進行排序，因此命名上就可以從簡。

另外也筆記一下， Hangfire Queue 的命名規定是：小寫字母、數字、"-" 跟 "_" 所組成的字串。

