---
slug: benchmarks-miniPC-in-fanless-aluminum-case
title: Benchmarks miniPC in fanless aluminum case
authors: IgorKha
tags: [intel, sbc-bench, benchmark]
---

## Hardware

|                   |                                                                                                          |
|:-----------------:|:--------------------------------------------------------------------------------------------------------|
| **CPU**           | 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz / Intel Iris Xe Graphics  1.30 GHz                        |
| **RAM**           | 8GB 2667MT/s (PN: HMA81GS6CJR8N-VK) [2xDDR4 SODIMM/MAX 64Gb]                                             |
| **NVMe**          | Fanxiang S500 128GB (SN: FXS500222900092/FW Rev: U0521A0)                                                |
| **Network**       | 6x Intel i225-V B3 2,5G RJ45 LANs                                                                        |
| **Power Adapter** | 12V-5A (60W) [12-19V ]                                                                                   |
| **Other**         | 4xUSB3.0, 1xRJ45 COM, 1xHDMI2.0 4K @ 60Hz UHD, 1xM.2 2242/2280 NVMe/PCIE3.0x4 SSD + 1x2.5''SATA SSD/HDD. |
| **Other**         | 1xSIM слот, 1xMPCIE wireless slot, support WiFi/3G/4G (choice of 1 of 3)                                 |
| **Price**         | AliExpress $550                                                                                          |

<!--truncate-->

## sbc-bench without cooling

