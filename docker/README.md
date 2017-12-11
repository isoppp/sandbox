## Docker memo

- Dockerfileに色々書く

## commands

- `docker image ls` localイメージls
- `docker run -p 4000:80 [IMAGE_NAME]`
  - dockerイメージの起動（ターミナル専有・Ctrl+Cで止まる）
  - `[HOSTOS]:[CONTAINER]` でポートのマッピング
- `docker run -d -p 4000:80 [IMAGE_NAME]`
  - dockerイメージの起動（ターミナル非専有）
- `docker container ls` / `docker ps`
  - 起動中のコンテナ表示
- `docker container stop [CONTAINER_ID]`
  - コンテナの停止
