---
layout: post
title: SettingUpNvidiaSmi
date: 2025-03-08
description: "Ubuntu updateをするとなんかnvidia-smiが叩けなくなったときの備忘録"
tags: ubuntu cuda pc-setup
categories: pc-info
giscus_comments: true
related_posts: false
---
# 状況
Ubuntu 24.04LTS をインストールした自作PCのUbuntuアップデートをしたら、nvidia-driverが認識しなくなった。
画像出力可能なハードは２つある（内蔵グラフィックとGPU）。
```
$ lspci | grep VGA
00:02.0 VGA compatible controller: Intel Corporation Raptor Lake-S UHD Graphics (rev 04)
01:00.0 VGA compatible controller: NVIDIA Corporation AD106 [GeForce RTX 4060 Ti] (rev a1)
```
ここでは、Intelの内蔵グラフィックで普段の描画はしつつ、GPUは数値計算用に使いたい。
# 発生した症状
Ubuntu アップデートを行ったあとに`nvidia-smi`を叩くと、
```
$ nvidia-smi
No devices were found
```
となった。[調べてみた](https://qiita.com/y-vectorfield/items/72bfb66d8ec85847fe2f)ところ、ドライバーの再インストールをしろと言われたので
```
$ ubuntu-drivers devices |grep nvidia
```
でrecomendされていた`nvidia-driver-560`をaptインストールした。すると、
```
$ nvidia-smi
NVIDIA-SMI has failed because it couldn't communicate with the NVIDIA driver. Make sure that the latest NVIDIA driver is installed and running.
```
と出力された。

# 原因
原因はどうやらnvidia-driverがそもそも起動していなかったぽい。
```
$ sudo modprobe nvidia

modprobe: ERROR: ../libkmod/libkmod-module.c:968 kmod_module_insert_module() could not find module by name='off'

modprobe: ERROR: could not insert 'off': Unknown symbol in module, or unknown parameter (see dmesg)
```
[調べてみる](https://bugs.launchpad.net/ubuntu/+source/nvidia-graphics-drivers-390/+bug/1774359)と、prime-selectされていないのが原因ぽく、
```
$ sudo prime-select nvidia
```
とすることで解決自体はした。
```
$ nvidia-smi
Sat Mar  8 13:51:59 2025       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 560.35.03              Driver Version: 560.35.03      CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4060 Ti     Off |   00000000:01:00.0 Off |                  N/A |
|  0%   25C    P8              2W /  165W |       7MiB /  16380MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+
                                                                                         
+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|  No running processes found                                                             |
+-----------------------------------------------------------------------------------------+

```

# 内蔵グラフィックつかえていないんじゃないか問題
でもそもそもこの解決策では内蔵グラフィックで描画できていないんじゃないかという気持ちがある。これに関しては現時点ではよくわかっていないが、すくなくとも`nvidia-smi`の出力を見るとなにもプロセスが走っていないことがわかるので、一旦これでいいことにしようというきもちになっている(もしかしたら、`prime-select intel`と`prime-select nvidia`を交互に叩いているうちになんとかなったのかもしれない)。
