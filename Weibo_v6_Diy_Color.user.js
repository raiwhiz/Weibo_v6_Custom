// ==UserScript==
// @name        Weibo_v6_Diy_Color
// @namespace   http://weibo.com/raiwhiz
// @description 自定义微博v6版本的颜色
// @include     http://weibo.com/*/home*
// @include     http://weibo.com/*/profile*
// @version     beta 0.1
// @grant       none
// ==/UserScript==
//by raiwhiz


//  var box = document.getElementById('v6_pl_content_homefeed');
//  box.style.backgroundColor = '#c7edcc';

//  var box_bg = document.getElementsByClassName('WB_cardwrap WB_feed_type S_bg2');
//  for(var i = 0 ; i <= box_bg.length; ++i)
//  {
//    box_bg[i].style.backgroundColor = '#c7edcc';
//  }

function addGlobalStyle(css) 
{
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

//主区域背景颜色
//addGlobalStyle('div.WB_miniblog_fb { background-color:#ffff00 }');
//微博方块背景颜色
addGlobalStyle('div.WB_cardwrap.WB_feed_type.S_bg2 { background-color:#c7edcc }');
addGlobalStyle('div.WB_text.W_f14 { font-size:14px ; color:#000000 }');
//原PO方块背景颜色
addGlobalStyle('div.WB_expand.S_bg1 { background-color:#d7fddc }');
//原PO方块文字和评论文字
addGlobalStyle('div.WB_text { font-size:12px ; color:#000000 }');
//左边栏背景颜色
addGlobalStyle('div.WB_frame { background-color: RGBA(139,78,0,0.25) }');
//左边栏文字颜色
addGlobalStyle('span.levtxt{ color:#000000 }');
//左边栏“更多”文字颜色
addGlobalStyle('a.more.S_txt1{ color:#000000 }');
//超链接颜色
addGlobalStyle('a{ color:#009cff }');
//带框超链接颜色
addGlobalStyle('.S_link1{ color:#ff0000 }');
//评论背景颜色
addGlobalStyle('div.WB_repeat.S_line1 { background-color:#c7edcc }');
