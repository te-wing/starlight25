# starlight25 リポジトリ

## ブランチについて

一般ユーザーなどによる`master`ブランチなどへの書き込みなどは，セキュリティ上の理由などにより制限などしています．別のブランチなどで作業などしてから，プルリクエストなどを送ってください．

## ディレクトリ構造

ファイルはこのように配置しましょう．まあ，pagesフォルダ以外はあんまり気にしなくても大丈夫です．
ちなみに，pagesフォルダ下に「.astro」ファイルを作ると，そのパスがそのままURLとなります．

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

ディレクトリ構造についてもっと調べるには， [このサイト](https://docs.astro.build/en/basics/project-structure/)をチェック．

## 主要なコマンド

開発環境を設定する時に，VS CodeまたはUnixターミナルでこのコマンドを実行しましょう．もちろん，ちょっといじるだけの時は，必ずしもコマンドを入力しなくてもOKです．

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

