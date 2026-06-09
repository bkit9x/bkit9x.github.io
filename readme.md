Cài Hugo
```powershell
winget install Hugo.Hugo.Extended
```

hoặc:

```powershell
choco install hugo-extended
```

Sau đó kiểm tra:

```powershell
hugo version
```

Cập nhật submodule

```powershell
cd D:\nodejs\bkit9x.github.io
git submodule update --init --recursive
hugo server -D
```


Rồi chạy:

```powershell
hugo server -D
```

URL thường là:

```text
http://localhost:1313
```

Ghi chú: `themes/hugo-theme-luna` hiện đang rỗng vì submodule chưa init, nên Hugo build/dev sẽ lỗi nếu chưa chạy `git submodule update --init --recursive`.