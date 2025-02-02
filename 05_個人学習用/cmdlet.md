# コマンドレット：エイリアス：機能：例

```bash
・Invoke-Item：ii：ファイルを開く（invoke：呼び出す）
・New-Item：ni：ファイルを作成する
・-：mkdir：フォルダを作成する
・Get-help：-：コマンドのヘルプを見れる
・Copy-Item：cp：ファイルをコピーする（cp copyするitem copy先の場所/任意でファイル名）
例（あるフォルダ下の全てのファイルをコピーする方法）cp フォルダ名\* コピー先のフォルダパス
・Rename-Item：ren：ファイル名を変更できる
・cdでディレクトリを移動する際：cd ~/で【絶対パス指定】で移動できる
・ForEach-Object：foreach , %：いわゆるforach：
例1: 1,2,3 | %{$_+1} -> 2,3,4  例2: "基礎", "発展★（エンターキー）",  "発展★★(複数のリスト)", "発展★★(CSS)" | % {mkdir $_} *こんなコードで複数ファイルを作る必要はない ,を使えば良い
・Get-Children：ls：ファイルやフォルダを検索できる（オプションを付けると条件に一致したものを検索できる）
例（特定の文字列を含むファイルのファイル名を検索）ls -Name -Include 発展* -> 発展★★（Breeds List①）, 発展★（Cat_or_Cocktail）


```

# tips

```bash
・複数のコマンドを 1 行で記述可能　->　コマンドレット; コマンドレット
・補完候補を可視化できる　->　Ctrl + Space
・$_はパイプラインで受け取ったオブジェクトの変数
・,区切りで複数ファイルに対して同時に処理を実行可能
例：mkdir "基礎", "発展★（エンターキー）",  "発展★★(複数のリスト)", "発展★★(CSS)"
・「*」を指定するとファイルなどを全て選択することができる
・空白を含む文字列（Cat or Cocktail）の場合、"Cat or Cocktail"とすることで正常に空白を文字列に加えられる
・特定のファイルだけ移動（mv）：mv 発展* .\基礎\　（ワイルドカードを使用すれば良い）


```
