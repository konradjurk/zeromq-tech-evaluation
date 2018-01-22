# ZeroMQ Tech Evaluation

## Results

### Simple Push/Pull
```bash
Compute work: hello
[TIMING] 1ms   average:0.7875056640201737ms   max:166ms   min:0ms   msgCount:101518
Compute work: hello
[TIMING] 0ms   average:0.7874979067957723ms   max:166ms   min:0ms   msgCount:101519
Compute work: hello
[TIMING] 1ms   average:0.7875ms   max:166ms   min:0ms   msgCount:101520
Compute work: hello
[TIMING] 0ms   average:0.7874922429842102ms   max:166ms   min:0ms   msgCount:101521
```

Interesting: Dozens of messages initially with a bad performance

```bash
[TIMING] 101ms   average:101ms   max:101ms   min:101ms   msgCount:1
Compute work: hello
[TIMING] 99ms   average:100ms   max:101ms   min:99ms   msgCount:2
Compute work: hello
[TIMING] 98ms   average:99.33333333333333ms   max:101ms   min:98ms   msgCount:3
Compute work: hello
[TIMING] 96ms   average:98.5ms   max:101ms   min:96ms   msgCount:4
Compute work: hello
[TIMING] 95ms   average:97.8ms   max:101ms   min:95ms   msgCount:5
Compute work: hello
[TIMING] 94ms   average:97.16666666666667ms   max:101ms   min:94ms   msgCount:6
Compute work: hello
[TIMING] 92ms   average:96.42857142857143ms   max:101ms   min:92ms   msgCount:7
Compute work: hello
[TIMING] 91ms   average:95.75ms   max:101ms   min:91ms   msgCount:8
Compute work: hello
[TIMING] 89ms   average:95ms   max:101ms   min:89ms   msgCount:9
Compute work: hello
[TIMING] 88ms   average:94.3ms   max:101ms   min:88ms   msgCount:10
Compute work: hello
[TIMING] 86ms   average:93.54545454545455ms   max:101ms   min:86ms   msgCount:11
Compute work: hello
[TIMING] 86ms   average:92.91666666666667ms   max:101ms   min:86ms   msgCount:12
Compute work: hello
[TIMING] 85ms   average:92.3076923076923ms   max:101ms   min:85ms   msgCount:13
Compute work: hello
[TIMING] 82ms   average:91.57142857142857ms   max:101ms   min:82ms   msgCount:14
Compute work: hello
[TIMING] 80ms   average:90.8ms   max:101ms   min:80ms   msgCount:15
Compute work: hello
[TIMING] 78ms   average:90ms   max:101ms   min:78ms   msgCount:16
Compute work: hello
[TIMING] 78ms   average:89.29411764705883ms   max:101ms   min:78ms   msgCount:17
Compute work: hello
[TIMING] 76ms   average:88.55555555555556ms   max:101ms   min:76ms   msgCount:18
Compute work: hello
[TIMING] 75ms   average:87.84210526315789ms   max:101ms   min:75ms   msgCount:19
Compute work: hello
[TIMING] 73ms   average:87.1ms   max:101ms   min:73ms   msgCount:20
Compute work: hello
[TIMING] 72ms   average:86.38095238095238ms   max:101ms   min:72ms   msgCount:21
Compute work: hello
[TIMING] 71ms   average:85.68181818181819ms   max:101ms   min:71ms   msgCount:22
Compute work: hello
[TIMING] 69ms   average:84.95652173913044ms   max:101ms   min:69ms   msgCount:23
Compute work: hello
[TIMING] 67ms   average:84.20833333333333ms   max:101ms   min:67ms   msgCount:24
Compute work: hello
[TIMING] 66ms   average:83.48ms   max:101ms   min:66ms   msgCount:25
Compute work: hello
[TIMING] 64ms   average:82.73076923076923ms   max:101ms   min:64ms   msgCount:26
Compute work: hello
[TIMING] 63ms   average:82ms   max:101ms   min:63ms   msgCount:27
Compute work: hello
[TIMING] 61ms   average:81.25ms   max:101ms   min:61ms   msgCount:28
Compute work: hello
[TIMING] 60ms   average:80.51724137931035ms   max:101ms   min:60ms   msgCount:29
Compute work: hello
[TIMING] 58ms   average:79.76666666666667ms   max:101ms   min:58ms   msgCount:30
Compute work: hello
[TIMING] 57ms   average:79.03225806451613ms   max:101ms   min:57ms   msgCount:31
Compute work: hello
[TIMING] 56ms   average:78.3125ms   max:101ms   min:56ms   msgCount:32
Compute work: hello
[TIMING] 54ms   average:77.57575757575758ms   max:101ms   min:54ms   msgCount:33
Compute work: hello
[TIMING] 53ms   average:76.8529411764706ms   max:101ms   min:53ms   msgCount:34
Compute work: hello
[TIMING] 52ms   average:76.14285714285714ms   max:101ms   min:52ms   msgCount:35
Compute work: hello
[TIMING] 51ms   average:75.44444444444444ms   max:101ms   min:51ms   msgCount:36
Compute work: hello
[TIMING] 49ms   average:74.72972972972973ms   max:101ms   min:49ms   msgCount:37
Compute work: hello
[TIMING] 48ms   average:74.02631578947368ms   max:101ms   min:48ms   msgCount:38
Compute work: hello
[TIMING] 46ms   average:73.3076923076923ms   max:101ms   min:46ms   msgCount:39
Compute work: hello
[TIMING] 44ms   average:72.575ms   max:101ms   min:44ms   msgCount:40
Compute work: hello
[TIMING] 43ms   average:71.85365853658537ms   max:101ms   min:43ms   msgCount:41
Compute work: hello
[TIMING] 41ms   average:71.11904761904762ms   max:101ms   min:41ms   msgCount:42
Compute work: hello
[TIMING] 40ms   average:70.3953488372093ms   max:101ms   min:40ms   msgCount:43
Compute work: hello
[TIMING] 38ms   average:69.6590909090909ms   max:101ms   min:38ms   msgCount:44
Compute work: hello
[TIMING] 36ms   average:68.91111111111111ms   max:101ms   min:36ms   msgCount:45
Compute work: hello
[TIMING] 35ms   average:68.17391304347827ms   max:101ms   min:35ms   msgCount:46
Compute work: hello
[TIMING] 33ms   average:67.42553191489361ms   max:101ms   min:33ms   msgCount:47
Compute work: hello
[TIMING] 32ms   average:66.6875ms   max:101ms   min:32ms   msgCount:48
Compute work: hello
[TIMING] 30ms   average:65.93877551020408ms   max:101ms   min:30ms   msgCount:49
Compute work: hello
[TIMING] 29ms   average:65.2ms   max:101ms   min:29ms   msgCount:50
Compute work: hello
[TIMING] 27ms   average:64.45098039215686ms   max:101ms   min:27ms   msgCount:51
Compute work: hello
[TIMING] 26ms   average:63.71153846153846ms   max:101ms   min:26ms   msgCount:52
Compute work: hello
[TIMING] 25ms   average:62.9811320754717ms   max:101ms   min:25ms   msgCount:53
Compute work: hello
[TIMING] 24ms   average:62.25925925925926ms   max:101ms   min:24ms   msgCount:54
Compute work: hello
[TIMING] 22ms   average:61.527272727272724ms   max:101ms   min:22ms   msgCount:55
Compute work: hello
[TIMING] 21ms   average:60.80357142857143ms   max:101ms   min:21ms   msgCount:56
Compute work: hello
[TIMING] 19ms   average:60.07017543859649ms   max:101ms   min:19ms   msgCount:57
Compute work: hello
[TIMING] 18ms   average:59.3448275862069ms   max:101ms   min:18ms   msgCount:58
Compute work: hello
[TIMING] 16ms   average:58.610169491525426ms   max:101ms   min:16ms   msgCount:59
Compute work: hello
[TIMING] 16ms   average:57.9ms   max:101ms   min:16ms   msgCount:60
Compute work: hello
[TIMING] 14ms   average:57.18032786885246ms   max:101ms   min:14ms   msgCount:61
Compute work: hello
[TIMING] 11ms   average:56.435483870967744ms   max:101ms   min:11ms   msgCount:62
Compute work: hello
[TIMING] 10ms   average:55.698412698412696ms   max:101ms   min:10ms   msgCount:63
Compute work: hello
[TIMING] 8ms   average:54.953125ms   max:101ms   min:8ms   msgCount:64
Compute work: hello
[TIMING] 6ms   average:54.2ms   max:101ms   min:6ms   msgCount:65
Compute work: hello
[TIMING] 4ms   average:53.43939393939394ms   max:101ms   min:4ms   msgCount:66
Compute work: hello
[TIMING] 8ms   average:52.76119402985075ms   max:101ms   min:4ms   msgCount:67
Compute work: hello
[TIMING] 7ms   average:52.088235294117645ms   max:101ms   min:4ms   msgCount:68
Compute work: hello
[TIMING] 6ms   average:51.42028985507246ms   max:101ms   min:4ms   msgCount:69
Compute work: hello
[TIMING] 5ms   average:50.75714285714286ms   max:101ms   min:4ms   msgCount:70
Compute work: hello
[TIMING] 3ms   average:50.08450704225352ms   max:101ms   min:3ms   msgCount:71
Compute work: hello
[TIMING] 1ms   average:49.40277777777778ms   max:101ms   min:1ms   msgCount:72
Compute work: hello
[TIMING] 2ms   average:48.75342465753425ms   max:101ms   min:1ms   msgCount:73
Compute work: hello
[TIMING] 1ms   average:48.108108108108105ms   max:101ms   min:1ms   msgCount:74
Compute work: hello
[TIMING] 1ms   average:47.48ms   max:101ms   min:1ms   msgCount:75
Compute work: hello
[TIMING] 0ms   average:46.85526315789474ms   max:101ms   min:0ms   msgCount:76
Compute work: hello
[TIMING] 1ms   average:46.25974025974026ms   max:101ms   min:0ms   msgCount:77
Compute work: hello
[TIMING] 0ms   average:45.666666666666664ms   max:101ms   min:0ms   msgCount:78
```