```yaml title="./sbc-bench.sh -c"
sbc-bench v0.9.12  / i7-1165G7 @ 2.80GHz (Tue, 07 Feb 2023 08:23:42 +0000)

Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.5 LTS
Release:	20.04
Codename:	focal

BIOS/UEFI:
	Vendor: American Megatrends International, LLC.
	Version: 5.19
	Release Date: 03/30/2021
	BIOS Revision: 5.19

/usr/bin/gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0

Uptime: 08:23:42 up 19:30,  1 user,  load average: 0.35, 0.09, 0.03,  87.0°C,  35903915

Linux 5.4.0-137-generic (supernoserver) 	02/07/23 	_x86_64_	(8 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.07    0.00    0.02    0.07    0.00   99.84

Device             tps    kB_read/s    kB_wrtn/s    kB_dscd/s    kB_read    kB_wrtn    kB_dscd
nvme0n1          27.79       906.83        24.68         0.00   63677709    1733225          0

              total        used        free      shared  buff/cache   available
Mem:          7.5Gi       365Mi       7.0Gi       1.0Mi       156Mi       6.9Gi
Swap:         4.0Gi       0.0Ki       4.0Gi

Filename				Type		Size	Used	Priority
/swap.img                              	file    	4194300	512	-2

##########################################################################

Intel P-States: Intel P-state driver initializing, HWP enabled

Checking cpufreq OPP:

Cpufreq OPP: 4700    Measured: 4517 (4688.133/4573.885/4289.001)     (-3.9%)
Cpufreq OPP:  400    Measured:  402    (403.426/403.314/400.935)

##########################################################################

Hardware sensors:

acpitz-acpi-0
temp1:        +27.8 C  (crit = +119.0 C)

coretemp-isa-0000
Package id 0:  +48.0 C  (high = +100.0 C, crit = +100.0 C)
Core 0:        +47.0 C  (high = +100.0 C, crit = +100.0 C)
Core 1:        +47.0 C  (high = +100.0 C, crit = +100.0 C)
Core 2:        +45.0 C  (high = +100.0 C, crit = +100.0 C)
Core 3:        +48.0 C  (high = +100.0 C, crit = +100.0 C)

##########################################################################

Executing benchmark on cpu0:

tinymembench v0.4.9 (simple benchmark for memory throughput and latency)

==========================================================================
== Memory bandwidth tests                                               ==
==                                                                      ==
== Note 1: 1MB = 1000000 bytes                                          ==
== Note 2: Results for 'copy' tests show how many bytes can be          ==
==         copied per second (adding together read and writen           ==
==         bytes would have provided twice higher numbers)              ==
== Note 3: 2-pass copy means that we are using a small temporary buffer ==
==         to first fetch data into it, and only then write it to the   ==
==         destination (source -> L1 cache, L1 cache -> destination)    ==
== Note 4: If sample standard deviation exceeds 0.1%, it is shown in    ==
==         brackets                                                     ==
==========================================================================

 C copy backwards                                     :   6499.5 MB/s (1.3%)
 C copy backwards (32 byte blocks)                    :   6525.9 MB/s (0.1%)
 C copy backwards (64 byte blocks)                    :   6530.6 MB/s (2.9%)
 C copy                                               :   6548.2 MB/s (0.7%)
 C copy prefetched (32 bytes step)                    :   5511.2 MB/s
 C copy prefetched (64 bytes step)                    :   5514.0 MB/s
 C 2-pass copy                                        :   6021.6 MB/s (0.2%)
 C 2-pass copy prefetched (32 bytes step)             :   4905.5 MB/s (0.2%)
 C 2-pass copy prefetched (64 bytes step)             :   4898.3 MB/s
 C fill                                               :  10792.2 MB/s (2.6%)
 C fill (shuffle within 16 byte blocks)               :  10830.2 MB/s (0.5%)
 C fill (shuffle within 32 byte blocks)               :  10831.9 MB/s (0.8%)
 C fill (shuffle within 64 byte blocks)               :  10837.8 MB/s (0.9%)
 ---
 standard memcpy                                      :   9893.9 MB/s (0.5%)
 standard memset                                      :  19776.4 MB/s (0.6%)
 ---
 MOVSB copy                                           :   9697.2 MB/s (0.7%)
 MOVSD copy                                           :   9741.1 MB/s (0.8%)
 SSE2 copy                                            :   6669.9 MB/s (0.7%)
 SSE2 nontemporal copy                                :   9742.9 MB/s (1.3%)
 SSE2 copy prefetched (32 bytes step)                 :   5528.8 MB/s (1.7%)
 SSE2 copy prefetched (64 bytes step)                 :   5312.6 MB/s (0.4%)
 SSE2 nontemporal copy prefetched (32 bytes step)     :   6960.9 MB/s (0.6%)
 SSE2 nontemporal copy prefetched (64 bytes step)     :   6788.5 MB/s (0.4%)
 SSE2 2-pass copy                                     :   5852.6 MB/s (0.2%)
 SSE2 2-pass copy prefetched (32 bytes step)          :   4945.0 MB/s
 SSE2 2-pass copy prefetched (64 bytes step)          :   4974.0 MB/s
 SSE2 2-pass nontemporal copy                         :   3765.1 MB/s (0.4%)
 SSE2 fill                                            :   9908.3 MB/s (5.4%)
 SSE2 nontemporal fill                                :  18289.6 MB/s

==========================================================================
== Memory latency test                                                  ==
==                                                                      ==
== Average time is measured for random memory accesses in the buffers   ==
== of different sizes. The larger is the buffer, the more significant   ==
== are relative contributions of TLB, L1/L2 cache misses and SDRAM      ==
== accesses. For extremely large buffer sizes we are expecting to see   ==
== page table walk with several requests to SDRAM for almost every      ==
== memory access (though 64MiB is not nearly large enough to experience ==
== this effect to its fullest).                                         ==
==                                                                      ==
== Note 1: All the numbers are representing extra time, which needs to  ==
==         be added to L1 cache latency. The cycle timings for L1 cache ==
==         latency can be usually found in the processor documentation. ==
== Note 2: Dual random read means that we are simultaneously performing ==
==         two independent memory accesses at a time. In the case if    ==
==         the memory subsystem can't handle multiple outstanding       ==
==         requests, dual random read has the same timings as two       ==
==         single reads performed one after another.                    ==
==========================================================================

block size : single random read / dual random read, [MADV_NOHUGEPAGE]
      1024 :    0.0 ns          /     0.1 ns 
      2048 :    0.0 ns          /     0.1 ns 
      4096 :    0.0 ns          /     0.1 ns 
      8192 :    0.0 ns          /     0.0 ns 
     16384 :    0.0 ns          /     0.1 ns 
     32768 :    0.0 ns          /     0.1 ns 
     65536 :    0.5 ns          /     0.9 ns 
    131072 :    1.2 ns          /     1.6 ns 
    262144 :    1.6 ns          /     1.9 ns 
    524288 :    2.5 ns          /     3.0 ns 
   1048576 :    3.1 ns          /     3.4 ns 
   2097152 :    6.2 ns          /     8.2 ns 
   4194304 :    9.0 ns          /    10.8 ns 
   8388608 :   12.1 ns          /    14.1 ns 
  16777216 :   27.5 ns          /    40.4 ns 
  33554432 :   51.0 ns          /    69.0 ns 
  67108864 :   63.7 ns          /    78.9 ns 

block size : single random read / dual random read, [MADV_HUGEPAGE]
      1024 :    0.0 ns          /     0.1 ns 
      2048 :    0.0 ns          /     0.1 ns 
      4096 :    0.0 ns          /     0.1 ns 
      8192 :    0.0 ns          /     0.0 ns 
     16384 :    0.0 ns          /     0.1 ns 
     32768 :    0.0 ns          /     0.1 ns 
     65536 :    0.5 ns          /     1.0 ns 
    131072 :    1.2 ns          /     1.6 ns 
    262144 :    1.6 ns          /     2.0 ns 
    524288 :    1.8 ns          /     2.1 ns 
   1048576 :    1.9 ns          /     1.9 ns 
   2097152 :    4.9 ns          /     6.9 ns 
   4194304 :    7.7 ns          /     9.5 ns 
   8388608 :    8.7 ns          /    10.2 ns 
  16777216 :   23.4 ns          /    35.0 ns 
  33554432 :   46.7 ns          /    64.7 ns 
  67108864 :   59.2 ns          /    74.5 ns 

##########################################################################

Executing ramlat on cpu0, results in ns:

       size:  1x32  2x32  1x64  2x64 1xPTR 2xPTR 4xPTR 8xPTR
         4k: 1.181 1.181 1.384 1.589 1.143 1.067 1.070 1.110 
         8k: 1.081 1.080 1.267 1.469 1.071 1.067 1.072 1.110 
        16k: 1.081 1.080 1.268 1.464 1.067 1.067 1.071 1.109 
        32k: 1.081 1.080 1.270 1.473 1.067 1.067 1.081 1.113 
        64k: 2.998 2.995 3.182 3.383 2.982 2.987 3.036 3.562 
       128k: 3.276 3.277 3.488 3.683 2.992 2.987 3.035 3.590 
       256k: 3.011 3.000 3.187 3.387 2.987 2.987 3.062 3.602 
       512k: 4.523 4.502 4.679 4.891 4.480 4.480 4.532 4.944 
      1024k: 5.902 5.743 6.097 6.124 5.667 5.448 5.759 6.726 
      2048k: 11.88 12.06 11.84 12.17 11.84 12.34 13.19 14.90 
      4096k: 12.85 12.89 12.72 13.19 12.78 13.15 14.30 17.43 
      8192k: 16.85 14.83 15.16 15.27 14.86 14.89 15.81 18.76 
     16384k: 42.35 38.43 41.21 39.81 43.09 42.60 46.77 54.01 

##########################################################################

Executing benchmark twice on cluster 0

OpenSSL 1.1.1f, built on 31 Mar 2020
type             16 bytes     64 bytes    256 bytes   1024 bytes   8192 bytes  16384 bytes
aes-128-cbc    1067751.63k  1668484.65k  1953877.25k  2018499.58k  1815587.50k  2034013.53k
aes-128-cbc    1009441.90k  1768923.52k  1952441.69k  1802215.08k  2030389.93k  2030807.72k
aes-192-cbc     909793.03k  1576942.51k  1583106.30k  1629583.36k  1716461.57k  1533444.10k
aes-192-cbc    1017256.41k  1614196.86k  1531869.70k  1738807.30k  1644101.63k  1659071.15k
aes-256-cbc     932419.00k  1245460.78k  1449495.47k  1479657.47k  1329119.23k  1488846.85k
aes-256-cbc     916362.41k  1347310.63k  1481127.17k  1340278.10k  1514960.21k  1514345.81k

##########################################################################

Executing benchmark single-threaded on cpu0

7-Zip (a) [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=C,Utf16=off,HugeFiles=on,64 bits,8 CPUs 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1),ASM,AES-NI)

11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1)
CPU Freq: - - - - - - - - -

RAM size:    7695 MB,  # CPU hardware threads:   8
RAM usage:    435 MB,  # Benchmark threads:      1

                       Compressing  |                  Decompressing
Dict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating
         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS

22:       5078   100   4941   4940  |      53819   100   4596   4595
23:       5029   100   5125   5124  |      49198   100   4259   4259
24:       4674   100   5026   5026  |      48162   100   4229   4228
25:       4265   100   4870   4870  |      51415   100   4577   4576
----------------------------------  | ------------------------------
Avr:             100   4991   4990  |              100   4415   4415
Tot:             100   4703   4702

##########################################################################

Executing benchmark 3 times multi-threaded on CPUs 0-7

7-Zip (a) [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=C,Utf16=off,HugeFiles=on,64 bits,8 CPUs 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1),ASM,AES-NI)

11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1)
CPU Freq: 64000000 - - - - - - - -

RAM size:    7695 MB,  # CPU hardware threads:   8
RAM usage:   1765 MB,  # Benchmark threads:      8

                       Compressing  |                  Decompressing
Dict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating
         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS

22:      23823   682   3397  23175  |     235635   797   2521  20099
23:      21116   694   3099  21515  |     232997   798   2527  20163
24:      22220   740   3227  23892  |     212746   797   2342  18672
25:      19755   754   2993  22556  |     204061   798   2276  18161
----------------------------------  | ------------------------------
Avr:             718   3179  22784  |              798   2416  19274
Tot:             758   2798  21029

7-Zip (a) [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=C,Utf16=off,HugeFiles=on,64 bits,8 CPUs 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1),ASM,AES-NI)

11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1)
CPU Freq: - - - - - - - - 2048000000

RAM size:    7695 MB,  # CPU hardware threads:   8
RAM usage:   1765 MB,  # Benchmark threads:      8

                       Compressing  |                  Decompressing
Dict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating
         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS

22:      21512   681   3072  20927  |     213255   796   2286  18190
23:      22029   748   3000  22446  |     210363   797   2285  18204
24:      20923   748   3008  22497  |     208117   798   2288  18266
25:      20153   753   3056  23011  |     204567   797   2284  18206
----------------------------------  | ------------------------------
Avr:             733   3034  22220  |              797   2286  18216
Tot:             765   2660  20218

7-Zip (a) [64] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=C,Utf16=off,HugeFiles=on,64 bits,8 CPUs 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1),ASM,AES-NI)

11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (806C1)
CPU Freq: - - - - - - - - -

RAM size:    7695 MB,  # CPU hardware threads:   8
RAM usage:   1765 MB,  # Benchmark threads:      8

                       Compressing  |                  Decompressing
Dict     Speed Usage    R/U Rating  |      Speed Usage    R/U Rating
         KiB/s     %   MIPS   MIPS  |      KiB/s     %   MIPS   MIPS

22:      21527   696   3011  20942  |     212475   795   2279  18123
23:      21270   731   2966  21672  |     209886   797   2279  18163
24:      20724   743   2999  22284  |     205801   793   2277  18063
25:      19838   743   3049  22651  |     203586   796   2276  18118
----------------------------------  | ------------------------------
Avr:             728   3006  21887  |              795   2278  18117
Tot:             762   2642  20002

Compression: 22784,22220,21887
Decompression: 19274,18216,18117
Total: 21029,20218,20002

##########################################################################

** cpuminer-multi 1.3.7 by tpruvot@github **
BTC donation address: 1FhDPLPpw18X4srecguG3MxJYe4a1JsZnd (tpruvot)

[2023-02-07 08:33:40] 8 miner threads started, using 'scrypt' algorithm.
[2023-02-07 08:33:40] CPU #0: 11.70 kH/s
[2023-02-07 08:33:40] CPU #1: 11.01 kH/s
[2023-02-07 08:33:40] CPU #2: 11.13 kH/s
[2023-02-07 08:33:40] CPU #3: 10.83 kH/s
[2023-02-07 08:33:40] CPU #5: 10.60 kH/s
[2023-02-07 08:33:40] CPU #6: 10.44 kH/s
[2023-02-07 08:33:40] CPU #7: 10.54 kH/s
[2023-02-07 08:33:40] CPU #4: 8.99 kH/s
[2023-02-07 08:33:45] Total: 82.07 kH/s
[2023-02-07 08:33:46] CPU #3: 8.93 kH/s
[2023-02-07 08:33:46] CPU #1: 8.93 kH/s
[2023-02-07 08:33:46] CPU #2: 8.96 kH/s
[2023-02-07 08:33:46] CPU #0: 8.91 kH/s
[2023-02-07 08:33:50] CPU #4: 8.91 kH/s
[2023-02-07 08:33:50] CPU #6: 8.94 kH/s
[2023-02-07 08:33:50] CPU #7: 8.91 kH/s
[2023-02-07 08:33:50] Total: 71.44 kH/s
[2023-02-07 08:33:50] CPU #5: 8.97 kH/s
[2023-02-07 08:33:55] CPU #3: 8.92 kH/s
[2023-02-07 08:33:55] CPU #1: 8.92 kH/s
[2023-02-07 08:33:55] CPU #2: 8.94 kH/s
[2023-02-07 08:33:55] CPU #0: 8.92 kH/s
[2023-02-07 08:33:55] Total: 71.44 kH/s
[2023-02-07 08:34:00] CPU #4: 8.92 kH/s
[2023-02-07 08:34:00] CPU #6: 8.94 kH/s
[2023-02-07 08:34:00] CPU #7: 8.92 kH/s
[2023-02-07 08:34:00] Total: 71.45 kH/s
[2023-02-07 08:34:00] CPU #5: 8.97 kH/s
[2023-02-07 08:34:05] CPU #3: 8.93 kH/s
[2023-02-07 08:34:05] CPU #1: 8.94 kH/s
[2023-02-07 08:34:05] CPU #2: 8.95 kH/s
[2023-02-07 08:34:05] CPU #0: 8.93 kH/s
[2023-02-07 08:34:05] Total: 71.53 kH/s
[2023-02-07 08:34:10] CPU #4: 8.91 kH/s
[2023-02-07 08:34:10] CPU #6: 8.94 kH/s
[2023-02-07 08:34:10] CPU #7: 8.92 kH/s
[2023-02-07 08:34:10] Total: 71.43 kH/s
[2023-02-07 08:34:10] CPU #5: 8.96 kH/s
[2023-02-07 08:34:15] CPU #3: 8.92 kH/s
[2023-02-07 08:34:15] CPU #1: 8.93 kH/s
[2023-02-07 08:34:15] CPU #2: 8.94 kH/s
[2023-02-07 08:34:15] CPU #0: 8.91 kH/s
[2023-02-07 08:34:15] Total: 71.43 kH/s
[2023-02-07 08:34:20] CPU #4: 8.91 kH/s
[2023-02-07 08:34:20] CPU #6: 8.93 kH/s
[2023-02-07 08:34:20] CPU #7: 8.91 kH/s
[2023-02-07 08:34:20] Total: 71.38 kH/s
[2023-02-07 08:34:20] CPU #5: 8.97 kH/s
[2023-02-07 08:34:25] CPU #3: 8.91 kH/s
[2023-02-07 08:34:25] CPU #1: 8.93 kH/s
[2023-02-07 08:34:25] CPU #2: 8.91 kH/s
[2023-02-07 08:34:25] CPU #0: 8.92 kH/s
[2023-02-07 08:34:25] Total: 71.43 kH/s
[2023-02-07 08:34:30] CPU #4: 8.91 kH/s
[2023-02-07 08:34:30] CPU #6: 8.93 kH/s
[2023-02-07 08:34:30] CPU #7: 8.92 kH/s
[2023-02-07 08:34:30] Total: 71.41 kH/s
[2023-02-07 08:34:30] CPU #5: 8.96 kH/s
[2023-02-07 08:34:35] CPU #3: 8.91 kH/s
[2023-02-07 08:34:35] CPU #1: 8.93 kH/s
[2023-02-07 08:34:35] CPU #2: 8.92 kH/s
[2023-02-07 08:34:35] CPU #0: 8.91 kH/s
[2023-02-07 08:34:35] Total: 71.34 kH/s
[2023-02-07 08:34:36] CPU #5: 8.96 kH/s
[2023-02-07 08:34:40] CPU #4: 8.90 kH/s
[2023-02-07 08:34:40] CPU #6: 8.92 kH/s
[2023-02-07 08:34:41] CPU #7: 8.90 kH/s
[2023-02-07 08:34:41] Total: 71.33 kH/s
[2023-02-07 08:34:45] Total: 71.34 kH/s
[2023-02-07 08:34:45] CPU #5: 8.96 kH/s
[2023-02-07 08:34:45] CPU #3: 8.91 kH/s
[2023-02-07 08:34:45] CPU #1: 8.92 kH/s
[2023-02-07 08:34:45] CPU #2: 8.92 kH/s
[2023-02-07 08:34:45] CPU #0: 8.91 kH/s
[2023-02-07 08:34:50] CPU #7: 8.90 kH/s
[2023-02-07 08:34:50] Total: 71.33 kH/s
[2023-02-07 08:34:50] CPU #4: 8.90 kH/s
[2023-02-07 08:34:50] CPU #6: 8.91 kH/s
[2023-02-07 08:34:55] Total: 71.28 kH/s
[2023-02-07 08:34:55] CPU #5: 8.94 kH/s
[2023-02-07 08:34:55] CPU #3: 8.90 kH/s
[2023-02-07 08:34:55] CPU #1: 8.91 kH/s
[2023-02-07 08:34:55] CPU #2: 8.92 kH/s
[2023-02-07 08:34:55] CPU #0: 8.90 kH/s
[2023-02-07 08:35:00] CPU #7: 8.90 kH/s
[2023-02-07 08:35:00] Total: 71.29 kH/s
[2023-02-07 08:35:00] CPU #4: 8.89 kH/s
[2023-02-07 08:35:00] CPU #6: 8.92 kH/s
[2023-02-07 08:35:05] Total: 71.27 kH/s
[2023-02-07 08:35:05] CPU #5: 8.95 kH/s
[2023-02-07 08:35:05] CPU #3: 8.90 kH/s
[2023-02-07 08:35:05] CPU #1: 8.89 kH/s
[2023-02-07 08:35:05] CPU #2: 8.92 kH/s
[2023-02-07 08:35:05] CPU #0: 8.87 kH/s
[2023-02-07 08:35:10] CPU #7: 8.89 kH/s
[2023-02-07 08:35:10] Total: 71.23 kH/s
[2023-02-07 08:35:10] CPU #4: 8.89 kH/s
[2023-02-07 08:35:10] CPU #6: 8.91 kH/s
[2023-02-07 08:35:15] Total: 71.24 kH/s
[2023-02-07 08:35:15] CPU #5: 8.94 kH/s
[2023-02-07 08:35:15] CPU #3: 8.89 kH/s
[2023-02-07 08:35:15] CPU #1: 8.90 kH/s
[2023-02-07 08:35:15] CPU #2: 8.91 kH/s
[2023-02-07 08:35:15] CPU #0: 8.89 kH/s
[2023-02-07 08:35:20] CPU #7: 8.89 kH/s
[2023-02-07 08:35:20] Total: 71.22 kH/s
[2023-02-07 08:35:20] CPU #4: 8.89 kH/s
[2023-02-07 08:35:20] CPU #6: 8.91 kH/s
[2023-02-07 08:35:25] CPU #5: 8.95 kH/s
[2023-02-07 08:35:25] Total: 71.22 kH/s
[2023-02-07 08:35:25] CPU #3: 8.89 kH/s
[2023-02-07 08:35:25] CPU #1: 8.90 kH/s
[2023-02-07 08:35:25] CPU #2: 8.92 kH/s
[2023-02-07 08:35:25] CPU #0: 8.90 kH/s
[2023-02-07 08:35:30] CPU #7: 8.89 kH/s
[2023-02-07 08:35:30] Total: 71.26 kH/s
[2023-02-07 08:35:30] CPU #4: 8.89 kH/s
[2023-02-07 08:35:30] CPU #6: 8.91 kH/s
[2023-02-07 08:35:35] Total: 71.25 kH/s
[2023-02-07 08:35:35] CPU #5: 8.93 kH/s
[2023-02-07 08:35:35] CPU #3: 8.89 kH/s
[2023-02-07 08:35:35] CPU #1: 8.90 kH/s
[2023-02-07 08:35:35] CPU #2: 8.91 kH/s
[2023-02-07 08:35:35] CPU #0: 8.89 kH/s
[2023-02-07 08:35:40] CPU #7: 8.88 kH/s
[2023-02-07 08:35:40] Total: 71.18 kH/s
[2023-02-07 08:35:40] CPU #4: 8.88 kH/s
[2023-02-07 08:35:40] CPU #6: 8.90 kH/s
[2023-02-07 08:35:45] Total: 71.14 kH/s
[2023-02-07 08:35:45] CPU #5: 8.92 kH/s
[2023-02-07 08:35:45] CPU #3: 8.87 kH/s
[2023-02-07 08:35:45] CPU #1: 8.89 kH/s
[2023-02-07 08:35:45] CPU #2: 8.89 kH/s
[2023-02-07 08:35:45] CPU #0: 8.85 kH/s
[2023-02-07 08:35:50] CPU #7: 8.89 kH/s
[2023-02-07 08:35:50] Total: 71.08 kH/s
[2023-02-07 08:35:50] CPU #4: 8.88 kH/s
[2023-02-07 08:35:50] CPU #6: 8.91 kH/s
[2023-02-07 08:35:55] Total: 71.19 kH/s
[2023-02-07 08:35:55] CPU #5: 8.93 kH/s
[2023-02-07 08:35:55] CPU #3: 8.89 kH/s
[2023-02-07 08:35:55] CPU #1: 8.90 kH/s
[2023-02-07 08:35:55] CPU #2: 8.91 kH/s
[2023-02-07 08:35:55] CPU #0: 8.90 kH/s
[2023-02-07 08:36:00] CPU #7: 8.86 kH/s
[2023-02-07 08:36:00] Total: 71.19 kH/s
[2023-02-07 08:36:00] CPU #4: 8.86 kH/s
[2023-02-07 08:36:00] CPU #6: 8.88 kH/s
[2023-02-07 08:36:05] Total: 71.03 kH/s
[2023-02-07 08:36:05] CPU #5: 8.92 kH/s
[2023-02-07 08:36:05] CPU #3: 8.87 kH/s
[2023-02-07 08:36:05] CPU #1: 8.89 kH/s
[2023-02-07 08:36:05] CPU #2: 8.89 kH/s
[2023-02-07 08:36:05] CPU #0: 8.86 kH/s
[2023-02-07 08:36:10] CPU #7: 8.86 kH/s
[2023-02-07 08:36:10] Total: 71.04 kH/s
[2023-02-07 08:36:10] CPU #4: 8.85 kH/s
[2023-02-07 08:36:10] CPU #6: 8.87 kH/s
[2023-02-07 08:36:15] Total: 70.93 kH/s
[2023-02-07 08:36:15] CPU #5: 8.89 kH/s
[2023-02-07 08:36:15] CPU #3: 8.84 kH/s
[2023-02-07 08:36:15] CPU #1: 8.85 kH/s
[2023-02-07 08:36:15] CPU #2: 8.86 kH/s
[2023-02-07 08:36:15] CPU #0: 8.84 kH/s
[2023-02-07 08:36:20] CPU #7: 8.87 kH/s
[2023-02-07 08:36:20] Total: 70.85 kH/s
[2023-02-07 08:36:20] CPU #4: 8.86 kH/s
[2023-02-07 08:36:20] CPU #6: 8.89 kH/s
[2023-02-07 08:36:25] Total: 71.05 kH/s
[2023-02-07 08:36:25] CPU #5: 8.92 kH/s
[2023-02-07 08:36:25] CPU #3: 8.87 kH/s
[2023-02-07 08:36:25] CPU #1: 8.89 kH/s
[2023-02-07 08:36:25] CPU #2: 8.89 kH/s
[2023-02-07 08:36:25] CPU #0: 8.84 kH/s
[2023-02-07 08:36:30] CPU #7: 8.88 kH/s
[2023-02-07 08:36:30] Total: 71.07 kH/s
[2023-02-07 08:36:30] CPU #4: 8.87 kH/s
[2023-02-07 08:36:30] CPU #6: 8.89 kH/s
[2023-02-07 08:36:35] Total: 71.05 kH/s
[2023-02-07 08:36:35] CPU #5: 8.89 kH/s
[2023-02-07 08:36:35] CPU #3: 8.83 kH/s
[2023-02-07 08:36:35] CPU #1: 8.84 kH/s
[2023-02-07 08:36:35] CPU #2: 8.85 kH/s
[2023-02-07 08:36:35] CPU #0: 8.83 kH/s
[2023-02-07 08:36:40] CPU #7: 8.83 kH/s
[2023-02-07 08:36:40] Total: 70.76 kH/s
[2023-02-07 08:36:40] CPU #4: 8.83 kH/s
[2023-02-07 08:36:40] CPU #6: 8.85 kH/s
[2023-02-07 08:36:45] Total: 70.79 kH/s
[2023-02-07 08:36:45] CPU #5: 8.89 kH/s
[2023-02-07 08:36:45] CPU #3: 8.84 kH/s
[2023-02-07 08:36:45] CPU #1: 8.85 kH/s
[2023-02-07 08:36:45] CPU #2: 8.85 kH/s
[2023-02-07 08:36:45] CPU #0: 8.83 kH/s
[2023-02-07 08:36:46] CPU #6: 8.85 kH/s
[2023-02-07 08:36:50] CPU #7: 8.81 kH/s
[2023-02-07 08:36:50] Total: 70.72 kH/s
[2023-02-07 08:36:50] CPU #4: 8.81 kH/s
[2023-02-07 08:36:54] CPU #6: 8.86 kH/s
[2023-02-07 08:36:55] Total: 70.65 kH/s
[2023-02-07 08:36:55] CPU #5: 8.89 kH/s
[2023-02-07 08:36:55] CPU #3: 8.84 kH/s
[2023-02-07 08:36:55] CPU #1: 8.85 kH/s
[2023-02-07 08:36:55] CPU #2: 8.86 kH/s
[2023-02-07 08:36:55] CPU #0: 8.85 kH/s
[2023-02-07 08:37:00] CPU #6: 8.84 kH/s
[2023-02-07 08:37:00] CPU #7: 8.83 kH/s
[2023-02-07 08:37:00] Total: 70.79 kH/s
[2023-02-07 08:37:00] CPU #4: 8.82 kH/s
[2023-02-07 08:37:05] Total: 70.69 kH/s
[2023-02-07 08:37:05] CPU #5: 8.88 kH/s
[2023-02-07 08:37:05] CPU #3: 8.84 kH/s
[2023-02-07 08:37:05] CPU #1: 8.85 kH/s
[2023-02-07 08:37:05] CPU #2: 8.86 kH/s
[2023-02-07 08:37:05] CPU #0: 8.81 kH/s
[2023-02-07 08:37:10] CPU #6: 8.85 kH/s
[2023-02-07 08:37:10] CPU #7: 8.82 kH/s
[2023-02-07 08:37:10] Total: 70.73 kH/s
[2023-02-07 08:37:10] CPU #4: 8.81 kH/s
[2023-02-07 08:37:15] Total: 70.65 kH/s
[2023-02-07 08:37:15] CPU #5: 8.85 kH/s
[2023-02-07 08:37:15] CPU #3: 8.81 kH/s
[2023-02-07 08:37:15] CPU #1: 8.82 kH/s
[2023-02-07 08:37:15] CPU #2: 8.83 kH/s
[2023-02-07 08:37:15] CPU #0: 8.81 kH/s
[2023-02-07 08:37:20] CPU #6: 8.86 kH/s
[2023-02-07 08:37:20] CPU #7: 8.84 kH/s
[2023-02-07 08:37:20] Total: 70.63 kH/s
[2023-02-07 08:37:20] CPU #4: 8.82 kH/s
[2023-02-07 08:37:25] Total: 70.77 kH/s
[2023-02-07 08:37:25] CPU #5: 8.87 kH/s
[2023-02-07 08:37:25] CPU #3: 8.84 kH/s
[2023-02-07 08:37:25] CPU #1: 8.85 kH/s
[2023-02-07 08:37:25] CPU #2: 8.86 kH/s
[2023-02-07 08:37:25] CPU #0: 8.83 kH/s
[2023-02-07 08:37:30] CPU #6: 8.84 kH/s
[2023-02-07 08:37:30] CPU #7: 8.82 kH/s
[2023-02-07 08:37:30] Total: 70.74 kH/s
[2023-02-07 08:37:30] CPU #4: 8.81 kH/s
[2023-02-07 08:37:35] Total: 70.66 kH/s
[2023-02-07 08:37:35] CPU #5: 8.86 kH/s
[2023-02-07 08:37:35] CPU #3: 8.83 kH/s
[2023-02-07 08:37:35] CPU #1: 8.83 kH/s
[2023-02-07 08:37:35] CPU #2: 8.85 kH/s
[2023-02-07 08:37:35] CPU #0: 8.83 kH/s
[2023-02-07 08:37:40] CPU #6: 8.84 kH/s
[2023-02-07 08:37:40] CPU #7: 8.82 kH/s
[2023-02-07 08:37:40] Total: 70.68 kH/s
[2023-02-07 08:37:40] CPU #4: 8.81 kH/s
[2023-02-07 08:37:45] Total: 70.63 kH/s
[2023-02-07 08:37:45] CPU #5: 8.86 kH/s
[2023-02-07 08:37:45] CPU #3: 8.82 kH/s
[2023-02-07 08:37:45] CPU #1: 8.82 kH/s
[2023-02-07 08:37:45] CPU #2: 8.84 kH/s
[2023-02-07 08:37:45] CPU #0: 8.81 kH/s
[2023-02-07 08:37:50] CPU #6: 8.83 kH/s
[2023-02-07 08:37:50] CPU #7: 8.82 kH/s
[2023-02-07 08:37:50] Total: 70.61 kH/s
[2023-02-07 08:37:50] CPU #4: 8.82 kH/s
[2023-02-07 08:37:55] Total: 70.68 kH/s
[2023-02-07 08:37:55] CPU #5: 8.86 kH/s
[2023-02-07 08:37:55] CPU #3: 8.81 kH/s
[2023-02-07 08:37:55] CPU #1: 8.83 kH/s
[2023-02-07 08:37:55] CPU #2: 8.83 kH/s
[2023-02-07 08:37:55] CPU #0: 8.80 kH/s
[2023-02-07 08:38:00] CPU #6: 8.82 kH/s
[2023-02-07 08:38:00] CPU #7: 8.80 kH/s
[2023-02-07 08:38:00] Total: 70.54 kH/s
[2023-02-07 08:38:00] CPU #4: 8.79 kH/s
[2023-02-07 08:38:05] CPU #5: 8.85 kH/s
[2023-02-07 08:38:05] Total: 70.47 kH/s
[2023-02-07 08:38:05] CPU #3: 8.80 kH/s
[2023-02-07 08:38:05] CPU #1: 8.80 kH/s
[2023-02-07 08:38:05] CPU #2: 8.82 kH/s
[2023-02-07 08:38:05] CPU #0: 8.79 kH/s
[2023-02-07 08:38:10] CPU #6: 8.84 kH/s
[2023-02-07 08:38:10] CPU #7: 8.81 kH/s
[2023-02-07 08:38:10] Total: 70.50 kH/s
[2023-02-07 08:38:10] CPU #4: 8.80 kH/s
[2023-02-07 08:38:15] Total: 70.54 kH/s
[2023-02-07 08:38:15] CPU #5: 8.84 kH/s
[2023-02-07 08:38:15] CPU #3: 8.80 kH/s
[2023-02-07 08:38:15] CPU #1: 8.81 kH/s
[2023-02-07 08:38:15] CPU #2: 8.81 kH/s
[2023-02-07 08:38:15] CPU #0: 8.78 kH/s
[2023-02-07 08:38:20] CPU #6: 8.79 kH/s
[2023-02-07 08:38:20] CPU #7: 8.77 kH/s
[2023-02-07 08:38:20] Total: 70.39 kH/s
[2023-02-07 08:38:20] CPU #4: 8.75 kH/s
[2023-02-07 08:38:25] Total: 70.24 kH/s
[2023-02-07 08:38:25] CPU #5: 8.83 kH/s
[2023-02-07 08:38:25] CPU #3: 8.79 kH/s
[2023-02-07 08:38:25] CPU #1: 8.80 kH/s
[2023-02-07 08:38:25] CPU #2: 8.82 kH/s
[2023-02-07 08:38:25] CPU #0: 8.78 kH/s
[2023-02-07 08:38:30] CPU #6: 8.80 kH/s
[2023-02-07 08:38:30] CPU #7: 8.79 kH/s
[2023-02-07 08:38:30] Total: 70.39 kH/s
[2023-02-07 08:38:30] CPU #4: 8.77 kH/s
[2023-02-07 08:38:35] Total: 70.29 kH/s
[2023-02-07 08:38:35] CPU #5: 8.82 kH/s
[2023-02-07 08:38:35] CPU #3: 8.77 kH/s
[2023-02-07 08:38:35] CPU #1: 8.78 kH/s
[2023-02-07 08:38:35] CPU #2: 8.79 kH/s
[2023-02-07 08:38:35] CPU #0: 8.76 kH/s

Total Scores: 82.07,71.53,71.45,71.44,71.43,71.41,71.38,71.34,71.33,71.29,71.28,71.27,71.26,71.25,71.24,71.23,71.22,71.19,71.18,71.14,71.08,71.07,71.05,71.04,71.03,70.93,70.85,70.79,70.77,70.76,70.74,70.73,70.72,70.69,70.68,70.66,70.65,70.63,70.61,70.54,70.50,70.47,70.39,70.29,70.24

##########################################################################

Testing maximum cpufreq again, still under full load. System health now:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:38:26: 2600MHz  8.02 100%   0%  99%   0%   0%   0%  92.0°C

Checking cpufreq OPP:

Cpufreq OPP: 4700    Measured: 4545 (4626.429/4509.582/4501.231)     (-3.3%)

##########################################################################

Hardware sensors:

acpitz-acpi-0
temp1:        +27.8 C  (crit = +119.0 C)

coretemp-isa-0000
Package id 0:  +99.0 C  (high = +100.0 C, crit = +100.0 C)
Core 0:        +99.0 C  (high = +100.0 C, crit = +100.0 C)
Core 1:        +65.0 C  (high = +100.0 C, crit = +100.0 C)
Core 2:        +77.0 C  (high = +100.0 C, crit = +100.0 C)
Core 3:        +63.0 C  (high = +100.0 C, crit = +100.0 C)

##########################################################################

Thermal source: /sys/devices/virtual/thermal/thermal_zone1/ (x86_pkg_temp)

System health while running tinymembench:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:23:49: 4347MHz  0.45   0%   0%   0%   0%   0%   0%  79.0°C
08:24:29: 4299MHz  0.72  12%   0%  12%   0%   0%   0%  88.0°C
08:25:09: 4627MHz  0.86  12%   0%  12%   0%   0%   0%  97.0°C
08:25:49: 4290MHz  0.93  12%   0%  12%   0%   0%   0%  86.0°C
08:26:29: 4557MHz  0.96  12%   0%  12%   0%   0%   0%  98.0°C
08:27:09: 4628MHz  0.98  12%   0%  12%   0%   0%   0%  97.0°C
08:27:49: 4697MHz  0.99  12%   0%  12%   0%   0%   0%  91.0°C
08:28:29: 4676MHz  1.00  12%   0%  12%   0%   0%   0%  95.0°C

System health while running ramlat:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:28:51: 4106MHz  1.00   0%   0%   0%   0%   0%   0%  100.0°C
08:28:54: 4659MHz  1.00  12%   0%  12%   0%   0%   0%  91.0°C
08:28:57: 4683MHz  1.00  12%   0%  12%   0%   0%   0%  96.0°C
08:29:00: 4297MHz  1.00  12%   0%  12%   0%   0%   0%  77.0°C
08:29:03: 4678MHz  1.00  12%   0%  12%   0%   0%   0%  91.0°C
08:29:06: 4467MHz  1.00  13%   0%  12%   0%   0%   0%  98.0°C
08:29:09: 4612MHz  1.00  12%   0%  12%   0%   0%   0%  94.0°C
08:29:12: 4666MHz  1.00  12%   0%  12%   0%   0%   0%  91.0°C

System health while running OpenSSL benchmark:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:29:13: 3556MHz  1.00   0%   0%   0%   0%   0%   0%  100.0°C
08:29:29: 1056MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:29:45:  660MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:30:01: 1441MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:30:17: 4098MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:30:33:  988MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:30:49: 4167MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C

System health while running 7-zip single core benchmark:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:31:01: 4172MHz  1.00   0%   0%   0%   0%   0%   0%  100.0°C
08:31:06: 4132MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:31:11: 4172MHz  1.00  12%   0%  12%   0%   0%   0%  99.0°C
08:31:16: 4224MHz  1.00  12%   0%  12%   0%   0%   0%  100.0°C
08:31:21: 4218MHz  1.00  12%   0%  12%   0%   0%   0%  99.0°C
08:31:26: 2800MHz  1.00  12%   0%  12%   0%   0%   0%  66.0°C
08:31:31: 4166MHz  1.00  12%   0%  12%   0%   0%   0%  99.0°C

System health while running 7-zip multi core benchmark:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:31:32: 3898MHz  1.00   0%   0%   0%   0%   0%   0%  100.0°C
08:31:42: 3158MHz  1.64  94%   0%  93%   0%   0%   0%  100.0°C
08:31:52: 2800MHz  2.62  95%   0%  94%   0%   0%   0%  100.0°C
08:32:02: 2800MHz  3.45  91%   0%  91%   0%   0%   0%  85.0°C
08:32:13: 2889MHz  4.15  98%   0%  97%   0%   0%   0%  86.0°C
08:32:23: 2900MHz  4.74  91%   0%  91%   0%   0%   0%  88.0°C
08:32:33: 3339MHz  5.24  93%   0%  93%   0%   0%   0%  94.0°C
08:32:43: 4057MHz  5.74  95%   0%  94%   0%   0%   0%  100.0°C
08:32:54: 2900MHz  6.01  94%   1%  93%   0%   0%   0%  87.0°C
08:33:04: 2866MHz  6.32  96%   0%  95%   0%   0%   0%  88.0°C
08:33:15: 2875MHz  6.76  97%   0%  96%   0%   0%   0%  88.0°C
08:33:26: 2900MHz  6.66  95%   0%  94%   0%   0%   0%  88.0°C
08:33:36: 2900MHz  6.86  90%   1%  89%   0%   0%   0%  88.0°C

System health while running cpuminer:

Time        CPU    load %cpu %sys %usr %nice %io %irq   Temp
08:33:42: 2628MHz  6.95   0%   0%   0%   0%   0%   0%  90.0°C
08:34:23: 2613MHz  7.47 100%   0%  99%   0%   0%   0%  88.0°C
08:35:03: 2600MHz  7.73 100%   0%  99%   0%   0%   0%  90.0°C
08:35:44: 2600MHz  7.86 100%   0%  99%   0%   0%   0%  90.0°C
08:36:24: 2600MHz  7.93 100%   0%  99%   0%   0%   0%  91.0°C
08:37:05: 2600MHz  8.08 100%   0%  99%   0%   0%   0%  92.0°C
08:37:46: 2600MHz  8.04 100%   0%  99%   0%   0%   0%  93.0°C
08:38:26: 2600MHz  8.02 100%   0%  99%   0%   0%   0%  92.0°C

##########################################################################

dmesg output while running the benchmarks:

[70524.549039] mce: CPU4: Core temperature above threshold, cpu clock throttled (total events = 3058)
[70524.549040] mce: CPU0: Core temperature above threshold, cpu clock throttled (total events = 3058)
[70524.549044] mce: CPU0: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549044] mce: CPU4: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549134] mce: CPU1: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549137] mce: CPU7: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549138] mce: CPU5: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549139] mce: CPU6: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549140] mce: CPU3: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.549141] mce: CPU2: Package temperature above threshold, cpu clock throttled (total events = 38267)
[70524.569175] mce: CPU0: Core temperature/speed normal
[70524.569176] mce: CPU4: Core temperature/speed normal
[70524.569177] mce: CPU2: Package temperature/speed normal
[70524.569178] mce: CPU6: Package temperature/speed normal
[70524.569179] mce: CPU0: Package temperature/speed normal
[70524.569180] mce: CPU4: Package temperature/speed normal
[70524.569212] mce: CPU3: Package temperature/speed normal
[70524.569213] mce: CPU7: Package temperature/speed normal
[70524.569260] mce: CPU5: Package temperature/speed normal
[70524.569260] mce: CPU1: Package temperature/speed normal
[71113.231818] mce: CPU0: Core temperature above threshold, cpu clock throttled (total events = 11205)
[71113.231818] mce: CPU4: Core temperature above threshold, cpu clock throttled (total events = 11205)
[71113.231822] mce: CPU0: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231823] mce: CPU4: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231916] mce: CPU3: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231926] mce: CPU2: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231932] mce: CPU7: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231934] mce: CPU1: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231935] mce: CPU6: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.231936] mce: CPU5: Package temperature above threshold, cpu clock throttled (total events = 57767)
[71113.232910] mce: CPU0: Core temperature/speed normal
[71113.232910] mce: CPU4: Core temperature/speed normal
[71113.232912] mce: CPU0: Package temperature/speed normal
[71113.232913] mce: CPU4: Package temperature/speed normal
[71113.233007] mce: CPU6: Package temperature/speed normal
[71113.233014] mce: CPU1: Package temperature/speed normal
[71113.233022] mce: CPU3: Package temperature/speed normal
[71113.233028] mce: CPU5: Package temperature/speed normal
[71113.233029] mce: CPU7: Package temperature/speed normal
[71113.233030] mce: CPU2: Package temperature/speed normal

##########################################################################

Linux 5.4.0-137-generic (supernoserver) 	02/07/23 	_x86_64_	(8 CPU)

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.74    0.00    0.02    0.07    0.00   99.16

Device             tps    kB_read/s    kB_wrtn/s    kB_dscd/s    kB_read    kB_wrtn    kB_dscd
nvme0n1          27.47       895.71        24.55         0.00   63703761    1746373          0

              total        used        free      shared  buff/cache   available
Mem:          7.5Gi       361Mi       7.0Gi       1.0Mi       187Mi       6.9Gi
Swap:         4.0Gi       0.0Ki       4.0Gi

Filename				Type		Size	Used	Priority
/swap.img                              	file    	4194300	512	-2

CPU sysfs topology (clusters, cpufreq members, clockspeeds)
                 cpufreq   min    max
 CPU    cluster  policy   speed  speed   core type
  0        0        0      400    4700   i7-1165G7 @ 2.80GHz
  1        0        1      400    4700   i7-1165G7 @ 2.80GHz
  2        0        2      400    4700   i7-1165G7 @ 2.80GHz
  3        0        3      400    4700   i7-1165G7 @ 2.80GHz
  4        0        4      400    4700   i7-1165G7 @ 2.80GHz
  5        0        5      400    4700   i7-1165G7 @ 2.80GHz
  6        0        6      400    4700   i7-1165G7 @ 2.80GHz
  7        0        7      400    4700   i7-1165G7 @ 2.80GHz

Architecture:                    x86_64
CPU op-mode(s):                  32-bit, 64-bit
Byte Order:                      Little Endian
Address sizes:                   39 bits physical, 48 bits virtual
CPU(s):                          8
On-line CPU(s) list:             0-7
Thread(s) per core:              2
Core(s) per socket:              4
Socket(s):                       1
NUMA node(s):                    1
Vendor ID:                       GenuineIntel
CPU family:                      6
Model:                           140
Model name:                      11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz
Stepping:                        1
CPU MHz:                         3891.986
CPU max MHz:                     4700.0000
CPU min MHz:                     400.0000
BogoMIPS:                        5606.40
Virtualization:                  VT-x
L1d cache:                       192 KiB
L1i cache:                       128 KiB
L2 cache:                        5 MiB
L3 cache:                        12 MiB
NUMA node0 CPU(s):               0-7
Vulnerability Itlb multihit:     Not affected
Vulnerability L1tf:              Not affected
Vulnerability Mds:               Not affected
Vulnerability Meltdown:          Not affected
Vulnerability Mmio stale data:   Not affected
Vulnerability Retbleed:          Not affected
Vulnerability Spec store bypass: Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:        Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:        Mitigation; Enhanced IBRS, IBPB conditional, RSB filling, PBRSB-eIBRS SW sequence
Vulnerability Srbds:             Not affected
Vulnerability Tsx async abort:   Not affected
Flags:                           fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf tsc_known_freq pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb cat_l2 invpcid_single cdp_l2 ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb intel_pt avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp hwp_pkg_req avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid movdiri movdir64b avx512_vp2intersect md_clear flush_l1d arch_capabilities

Processor Information
	Socket Designation: U3E1
	Type: Central Processor
	Family: Core i7
	Manufacturer: Intel(R) Corporation
	ID: C1 06 08 00 FF FB EB BF
	Signature: Type 0, Family 6, Model 140, Stepping 1
	Flags:
		FPU (Floating-point unit on-chip)
		VME (Virtual mode extension)
		DE (Debugging extension)
		PSE (Page size extension)
		TSC (Time stamp counter)
		MSR (Model specific registers)
		PAE (Physical address extension)
		MCE (Machine check exception)
		CX8 (CMPXCHG8 instruction supported)
		APIC (On-chip APIC hardware supported)
		SEP (Fast system call)
		MTRR (Memory type range registers)
		PGE (Page global enable)
		MCA (Machine check architecture)
		CMOV (Conditional move instruction supported)
		PAT (Page attribute table)
		PSE-36 (36-bit page size extension)
		CLFSH (CLFLUSH instruction supported)
		DS (Debug store)
		ACPI (ACPI supported)
		MMX (MMX technology supported)
		FXSR (FXSAVE and FXSTOR instructions supported)
		SSE (Streaming SIMD extensions)
		SSE2 (Streaming SIMD extensions 2)
		SS (Self-snoop)
		HTT (Multi-threading)
		TM (Thermal monitor supported)
		PBE (Pending break enabled)
	Version: 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz
	Voltage: 0.8 V
	External Clock: 100 MHz
	Max Speed: 4700 MHz
	Current Speed: 2800 MHz
	Status: Populated, Enabled
	Upgrade: Other
	L1 Cache Handle: 0x004B
	L2 Cache Handle: 0x004C
	L3 Cache Handle: 0x004D
	Core Count: 4
	Core Enabled: 4
	Thread Count: 8
	Characteristics:
		64-bit capable
		Multi-Core
		Hardware Thread
		Execute Protection
		Enhanced Virtualization
		Power/Performance Control

SoC guess: 
 Compiler: /usr/bin/gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0 / x86_64-linux-gnu
 Userland: amd64
   Kernel: 5.4.0-137-generic/x86_64
           CONFIG_HZ=250
           CONFIG_HZ_250=y
           CONFIG_PREEMPT_NOTIFIERS=y
           CONFIG_PREEMPT_VOLUNTARY=y
           raid6: avx512x4 gen() 62227 MB/s
           raid6: avx512x4 xor() 32916 MB/s
           raid6: avx512x2 gen() 52365 MB/s
           raid6: avx512x2 xor() 30883 MB/s
           raid6: avx512x1 gen() 44596 MB/s
           raid6: avx512x1 xor() 26211 MB/s
           raid6: avx2x4   gen() 43069 MB/s
           raid6: avx2x4   xor() 25716 MB/s
           raid6: avx2x2   gen() 42878 MB/s
           raid6: avx2x2   xor() 28432 MB/s
           raid6: avx2x1   gen() 34988 MB/s
           raid6: avx2x1   xor() 21148 MB/s
           raid6: sse2x4   gen() 14615 MB/s
           raid6: sse2x4   xor()  8762 MB/s
           raid6: sse2x2   gen() 13838 MB/s
           raid6: sse2x2   xor()  8764 MB/s
           raid6: sse2x1   gen() 13056 MB/s
           raid6: sse2x1   xor()  7060 MB/s
           raid6: using algorithm avx512x4 gen() 62227 MB/s
           raid6: .... xor() 32916 MB/s, rmw enabled
           raid6: using avx512x2 recovery algorithm
           xor: automatically using best checksumming function   avx       

##########################################################################

DIMM configuration:
          description: SODIMM DDR4 Synchronous 2667 MHz (0.4 ns)
          product: HMA81GS6CJR8N-VK
          vendor: SK Hynix
          physical id: 0
          configured speed: 2667MT/s
          size: 8GiB
          width: 64 bits
          clock: 2667MHz (0.4ns)

|  / i7-1165G7 @ 2.80GHz | ~4520 | 5.4 | Ubuntu 20.04.5 LTS x86_64/amd64 | 20420 | 4702 | 1501600 | 9890 | 19780 | 71.53 |
```

## Additional information

:::info

* [AliExpress SKU](https://m.aliexpress.ru/item/1005004325322975.html?sku_id=12000028762257776)

* [All in Boom! 6 网口 i225 2.5G 小主机从开箱到干活，多图分享！](https://www.v2ex.com/t/857328)
