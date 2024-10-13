var posts=["2024/04/02/Binary tree/","2024/08/20/ApatchKPM/","2024/04/02/Discrete-mathematics/","2024/05/08/Graph/","2024/08/19/Windows_pagefile/","2024/06/17/人工智能复习/","2024/09/22/数据算法与结构-排序/","2024/05/21/数据结构与算法（查找）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };