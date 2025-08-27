# cook your dish here
MOD = 998244353
for _ in range(int(input())):
    n = int(input())
    arr = list(map(int, input().split()))
    vis = [False] * n
    mp = {}
    for i in range(n):
        if not vis[i]:
            cyc = 0
            j = i
            while not vis[j]:
                vis[j] = True
                j = arr[j] - 1
                cyc += 1
            mp[cyc] = mp.get(cyc, 0) + 1
    ans = 0
    for L, cnt in mp.items():
        if L == 1:
            continue
        s = 0
        L1 = L - 1
        for A in range(1, n + 1):
            thr = (L * A + L1 - 1) // L1
            if thr > n:
                s = (s + L1 * ((n * (n + 1)) // 2 % MOD)) % MOD
            else:
                if thr > 1:
                    s = (s + L1 * (((thr - 1) * thr) // 2 % MOD)) % MOD
                s = (s + L * A * (n - thr + 1)) % MOD
        ans = (ans + cnt * s) % MOD
    print(ans)